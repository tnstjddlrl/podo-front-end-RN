import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components/native";
import { AtomUserToken } from "../../atom/atom";
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
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken)


  const [seeAll, setSeeAll] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [selectNum, setSelectNum] = useState('')

  useEffect(() => {
    LoadWbtcPayOutHistoryAxios()
  }, [])

  function LoadWbtcPayOutHistoryAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/Wbtc/EntranceList', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 100,
        offset: 0
      }
    }).then((res) => {
      console.log('???????????????');
      console.log(res.data);
      var array = selectedList.concat(res.data.data)
      setSelectedList(array)

    }).catch((error) => {
      console.log(error);
    })
  }

  function CancelAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/Wbtc/Cancel', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        num: selectNum,
      }
    }).then((res) => {
      console.log('????????????');
      console.log(res.data);
      if (res.data.msg === 'success') {
        Alert.alert('?????? ????????? ?????????????????????.')
        navigation.navigate("PocketNormal")
      }

    }).catch((error) => {
      console.log(error);
      Alert.alert('????????? ?????????????????????.')
      navigation.navigate("PocketNormal")
    })
  }


  const onClickAddListToggle = (index) => {
    setSelectNum(index)
  };
  return (
    <LayOut paddingTop={96}>
      <TextWrapper>
        <PageTitle>WBTC ?????? ?????? ??????</PageTitle>
        <PageCaption>???????????? WBTC ????????? ???????????????.</PageCaption>
        <PageCaption>???????????? ??????????????? ???????????? ????????? ????????????.</PageCaption>
      </TextWrapper>
      {!selectedList && (
        <HistoryText noHistory>
          ?????? ???????????? ?????? ?????? ????????? ????????????.
        </HistoryText>
      )}
      <ScrollView>
        {selectedList.map((item, index) => {
          return (
            <HistoryBox
              key={index}
              onPress={() => onClickAddListToggle(item.num)}
              selected={
                item.num == selectNum
              }
            >
              <HistoryTextBlock>
                <HistoryText date>{item.entrance_date}</HistoryText>
                <HistoryText quantity>{item.wbtc}</HistoryText>
              </HistoryTextBlock>
              <HistoryStatus>
                <HistoryStatusText>????????????</HistoryStatusText>
              </HistoryStatus>
            </HistoryBox>
          );
        })}
      </ScrollView>
      {/* <BtnWrapper absolute={seeAll}>
        </BtnWrapper> */}
      <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>

        <CancelBtn
          width={"49%"}
          text={"??????"}
          onPress={() => navigation.navigate("PocketNormal")}
        />
        <PurpleBtn
          width={"49%"}
          text={"??????"}
          onPress={() => CancelAxios()}
        />
      </View>
    </LayOut>
  );
};

export default CancelWithdraw;
