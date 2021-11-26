import React from "react";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import { fonts } from "../../fonts";
import { OptionMark, PurpleMark } from "../Mark";

const Container = styled.View`
  background-color: ${colors.white};
  padding: 20px;
  margin-bottom: 8px;
`;

const TextRow = styled.View`
  margin: 12px 0 4px 0;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  ${(p) =>
    p.brand &&
    css`
      font-size: 14px;
      color: ${colors.gray};
    `}
  ${(p) =>
    p.title &&
    css`
      font-size: 24px;
      font-family: ${fonts.bold};
      color: ${colors.darkBlack};
      margin: 4px 0;
    `}
${(p) =>
    p.disCountPercent &&
    css`
      font-size: 13px;
      font-family: ${fonts.bold};
      color: ${colors.red};
      margin-right: 5px;
    `}
${(p) =>
    p.prevPrice &&
    css`
      font-size: 13px;
      color: ${colors.darkBlack};
      text-decoration: line-through;
    `}
    ${(p) =>
    p.price &&
    css`
      font-size: 28px;
      font-family: ${fonts.bold};
      color: ${colors.purple};
      margin-bottom: 12px;
    `}
    ${(p) =>
    p.reward &&
    css`
      font-size: 13px;
      color: ${colors.orange};
      margin-bottom: 12px;
    `}
    ${(p) =>
    p.reward &&
    css`
      font-size: 12px;
      color: ${colors.darkBlack};
    `}
`;

const DeliverBox = styled.View`
  width: 100%;
  border: 1px solid ${colors.border};
  padding: 12px;
`;

const Summary = ({
  brand,
  title,
  option,
  disCountPercent,
  prevPrice,
  price,
  reward,
  freeShipping,
  shippingInfo,
}) => {
  return (
    <Container>
      <Text brand>{brand}</Text>
      <Text title>{title}</Text>
      <OptionMark option={option} />
      <TextRow>
        <Text disCountPercent>{disCountPercent}</Text>
        <Text prevPrice>{prevPrice}</Text>
      </TextRow>
      <Text price>{price}</Text>
      <DeliverBox>
        <Text reward>최대 {reward ? reward : "0원"} 적립</Text>
        {freeShipping && <PurpleMark />}
        <Text shippingInfo>{shippingInfo}</Text>
      </DeliverBox>
    </Container>
  );
};

export default Summary;
