import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
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
  font-family: ${fonts.medium};
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

const InputWithBtnWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CoinBtnWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CoinBtn = styled.TouchableOpacity`
  width: 100px;
  height: 48px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  ${(p) =>
    p.checked
      ? css`
          background: ${colors.purple};
        `
      : css`
          border-width: 1px;
          border-color: ${colors.gray};
        `}
`;

const CoinBtnText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.bold};
  ${(p) =>
    p.checked
      ? css`
          color: #fff;
        `
      : css`
          color: ${colors.gray};
        `}
`;

const priceList = ["200,000", "500,000", "1,000,000"];

const StackingWithdrawal = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(null);
  const [userWalletAddress, setUserWalletAddress] = useState('')
  const [userCustomPodo, setUserCustomPodo] = useState('')

  useEffect(() => {
    console.log(userCustomPodo);
    if (userCustomPodo && isChecked != null) {
      setIsChecked(null)
      Alert.alert('직접 입력시 버튼 입력은 불가능합니다!')
    }
  }, [userCustomPodo, isChecked])


  const onClickChecked = (index) => {
    if (isChecked === index) {
      setIsChecked();
    } else {
      setIsChecked(index);
    }
  };
  return (
    <LayOut paddingTop={66}>
      <ScrollView>
        <TextWrapper>
          <PageTitle>POD 스테이킹 신청</PageTitle>
          <PageCaption>POD 스테이킹 신청을 진행합니다.</PageCaption>
          <PageCaption>스테이킹 진행시 코인을 전송할 지갑의</PageCaption>
          <PageCaption>주소는 아래의 Wallet address를 확인하세요.</PageCaption>
        </TextWrapper>
        <InputWithBtnWrap>
          <Input width={"75%"} placeholder={"Mother wallet address"} onChangeText={setUserWalletAddress} />
          <PurpleBtn text={"복사"} width={"74px"} />
        </InputWithBtnWrap>
        <PageCaption notTitle marginTop={32}>
          1. 전송하실 개인 지갑의 address를 입력해주세요.
        </PageCaption>
        <Input width={"100%"} placeholder={"개인 지갑 주소"} />
        <PageCaption notTitle marginTop={24}>
          2. 스테이킹 하실 코인 수량을 입력해주세요.
        </PageCaption>
        <CoinBtnWrap>
          {priceList.map((item, index) => {
            return (
              <CoinBtn
                key={index}
                onPress={() => onClickChecked(index)}
                checked={isChecked === index}
              >
                <CoinBtnText checked={(isChecked) === index}>{item}</CoinBtnText>
              </CoinBtn>
            );
          })}
        </CoinBtnWrap>
        <PageCaption notTitle marginTop={12}>
          *위의 금액은 리워드를 추가로 받으실 수 있는 등급의 기준 코인 갯수입니다.
          미달되는 스테이킹을 하실 경우 리워드가 적용되지 않습니다.
        </PageCaption>
        <Input width={"100%"} placeholder={"그 외"} onChangeText={setUserCustomPodo} />
        <PageCaption notTitle marginTop={24}>
          3. 확인을 눌러주세요.
        </PageCaption>
        <BtnWrapper>
          <CancelBtn
            width={"49%"}
            text={"취소"}
            onPress={() => navigation.navigate("PocketStacking")}
          />
          <PurpleBtn
            width={"49%"}
            text={"확인"}
            onPress={() => navigation.navigate("StackingEnd")}
          />
        </BtnWrapper>
      </ScrollView>
    </LayOut>
  );
};

export default StackingWithdrawal;
