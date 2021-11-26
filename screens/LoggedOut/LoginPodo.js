import React from "react";
import LayOut from "../../components/LayOut";
import styled from "styled-components/native";
import { colors } from "../../colors";
import { fonts } from "../../fonts";
import { Input, PurpleBtn } from "../../components/share";
import { TouchableOpacity } from "react-native";

const TextBtnWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const TextBtn = styled.Text`
  font-size: 14px;
  font-family: ${fonts.medium};
  color: ${colors.gray};
`;

const LoginPodo = ({ navigation }) => {
  const goFindAccount = () => navigation.navigate("FindNav");
  const goCreateAccount = () => navigation.navigate("CreateAccount");
  const completeLogin = () => navigation.navigate("Home");
  return (
    <LayOut paddingTop={24}>
      <Input
        width="100%"
        placeholder="이메일"
        marginBottom={"8px"}
        bold={true}
      />
      <Input
        width="100%"
        placeholder="비밀번호"
        secure={true}
        marginBottom={"20px"}
        bold={true}
      />
      <PurpleBtn
        width={"100%"}
        height={"52px"}
        text="로그인"
        marginBottom={"12px"}
        onPress={completeLogin}
      />
      <TextBtnWrapper>
        <TouchableOpacity onPress={() => goFindAccount()}>
          <TextBtn>아이디/비밀번호 찾기</TextBtn>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goCreateAccount()}>
          <TextBtn>회원가입</TextBtn>
        </TouchableOpacity>
      </TextBtnWrapper>
    </LayOut>
  );
};

export default LoginPodo;
