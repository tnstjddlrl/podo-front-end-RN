// import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import { DownArrowIcon } from "../../components/Icons";
import SelectTabList from "../../components/SelectTabList.circle";
import {
  Input,
  PurpleBtn,
  UnderLine,
  NormalPopup,
} from "../../components/share";
import { screenSize } from "../../constants";
import { fonts } from "../../fonts";
import RNPickerSelect from "react-native-picker-select";
import NoPage from "../../components/NoPage";
import LayOut from "../../components/LayOut";

const MainContainer = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0 24px;
`;

const TabBox = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 16px;
  position: relative;
  z-index: 998;
`;

const Divider = styled.View`
  width: ${screenSize.width + "px"};
  left: -24px;
  margin-bottom: 20px;
`;

const RequestWrap = styled.View`
  margin-top: 4px;
  background: #fff;
`;

const DropdownWrap = styled.View`
  width: 100%;
  height: 48px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding-left: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  position: relative;
  z-index: 10;
  justify-content: center;
`;

const UploaderWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UrlDisplay = styled.View`
  width: 72%;
  height: 48px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding-left: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  justify-content: center;
`;

const UrlText = styled.Text`
  font-size: 14px;
  color: ${colors.gray};
`;

const ListItem = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

const ListTextWrap = styled.View``;

const ListText = styled.Text`
  ${(p) =>
    p.title &&
    css`
      font-family: ${fonts.bold};
      font-size: 16px;
      color: ${colors.darkBlack};
    `}
  ${(p) =>
    p.date &&
    css`
      color: ${colors.gray};
      font-size: 13px;
    `}
`;

const ListIcon = styled.View`
  justify-content: center;
  align-items: center;
`;

const ListContent = styled.View`
  margin-top: 16px;
  padding-bottom: 40px;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

const ListContentTitleWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const ListContentText = styled.Text`
  font-size: 14px;
  margin-bottom: ${(p) => (p.isLast ? 0 : "8px")};
  ${(p) =>
    p.date &&
    css`
      font-size: 12px;
      color: ${colors.gray};
    `}
`;

const ListStatusIcon = styled.View`
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.border};
  border-radius: 18px;
  margin-left: auto;
  margin-right: 14px;
  ${(p) =>
    p.status === "answered" &&
    css`
      background: #abb4bf80;
    `}
  ${(p) =>
    p.inContent &&
    css`
      margin-right: auto;
      margin-left: 0;
      margin-top: 40px;
      margin-bottom: 12px;
    `}
`;

const ListStatusText = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
`;

