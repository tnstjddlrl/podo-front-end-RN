import React, { useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../colors";

import { fonts } from "../../fonts";
import { DownArrowIcon } from "../Icons";
import { PurpleLineBtn } from "../share";

const Container = styled.View`
  background-color: #fff;
  margin-bottom: 8px;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.bold};
  margin-bottom: 8px;
`;

const TextRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Text = styled.Text`
  width: 50%;
  font-size: 12px;
`;

const DetailImg = styled.Image`
  width: 100%;
  height: 330px;
  margin-bottom: 40px;
`;

const MoreBtn = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  border-color: ${colors.purple};
  border-width: 1px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const BtnText = styled.Text`
  font-size: 15px;
  font-family: ${fonts.bold};
  color: ${colors.purple};
`;

const IconWrap = styled.View`
  margin-left: 4px;
  ${p =>
    p.turned &&
    css`
      transform: rotateZ(180deg);
    `}
`;

const Infomation = ({ colorSeries, use, fullImg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onPressOpenMoreInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Title>상품정보 제공 공시</Title>
      <TextRow>
        <Text>색상계열:</Text>
        <Text>{colorSeries}</Text>
      </TextRow>
      <TextRow>
        <Text>용도:</Text>
        <Text style={{ marginBottom: 32 }}>{use}</Text>
      </TextRow>
      <Title style={{ marginBottom: 12 }}>제품 상세 이미지</Title>
      <DetailImg source={fullImg.url} resizeMode="stretch" />
      <MoreBtn onPress={() => onPressOpenMoreInfo()}>
        <BtnText>상세정보 {isOpen ? "접기" : "더보기"}</BtnText>
        <IconWrap turned={isOpen}>
          <DownArrowIcon color={colors.purple} />
        </IconWrap>
      </MoreBtn>
    </Container>
  );
};

export default Infomation;
