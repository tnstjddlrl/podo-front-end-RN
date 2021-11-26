import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut";
import styled from "styled-components/native";
import { colors } from "../../colors";
import { fonts } from "../../fonts";
import { Input, PurpleBtn } from "../../components/share";
import { Alert, TouchableOpacity } from "react-native";
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { AsyncsetUserId, AsyncsetUserToken, AtomUserId, AtomUserToken, setUserId } from "../../atom/atom";


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

  const [mb_email, setMb_email] = useState('')
  const [mb_pwd, setMb_pwd] = useState('')

  const [atUserId, setAtUserId] = useRecoilState(AtomUserId)
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken)


  // 어싱크에 유저아이디랑 토큰 값 넣어놔야함. 지금 테스트 로그인이 안됨
  // AsyncsetUserId()
  // AsyncsetUserToken()



  // 로그인 post 초안!
  function EmailLoginPost(email, pwd) {
    axios.post('https://softer104.cafe24.com/Open/Login', {
      mb_email: email,
      mb_password: pwd
    }).then((res) => {
      console.log(res.data);
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }


  return (
    <LayOut paddingTop={24}>
      <Input
        width="100%"
        placeholder="이메일"
        marginBottom={"8px"}
        bold={true}
        onChangeText={setMb_email}
      />
      <Input
        width="100%"
        placeholder="비밀번호"
        secure={true}
        marginBottom={"20px"}
        bold={true}
        onChangeText={setMb_pwd}
      />
      <PurpleBtn
        width={"100%"}
        height={"52px"}
        text="로그인"
        marginBottom={"12px"}
        onPress={() => EmailLoginPost(mb_email, mb_pwd)}
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