const PurpleBtnWrap = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
`;

const tabList = [
  {
    id: 1,
    name: "Request",
    title: "문의하기",
  },
  {
    id: 2,
    name: "History",
    title: "내역확인",
  },
];

const dropdownList = [
  {
    label: "접속 문의",
    value: "connect",
  },
  {
    label: "설정 문의",
    value: "setting",
  },
  {
    label: "기타 문의",
    value: "others",
  },
];

const requestHistory = [
  {
    id: 1,
    title: "문의내역 title",
    date: "YYYY.MM.DD",
    status: "waiting",
    type: "접속 문의",
    description: "lorem ipsum",
    file: "file.jpg",
  },
  {
    id: 2,
    title: "문의내역 title",
    date: "YYYY.MM.DD",
    status: "answered",
    type: "설정 문의",
    description: "lorem ipsum",
    file: "file.jpg",
    answerContent: {
      description:
        "공지사항 YYYY.MM.DD 이번에 100,000 포인트르르 모두에게 지급합니다~ 모두 부자되세요~",
      date: "YYYY.MM.DD",
    },
  },
  {
    id: 3,
    title: "문의내역 title",
    date: "YYYY.MM.DD",
    status: "answered",
    type: "기타 문의",
    description: "lorem ipsum",
    file: "file.jpg",
    answerContent: {
      description:
        "공지사항 YYYY.MM.DD 이번에 100,000 포인트르르 모두에게 지급합니다~ 모두 부자되세요~",
      date: "YYYY.MM.DD",
    },
  },
];

const ManToMan = () => {
  const [isFocused, setIsFocused] = useState({
    Request: true,
    History: false,
  });

  const [requestType, setRequestType] = useState();
  const [sendOn, setSendOn] = useState(false);

  const onClickSelect = (name) => {
    setIsFocused({
      ...{
        Request: false,
        History: false,
      },
      ...{ [name]: !isFocused[name] },
    });
  };
  const [clicked, setClicked] = useState([]);

  const onPressClicked = (num) => {
    if (clicked.filter((item) => item.id === num).length !== 0) {
      setClicked(clicked.filter((item) => item.id !== num));
    } else {
      setClicked(
        clicked.concat(requestHistory.filter((item) => item.id === num))
      );
    }
  };

  const onPressSendOn = () => {
    setSendOn(!sendOn);
  };

  const renderItem = ({ item }) => {
    return (
      <>
        <ListItem onPress={() => onPressClicked(item.id)}>
          <ListTextWrap>
            <ListText title>{item.title}</ListText>
            <ListText date>{item.date}</ListText>
          </ListTextWrap>
          <ListStatusIcon status={item.status}>
            <ListStatusText>
              {item.status === "answered" ? "답변완료" : "답변대기"}
            </ListStatusText>
          </ListStatusIcon>
          <ListIcon
            style={
              clicked.filter((list) => list.id === item.id).length !== 0 && {
                transform: [{ rotateZ: "180deg" }],
              }
            }
          >
            <DownArrowIcon />
          </ListIcon>
        </ListItem>
        {clicked.filter((list) => list.id === item.id).length !== 0 && (
          <ListContent>
            <ListContentTitleWrap>
              <ListContentText>[{item.type}]</ListContentText>
              <ListContentText date>{item.date}</ListContentText>
            </ListContentTitleWrap>
            <ListContentText>1. 제목</ListContentText>
            <ListContentText>{item.title}</ListContentText>
            <ListContentText>2. 내용</ListContentText>
            <ListContentText>{item.description}</ListContentText>
            <ListContentText>3. 첨부파일</ListContentText>
            <ListContentText isLast>{item.file}</ListContentText>
            {item.status === "answered" && item.answerContent && (
              <>
                <ListStatusIcon status={item.status} inContent>
                  <ListStatusText>
                    {item.status === "answered" ? "답변완료" : "답변대기"}
                  </ListStatusText>
                </ListStatusIcon>
                <ListContentTitleWrap>
                  <ListContentText>[답변 내용]</ListContentText>
                  <ListContentText date>
                    {item.answerContent.date}
                  </ListContentText>
                </ListContentTitleWrap>
                <ListContentText>
                  {item.answerContent.description}
                </ListContentText>
              </>
            )}
          </ListContent>
        )}
      </>
    );
  };
  return (
    <MainContainer>
      <TabBox>
        {tabList.map((item) => {
          return (
            <SelectTabList
              key={item.id}
              item={item}
              isFocused={isFocused}
              onPress={onClickSelect}
            />
          );
        })}
      </TabBox>
      {isFocused.Request === true && (
        <RequestWrap>
          <Input width={"100%"} placeholder={"이메일"} marginBottom={"8px"} />
          <Input width={"100%"} placeholder={"연락처"} marginBottom={"20px"} />
          <Divider>
            <UnderLine height={6} />
          </Divider>
          <DropdownWrap>
            <RNPickerSelect
              placeholder={{
                label: "유형 선택",
                value: null,
                color: colors.gray,
              }}
              value={requestType}
              onValueChange={(value) => setRequestType(value)}
              items={dropdownList}
              style={{
                ...pickerSelectStyles,
              }}
            />
          </DropdownWrap>
          <Input
            width={"100%"}
            placeholder={"제목을 입력해주세요."}
            marginBottom={"8px"}
          />
          <Input
            width={"100%"}
            placeholder={"내용을 입력해주세요."}
            multiline
            height={"200px"}
          />
          <UploaderWrap>
            <UrlDisplay>
              <UrlText>PNG,JPG 파일 첨부 가능합니다.</UrlText>
            </UrlDisplay>
            <PurpleBtn width={"84px"} text={"파일첨부"} />
          </UploaderWrap>
          <PurpleBtn
            width={"100%"}
            text={"전송"}
            marginTop={"auto"}
            onPress={onPressSendOn}
          />
        </RequestWrap>
      )}
      {isFocused.History === true && (
        <>
          <UnderLine height={2} />
          <NoPage horizontalZero={true} left={-24} />
          {/* <FlatList
            style={{
              backgroundColor: "#fff",
            }}
            data={requestHistory}
            renderItem={renderItem}
            keyExtractor={(item) => "" + item.id}
          /> */}
        </>
      )}
      {sendOn && (
        <NormalPopup
          title={"1:1 문의 접수"}
          description={
            "문의하신 내용은 문의하기>내역확인에서 확인하실 수 있습니다."
          }
          btnText={"확인"}
          onPress={onPressSendOn}
        />
      )}
    </MainContainer>
  );
};

export default ManToMan;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: colors.gray,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: colors.gray,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
