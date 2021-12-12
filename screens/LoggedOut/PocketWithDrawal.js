import axios from "axios";
import React, { useState } from "react";
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
`;

const withDrawalStatus = ["success", "failure"];

const PocketWithDrawal = ({ navigation }) => {
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken) //유저 토큰

  const [price,setPrice] =useState('')
  const [wallet,setWallet] = useState('') 

  function payOutAxios(params) { 
    axios.get('https://softer104.cafe24.com/V1/Wbtc/Entrance', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        wbtc:price,
        customer_wallet:wallet,
      }
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === 'success') {
        // setSelectedList(res.data.list)
        setPopOn("success");
      }
    }).catch((error) => {
      setPopOn("failure");

      if (error.response) {
        console.log(error.response.data);
        // Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }


  const [popOn, setPopOn] = useState("");
  const onClickPopOn = (str) => {
    setPopOn(str);
  };
  const onClickPopOff = () => {
    setPopOn("");
  };
  const onPressNavigate = (str) => {
    if (str === "failure") {
      onClickPopOff();
    } else {
      navigation.navigate("PocketNormal");
    }
  };
  const statusRandom = withDrawalStatus[Math.floor(Math.random() * 2)];
  return (
    <LayOut paddingTop={96}>
      <TextWrapper>
        <PageTitle>WBTC 출금 신청</PageTitle>
        <PageCaption>WBTC 출금 신청을 진행합니다.</PageCaption>
        <PageCaption>출금하실 금액을 입력해주세요.</PageCaption>
      </TextWrapper>
      <Input width={"100%"} placeholder={"금액"} marginBottom={"12px"} value={price} onChangeText={setPrice} />
      <Input width={"100%"} placeholder={"개인 지갑 주소"} value={wallet} onChangeText={setWallet} />
      <BtnWrapper>
        <CancelBtn
          width={"49%"}
          text={"취소"}
          onPress={() => onClickPopOn("cancel")}
        />
        <PurpleBtn
          width={"49%"}
          text={"확인"}
          onPress={() => payOutAxios()}
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
  );
};

export default PocketWithDrawal;
