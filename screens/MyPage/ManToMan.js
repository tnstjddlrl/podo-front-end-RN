// import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, Modal, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
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

import axios from 'axios';
import { AtomUserId, AtomUserToken } from "../../atom/atom";
import { useRecoilState } from "recoil";

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

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

const PopupText = styled.Text`
  font-size: 15px;
  color: #2f3741;
  margin-bottom: 16px;
  ${(p) =>
    p.title &&
    css`
      font-size: 20px;
      font-family: ${fonts.bold};
      margin-bottom: 4px;
    `}
  ${(p) =>
    p.description &&
    css`
      min-height: 60px;
    `}
`;

export const PurpleLineBtn = ({
  width,
  height,
  marginTop,
  text,
  onPress,
  marginBottom,
  fontSize,
}) => {
  return (
    <LineBtn
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
      onPress={() => onPress && onPress()}
    >
      <LineBtnText fontSize={fontSize}>{text}</LineBtnText>
    </LineBtn>
  );
};

const tabList = [
  {
    id: 1,
    name: "Request",
    title: "????????????",
  },
  {
    id: 2,
    name: "History",
    title: "????????????",
  },
];

const dropdownList = [
  {
    label: "?????? ??????",
    value: "?????? ??????",
  },
  {
    label: "?????? ??????",
    value: "?????? ??????",
  },
  {
    label: "?????? ??????",
    value: "?????? ??????",
  },
];

const requestHistory = [
  {
    id: 1,
    title: "???????????? title",
    date: "YYYY.MM.DD",
    status: "waiting",
    type: "?????? ??????",
    description: "lorem ipsum",
    file: "file.jpg",
  },
  {
    id: 2,
    title: "???????????? title",
    date: "YYYY.MM.DD",
    status: "answered",
    type: "?????? ??????",
    description: "lorem ipsum",
    file: "file.jpg",
    answerContent: {
      description:
        "???????????? YYYY.MM.DD ????????? 100,000 ??????????????? ???????????? ???????????????~ ?????? ???????????????~",
      date: "YYYY.MM.DD",
    },
  },
  {
    id: 3,
    title: "???????????? title",
    date: "YYYY.MM.DD",
    status: "answered",
    type: "?????? ??????",
    description: "lorem ipsum",
    file: "file.jpg",
    answerContent: {
      description:
        "???????????? YYYY.MM.DD ????????? 100,000 ??????????????? ???????????? ???????????????~ ?????? ???????????????~",
      date: "YYYY.MM.DD",
    },
  },
];

const ManToMan = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState({
    Request: true,
    History: false,
  });

  const [requestType, setRequestType] = useState();
  const [sendOn, setSendOn] = useState(false);

  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken)

  const [atUserId, setAtUserId] = useRecoilState(AtomUserId)  //???????????????

  const [userPhone, setUserPhone] = useState('')
  const [userid, setuserid] = useState(atUserId)
  const [qusetionTitle, setQuestionTitle] = useState('')
  const [questionContent, setQuestionContest] = useState('')

  const [imgbase64, setImgbase64] = useState('')
  const [fileName, setFileName] = useState('')


  function HistoryLoadAxios(params) { //1???1 ?????? ?????? ????????????
    axios.get('https://softer104.cafe24.com/V1/Inquiry/List', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 10,
        offset: 0,
        w_name: 'num',
        w_para: 4
      }
    }).then((res) => {

      if (res.data.msg === 'success') {
        console.log(res.data.list);
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        // Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }


  function WriteQuestionAxios(params) { //1???1 ?????? ??????
    console.log(userid);
    axios.post('https://softer104.cafe24.com/V1/Inquiry/Register', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        phone: userPhone,
        email: userid,
        type: requestType,
        title: qusetionTitle,
        content: questionContent,
        image: imgbase64
      }
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === 'success') {
        console.log(res.data.msg);
        setSendOn(!sendOn);
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        // Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }
  useEffect(() => {
    HistoryLoadAxios()
  }, [])

  function ImagePickerOpen(params) {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.1,
      includeBase64: true,
    }).then((res) => {
      // console.log(res.assets[0])
      setImgbase64(res.assets[0].base64)
      setFileName(res.assets[0].fileName)
    });
  }


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
    WriteQuestionAxios()
  };

  function modalOk(params) {
    setSendOn(!sendOn);
    navigation.goBack()
  }

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
              {item.status === "answered" ? "????????????" : "????????????"}
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
            <ListContentText>1. ??????</ListContentText>
            <ListContentText>{item.title}</ListContentText>
            <ListContentText>2. ??????</ListContentText>
            <ListContentText>{item.description}</ListContentText>
            <ListContentText>3. ????????????</ListContentText>
            <ListContentText isLast>{item.file}</ListContentText>
            {item.status === "answered" && item.answerContent && (
              <>
                <ListStatusIcon status={item.status} inContent>
                  <ListStatusText>
                    {item.status === "answered" ? "????????????" : "????????????"}
                  </ListStatusText>
                </ListStatusIcon>
                <ListContentTitleWrap>
                  <ListContentText>[?????? ??????]</ListContentText>
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <RequestWrap>
            <Input width={"100%"} placeholder={"?????????"} marginBottom={"8px"} value={userid} onChangeText={setuserid} />
            <Input width={"100%"} placeholder={"?????????"} marginBottom={"20px"} onChangeText={userPhone} />
            <Divider>
              <UnderLine height={6} />
            </Divider>
            <DropdownWrap>
              <RNPickerSelect
                placeholder={{
                  label: "?????? ??????",
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
              placeholder={"????????? ??????????????????."}
              marginBottom={"8px"}
              onChangeText={setQuestionTitle}
            />
            <Input
              width={"100%"}
              placeholder={"????????? ??????????????????."}
              multiline
              height={"200px"}
              onChangeText={setQuestionTitle}
            />
            <UploaderWrap>
              <UrlDisplay>
                {fileName != '' ? <UrlText>????????????!</UrlText> : <UrlText>PNG,JPG ?????? ?????? ???????????????.</UrlText>}

              </UrlDisplay>
              <PurpleBtn width={"84px"} text={"????????????"} onPress={ImagePickerOpen} />
            </UploaderWrap>
            <PurpleBtn
              width={"100%"}
              text={"??????"}
              marginTop={"auto"}
              onPress={onPressSendOn}
            />
          </RequestWrap>
        </ScrollView>
      )}
      {isFocused.History === true && (
        <>
          <UnderLine height={2} />
          {/* <NoPage horizontalZero={true} left={-24} /> */}
          <FlatList
            style={{
              backgroundColor: "#fff",
            }}
            data={requestHistory}
            renderItem={renderItem}
            keyExtractor={(item) => "" + item.id}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}

      <Modal visible={sendOn} transparent={true}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: "center", justifyContent: "center" }}>
          <View style={{ width: screenSize.width - 40, backgroundColor: 'white', borderRadius: 14, padding: 20 }}>
            <PopupText title>1:1 ?????? ??????</PopupText>
            <PopupText description>???????????? ????????? ????????????{'>'}?????????????????? ???????????? ??? ????????????.</PopupText>
            <PurpleBtn
              width={"100%"}
              marginTop={"auto"}
              text={"??????"}
              onPress={() => modalOk()}
            />
          </View>
        </SafeAreaView>
      </Modal>



      {/* {sendOn && (
        <NormalPopup
          title={"1:1 ?????? ??????"}
          description={
            "???????????? ????????? ????????????>?????????????????? ???????????? ??? ????????????."
          }
          btnText={"??????"}
          onPress={onPressSendOn}
        />
      )} */}
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
