import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { colors } from "../colors";
import { CancelBtn, PurpleBtn } from "../components/share";
import { screenSize } from "../constants";
import { fonts } from "../fonts";

const Background = styled.View`
  width: ${screenSize.width + "px"};
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark};
`;

const Container = styled.View`
  width: 80%;
  height: 25%;
  padding: 24px;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 20px;
  font-family: ${fonts.bold};
  margin-bottom: 4px;
`;

const Contents = styled.Text`
  font-size: 15px;
`;

const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const LoginAlarm = ({ navigation }) => {
  const goBack = () => navigation.goBack();
  const goLogin = () => navigation.navigate("Login");
  return (
    <Background>
      <Container>
        <View>
          <Title>로그인 및 회원가입</Title>
          <View>
            <Contents>
              PODO로 로그인 후 이용할 수 있습니다. 로그인 하시겠습니까?
            </Contents>
          </View>
        </View>
        <BtnWrapper>
          <CancelBtn
            height={"48px"}
            width={"48%"}
            marginTop={0}
            text="아니오"
            onPress={goBack}
          />
          <PurpleBtn
            height={"48px"}
            width={"48%"}
            marginTop={0}
            text="확인"
            onPress={goLogin}
          />
        </BtnWrapper>
      </Container>
    </Background>
  );
};

export default LoginAlarm;
