import AnimatedLottieView from "lottie-react-native";
import React from "react";
import styled, { css } from "styled-components/native";
import { colors } from "../colors";
import { screenSize } from "../constants";
import LayOut from "./LayOut";

const TextWrap = styled.View`
  width: ${screenSize.width + "px"};
  height: ${screenSize.height + "px"};
  position: absolute;
  left: ${(p) => (p.left ? p.left + "px" : 0)};
  top: -80px;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const MainText = styled.Text`
  font-size: 14px;
  color: ${colors.purple};
  align-self: center;
  margin: 8px 0;
  ${(p) =>
    p.isTop &&
    css`
      margin-top: 48px;
    `}
`;

const NoPage = ({ horizontalZero, left, customText }) => {
  return (
    <LayOut backgroundColor={"#fff"} horizontalZero={horizontalZero}>
      <TextWrap left={left}>
        <AnimatedLottieView
          source={require('../assets/developingLottie.json')}
          autoPlay
          loop
          style={{
            width: "70%",
          }}
        />
        {customText && <MainText isTop>{customText}</MainText>}
        {!customText && (
          <>
            <MainText isTop>앗, 현재 페이지는 아직 준비중이에요!</MainText>
            <MainText>빠른 시일 내로 더욱 완성된 모습으로 찾아뵐게요!</MainText>
          </>
        )}
      </TextWrap>
    </LayOut>
  );
};

export default NoPage;
