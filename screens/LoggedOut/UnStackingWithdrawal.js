import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components/native";
import { AtomUserToken } from "../../atom/atom";
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
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken) //유저 토큰

  const [selectedList, setSelectedList] = useState([])

  const [popOn, setPopOn] = useState("");

  useEffect(() => {
    StakingCompleteHistoryLoadAxios()
  }, [])

  function StakingCompleteHistoryLoadAxios(params) { //스테이킹 신청내역
    axios.get('https://softer104.cafe24.com/V1/Podo/StakeListComp', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 100,
        offset: 0,
      }
    }).then((res) => {
      console.log('스테이킹 완료 내역:')
      console.log(res.data);
      if (res.data.msg === 'success') {
        setSelectedList(res.data.list)
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

  function UnStakingAxios(params) { //스테이킹 신청내역
    axios.get('https://softer104.cafe24.com/V1/Podo/UnStake', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        customer_wallet: walletAddress,
        target_num: selectNum,
      }
    }).then((res) => {
      console.log('스테이킹 완료 내역:')
      console.log(res.data);
      if (res.data.msg === 'success') {
        Alert.alert('언스테이킹을 신청하였습니다.', '', [
          { text: "확인", onPress: () => navigation.goBack() }
        ])
      }
    }).catch((error) => {
      Alert.alert('오류가 발생하였습니다.', '잠시후 다시 시도해주세요', [
        { text: "확인", onPress: () => navigation.goBack() }
      ])
      if (error.response) {
        console.log(error.response.data);
        // Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }




  const [walletAddress, setWalletAddress] = useState('')
  const [selectNum, setSelectNum] = useState()
  const onClickAddListToggle = (index) => {
    setSelectNum(index)
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
      <LayOut paddingTop={30} backgroundColor={"#fff"} heightFull={true}>
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
        <ScrollView showsVerticalScrollIndicator={false}>
          {selectedList.map((item, index) => {
            return (
              <HistoryBox
                key={index}
                onPress={() => onClickAddListToggle(item.num)}
                selected={
                  (item.num == selectNum)
                }>
                <HistoryTextBlock>
                  <HistoryText date>{item.complete_date}</HistoryText>
                  <HistoryText quantity>{item.podo}</HistoryText>
                </HistoryTextBlock>
                <HistoryStatus>
                  <HistoryStatusText>스테이킹 완료</HistoryStatusText>
                </HistoryStatus>
              </HistoryBox>
            );
          })}
        </ScrollView>

        <PageCaption notTitle>2. 개인 지갑 Address</PageCaption>
        <Input width={"100%"} placeholder={"개인 지갑 주소를 입력해주세요."} onChangeText={setWalletAddress} />
        <View style={{ marginBottom: 10 }}>
          <BtnWrapper>
            <CancelBtn
              width={"49%"}
              text={"취소"}
              onPress={() => navigation.goBack()}
            />
            <PurpleBtn
              width={"49%"}
              text={"확인"}
              onPress={() =>
                UnStakingAxios()
              }
            />
          </BtnWrapper>
        </View>
        {/* {popOn !== "" && (
          <WalletPopup
            onPress={() => onPressNavigate(popOn)}
            status={popOn}
            onPressCancel={() => onClickPopOff()}
          />
        )} */}
      </LayOut>
    </ScrollView>
  );
};

export default UnStackingWithdrawal;
