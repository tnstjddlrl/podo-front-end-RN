import React, { useState } from "react";
import { ScrollView } from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import LayOut from "../../components/LayOut";
import { CancelBtn, PurpleBtn } from "../../components/share";
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
  font-family: ${fonts.medium};
  font-size: 14px;
  text-align: center;
`;

const BtnWrapper = styled.View`
  width: ${screenSize.width * 0.7 + "px"};
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: 20px;
  ${(p) =>
    p.absolute
      ? css`
          margin-bottom: 24px;
        `
      : css`
          position: absolute;
          bottom: 24px;
        `}
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
      margin-top: 35%;
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
  background: #20c06a;
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

const CancelWithdraw = ({ navigation }) => {
  const [seeAll, setSeeAll] = useState(false);
  // const [selectedList, setSelectedList] = useState([]);
  const selectedList = null;

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
  return (
    <LayOut paddingTop={96}>
      <TextWrapper>
        <PageTitle>WBTC 출금 신청 취소</PageTitle>
        <PageCaption>신청하신 WBTC 출금을 취소합니다.</PageCaption>
        <PageCaption>취소하실 신청이력을 선택하고 확인을 누르세요.</PageCaption>
      </TextWrapper>
      {!selectedList && (
        <HistoryText noHistory>
          아직 취소하실 출금 신청 이력이 없습니다.
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
              <HistoryStatusText>출금신청</HistoryStatusText>
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
                  <HistoryStatusText>출금신청</HistoryStatusText>
                </HistoryStatus>
              </HistoryBox>
            );
          })}
        </ScrollView>
      )}
      <BtnWrapper absolute={seeAll}>
        <CancelBtn
          width={"49%"}
          text={"취소"}
          onPress={() => navigation.navigate("PocketNormal")}
        />
        <PurpleBtn
          width={"49%"}
          text={"확인"}
          onPress={() => navigation.navigate("PocketNormal")}
        />
      </BtnWrapper>
    </LayOut>
  );
};

export default CancelWithdraw;
