import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
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
  font-family: ${fonts.medium};
  font-size: 14px;
  text-align: center;
  color: ${colors.gray};
`;

const BtnWrapper = styled.View`
  width: ${screenSize.width * 0.7 + "px"};
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: 20px;
  position: absolute;
  bottom: 24px;
`;

const StackingEnd = ({ navigation, route }) => {
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken) //유저 토큰

  const [popOn, setPopOn] = useState("");

  const [transcation, setTranscation] = useState('')

  const onClickPopOn = (str) => {
    setPopOn(str);
  };

  const onClickPopOff = () => {
    setPopOn("");
  };

  useEffect(() => {
    console.log(route.params)
  }, [])

  function StakingAxios(params) { //스테이킹 신청내역
    axios.get('https://softer104.cafe24.com/V1/Podo/Stake', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        transactionId: transcation,
        customer_wallet: route.params.address,
        podo: route.params.podo
      }
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === 'success') {
        onClickPopOn("stacking")
      }
    }).catch((error) => {
      Alert.alert('오류가 발생하였습니다!', '', [
        { text: "OK", onPress: () => navigation.navigate("PocketStacking") }
      ])
      if (error.response) {
        console.log(error.response.data);
        // Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }

  return (
    <LayOut paddingTop={66}>
      <TextWrapper>
        <PageTitle>POD 스테이킹 신청</PageTitle>
        <PageCaption>전송에서 발생한 Transaction ID를 하단에</PageCaption>
        <PageCaption>입력하고 확인을 눌러주세요.</PageCaption>
        <PageCaption>
          거래의 정확성을 위한 확인절차를 위해서 사용됩니다.
        </PageCaption>
      </TextWrapper>
      <Input width={"100%"} placeholder={"Transaction ID를 입력해주세요."} onChangeText={setTranscation} />
      <BtnWrapper>
        <CancelBtn
          width={"49%"}
          text={"취소"}
          onPress={() => onClickPopOn("cancel")}
        />
        <PurpleBtn
          width={"49%"}
          text={"확인"}
          onPress={() => { StakingAxios() }}
        />
      </BtnWrapper>
      {popOn !== "" && (
        <WalletPopup
          status={popOn}
          onPressCancel={() => { onClickPopOff() }}
          onPress={() => navigation.navigate("PocketStacking")}
        />
      )}
    </LayOut>
  );
};

export default StackingEnd;
