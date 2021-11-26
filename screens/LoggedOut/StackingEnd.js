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
  position: absolute;
  bottom: 24px;
`;

const StackingEnd = ({ navigation }) => {
  const [popOn, setPopOn] = useState("");

  const onClickPopOn = (str) => {
    setPopOn(str);
  };

  const onClickPopOff = () => {
    setPopOn("");
  };
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
      <Input width={"100%"} placeholder={"Transaction ID를 입력해주세요."} />
      <BtnWrapper>
        <CancelBtn
          width={"49%"}
          text={"취소"}
          onPress={() => onClickPopOn("cancel")}
        />
        <PurpleBtn
          width={"49%"}
          text={"확인"}
          onPress={() => onClickPopOn("stacking")}
        />
      </BtnWrapper>
      {popOn !== "" && (
        <WalletPopup
          status={popOn}
          onPressCancel={() => onClickPopOff()}
          onPress={() => navigation.navigate("PocketStacking")}
        />
      )}
    </LayOut>
  );
};

export default StackingEnd;
