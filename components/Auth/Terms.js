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

export const TextPopup = ({ onPress }) => {
  return (
    <Background>
      <Container>
        <View>
          <Title>서비스 이용약관</Title>
          <TextBox>
            <SubTitle>제 1 조 (목적)</SubTitle>
            <Contents>
              주식회사 플랫온(이하 ‘회사’)이 제공하는 서비스를 이용해 주셔서
              감사합니다. 회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더
              편리하게 이용할 수 있도록 회사 또는 관계사의 개별 서비스에 모두
              접속 가능한 통합로그인계정 체계를 만들고 그에 적용되는 '플랫온
              계정 약관(이하 '본 약관')을 마련하였습니다. 본 약관은 여러분이
              플랫온 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항,
              이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 조금만
              시간을 내서 주의 깊게 읽어주시기 바랍니다.
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
