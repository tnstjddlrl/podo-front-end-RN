import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import LayOut from "../../components/LayOut";
import { CancelBtn, Input, PurpleBtn } from "../../components/share";
import WalletPopup from "../../components/Wallet/WalletPopup";
import { screenSize } from "../../constants";
import { fonts } from "../../fonts";

const TextWrapper = styled.View`
  margin-bottom: 28px;
`;

const PageTitle = styled.Text`
  font-family: ${fonts.bold};
  font-size: 24px;
  text-align: center;
  margin-bottom: 12px;
`;

const PageCaption = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${colors.gray};
  ${(p) =>
    p.notTitle &&
    css`
      text-align: left;
      margin-bottom: 8px;
      margin-top: ${(p) => (p.marginTop ? p.marginTop + "px" : 0)};
    `}
`;

const BtnWrapper = styled.View`
  width: ${screenSize.width * 0.7 + "px"};
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: 20px;
`;

const HistoryBox = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 14px 16px 16px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(p) => (p.selected ? colors.purple : colors.border)};
  margin-bottom: 8px;
`;

const HistoryText = styled.Text`
  ${(p) =>
    p.date &&
    css`
      font-family: ${fonts.medium};
      font-size: 13px;
      line-height: 14px;
      color: #31383fbf;
      margin-bottom: 8px;
    `}
  ${(p) =>
    p.quantity &&
    css`
      font-family: ${fonts.bold};
      font-size: 14px;
      line-height: 16.8px;
      color: #31383f;
      margin-bottom: ${(p) => (p.hasTransaction ? "12px" : 0)};
    `}
    ${(p) =>
    p.noHistory &&
    css`
      font-size: 16px;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 40px;
      color: ${colors.gray};
    `}
`;

const HistoryTextBlock = styled.View``;

const HistoryStatus = styled.TouchableOpacity`
  padding: 4px 8px;
  height: 20px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  background: ${colors.gray};
`;

const HistoryStatusText = styled.Text`
  color: #fff;
  font-family: ${fonts.medium};
  font-size: 10px;
`;

const SeeAllBtn = styled.TouchableOpacity`
  align-self: center;
  margin-top: 24px;
`;

const SeeAllBtnText = styled.Text`
  font-family: ${fonts.medium};
  font-size: 14px;
  color: ${colors.gray};
`;

const sampleHistory = [
  {
    date: "2021.06.18",
    quantity: "0.0000001",
  },
  {
    date: "2021.06.20",
    quantity: "0.0000001",
  },
  {
    date: "2021.06.21",
    quantity: "0.0000001",
  },
  {
    date: "2021.06.22",
    quantity: "0.0000001",
  },
  {
    date: "2021.06.23",
    quantity: "0.0000001",
  },
];

const withDrawalStatus = ["unstackingSuccess", "unstackingFailure"];

const UnStackingWithdrawal = ({ navigation }) => {
  const [seeAll, setSeeAll] = useState(false);
  // const [selectedList, setSelectedList] = useState([]);
  const selectedList = null;
  const [popOn, setPopOn] = useState("");

  const onClickSetSeeAll = () => {
    setSeeAll(true);
  };

  const onClickAddListToggle = (index) => {
    if (
      selectedList.filter((item) => item === sampleHistory[index]).length === 0
    ) {
      setSelectedList(selectedList.concat(sampleHistory[index]));
    } else {
      setSelectedList(
        selectedList.filter((item) => item !== sampleHistory[index])
      );
    }
  };

  const onClickPopOn = (str) => {
    setPopOn(str);
  };

  const onClickPopOff = () => {
    setPopOn("");
  };

  const onPressNavigate = (str) => {
    if (str === "unstackingFailure") {
      onClickPopOff();
    } else {
      navigation.navigate("PocketStacking");
    }
  };

  const statusRandom = withDrawalStatus[Math.floor(Math.random() * 2)];
  return (
    <ScrollView>
      <LayOut paddingTop={66} backgroundColor={"#fff"} heightFull={true}>
        <TextWrapper>
          <PageTitle>POD 언스테이킹 신청</PageTitle>
          <PageCaption>POD 언스테이킹을 신청합니다.</PageCaption>
          <PageCaption>
            언스테이킹 시 활용할 아래의 정보를 입력하신 후
          </PageCaption>
          <PageCaption>확인을 눌러주세요.</PageCaption>
        </TextWrapper>
        <PageCaption notTitle>
          1. 언스테이킹 할 스테이킹 이력을 선택하세요.
        </PageCaption>
        {!selectedList && (
          <HistoryText noHistory>
            아직 언스테이킹 할 스테이킹 이력이 없습니다.
          </HistoryText>
        )}
        {selectedList && !seeAll && (
          <>
            <HistoryBox
              onPress={() => onClickAddListToggle(0)}
              selected={
                selectedList.filter((list) => list === sampleHistory[0])
                  .length !== 0
              }
            >
              <HistoryTextBlock>
                <HistoryText date>{sampleHistory[0].date}</HistoryText>
                <HistoryText quantity>{sampleHistory[0].quantity}</HistoryText>
              </HistoryTextBlock>
              <HistoryStatus>
                <HistoryStatusText>스테이킹 완료</HistoryStatusText>
              </HistoryStatus>
            </HistoryBox>
            <SeeAllBtn onPress={() => onClickSetSeeAll()}>
              <SeeAllBtnText>+ 신청이력 더보기</SeeAllBtnText>
            </SeeAllBtn>
          </>
        )}
        {selectedList && seeAll && (
          <ScrollView>
            {sampleHistory.map((item, index) => {
              return (
                <HistoryBox
                  key={index}
                  onPress={() => onClickAddListToggle(index)}
                  selected={
                    selectedList.filter((list) => list === item).length !== 0
                  }
                >
                  <HistoryTextBlock>
                    <HistoryText date>{item.date}</HistoryText>
                    <HistoryText quantity>{item.quantity}</HistoryText>
                  </HistoryTextBlock>
                  <HistoryStatus>
                    <HistoryStatusText>스테이킹 완료</HistoryStatusText>
                  </HistoryStatus>
                </HistoryBox>
              );
            })}
          </ScrollView>
        )}
        <PageCaption notTitle>2. 개인 지갑 Address</PageCaption>
        <Input width={"100%"} placeholder={"개인 지갑 주소를 입력해주세요."} />
        <BtnWrapper>
          <CancelBtn
            width={"49%"}
            text={"취소"}
            onPress={() => onClickPopOn("cancel")}
          />
          <PurpleBtn
            width={"49%"}
            text={"확인"}
            onPress={() =>
              onClickPopOn(selectedList ? statusRandom : "unstackingNoData")
            }
          />
        </BtnWrapper>
        {popOn !== "" && (
          <WalletPopup
            onPress={() => onPressNavigate(popOn)}
            status={popOn}
            onPressCancel={() => onClickPopOff()}
          />
        )}
      </LayOut>
    </ScrollView>
  );
};

export default UnStackingWithdrawal;
