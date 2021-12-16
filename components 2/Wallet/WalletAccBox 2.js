import React from "react";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import { QuestionIcon } from "../Icons";
import { fonts } from "../../fonts";
import { PurpleBtn, PurpleLineBtn } from "../share";

const AccountBox = styled.View`
  width: 100%;
  ${(p) =>
    p.isSmall
      ? css`
          height: 122px;
        `
      : css`
          height: 154px;
        `}
  border-radius: 12px;
  border-width: 1px;
  border-color: ${colors.border};
  background: #fff;
  padding: 20px;
  align-items: flex-end;
  ${(p) =>
    p.isStacking &&
    css`
      height: 238px;
    `}
`;

const AccountTitle = styled.Text`
  font-family: ${fonts.bold};
  font-size: 16px;
  color: #1d242d;
`;

const AccountTitleWrap = styled.View`
  width: 100%;
  ${(p) =>
    p.isStacking
      ? css`
          height: 29px;
        `
      : css`
          height: 24px;
        `}
  flex-direction: row;
  justify-content: space-between;
`;

const AccountText = styled.Text`
  ${(p) =>
    p.isCoin &&
    css`
      font-family: ${fonts.bold};
      font-size: 24px;
      color: #553aed;
      margin-top: 12px;
      line-height: 30px;
    `}
  ${(p) =>
    p.isPrice &&
    css`
      font-family: ${fonts.medium};
      font-size: 14px;
      color: #1d242d;
      margin-top: 4px;
      line-height: 18px;
    `}
${(p) =>
    p.isDate &&
    css`
      font-family: ${fonts.medium};
      font-size: 13px;
      color: #7f8b9d;
      margin-top: 12px;
      line-height: 18px;
    `}
    ${(p) =>
    p.isSmall &&
    css`
      margin-top: 0;
    `}
`;

const StackingBtnWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const UnstackingBtn = styled.TouchableOpacity`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "48px")};
  background-color: #2a1795;
  border-radius: 12px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
  font-size: 13px;
  font-family: ${fonts.bold};
  color: #fff;
`;

export const WalletAccBox = ({ coinName, coinValue, price, date }) => {
  return (
    <AccountBox>
      <AccountTitleWrap>
        <AccountTitle>My {coinName}</AccountTitle>
        <QuestionIcon />
      </AccountTitleWrap>
      <AccountText isCoin>{coinValue}</AccountText>
      <AccountText isPrice>KRW {price}원</AccountText>
      <AccountText isDate>{date} 기준</AccountText>
    </AccountBox>
  );
};

export const SmallWalletAccBox = ({ coinName, coinValue, price, date }) => {
  return (
    <AccountBox isSmall>
      <AccountTitleWrap>
        <AccountTitle>My {coinName}</AccountTitle>
        <AccountText isCoin isSmall>
          {coinValue}
        </AccountText>
      </AccountTitleWrap>
      <AccountText isPrice>KRW {price}원</AccountText>
      <AccountText isDate>{date} 기준</AccountText>
    </AccountBox>
  );
};

export const StackingBox = ({
  coinName,
  coinValue,
  price,
  date,
  goStacking,
  goUnStacking,
  cancelStacking,
  cancelUnStacking,
}) => {
  return (
    <AccountBox isStacking>
      <AccountTitleWrap isStacking>
        <AccountTitle>My {coinName}</AccountTitle>
        <AccountText isCoin isSmall>
          {coinValue}
        </AccountText>
      </AccountTitleWrap>
      <AccountText isPrice>KRW {price}원</AccountText>
      <AccountText isDate>{date} 기준</AccountText>
      <StackingBtnWrap>
        <PurpleBtn
          text={"스테이킹 신청"}
          width={"48%"}
          fontSize={"13px"}
          height={"44px"}
          onPress={() => goStacking && goStacking()}
        />
        <UnstackingBtn
          width={"48%"}
          height={"44px"}
          onPress={() => goUnStacking && goUnStacking()}
        >
          <BtnText>언스테이킹 신청</BtnText>
        </UnstackingBtn>
        <PurpleLineBtn
          text={"스테이킹 신청 취소"}
          width={"48%"}
          marginTop={"8px"}
          fontSize={"13px"}
          height={"44px"}
          onPress={() => cancelStacking && cancelStacking()}
        />
        <PurpleLineBtn
          text={"언스테이킹 신청 취소"}
          width={"48%"}
          marginTop={"8px"}
          fontSize={"13px"}
          height={"44px"}
          onPress={() => cancelUnStacking && cancelUnStacking()}
        />
      </StackingBtnWrap>
    </AccountBox>
  );
};
