import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { colors } from "../../colors";
import { screenSize } from "../../constants";
import { fonts } from "../../fonts";
import { PurpleBtn } from "../share";

const Background = styled.View`
  width: ${screenSize.width + "px"};
  height: ${screenSize.height + "px"};
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark};
`;

const Container = styled.View`
  width: 80%;
  height: 70%;
  padding: 24px;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 20px;
  font-family: ${fonts.bold};
`;

const TextBox = styled.View``;

const SubTitle = styled.Text`
  font-size: 15px;
  margin: 16px 0;
`;

const Contents = styled.Text`
  font-size: 15px;
`;

export const TextPopup = ({ onPress, txt }) => {
  return (
    <Background>
      <Container>
        <View>
          <Title>서비스 이용약관</Title>
          <TextBox>
            {/* <SubTitle>제 1 조 (목적)</SubTitle> */}
            <Contents>
              {txt}
            </Contents>
          </TextBox>
        </View>
        <PurpleBtn
          height={"48px"}
          width={"100%"}
          marginTop={0}
          text="확인"
          onPress={onPress}
        />
      </Container>
    </Background>
  );
};
