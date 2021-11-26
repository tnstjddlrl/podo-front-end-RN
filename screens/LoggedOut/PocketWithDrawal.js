import React, { useState } from "react";
import styled from "styled-components/native";
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
      <Input width={"100%"} placeholder={"금액"} marginBottom={"12px"} />
      <Input width={"100%"} placeholder={"개인 지갑 주소"} />
      <BtnWrapper>
        <CancelBtn
          width={"49%"}
          text={"취소"}
          onPress={() => onClickPopOn("cancel")}
        />
        <PurpleBtn
          width={"49%"}
          text={"확인"}
          onPress={() => onClickPopOn(statusRandom)}
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
