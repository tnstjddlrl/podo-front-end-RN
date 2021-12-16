import React from "react";
import styled from "styled-components/native";
import { colors } from "../../colors";
import { fonts } from "../../fonts";
import { RightArrowIcon } from "../Icons";

import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';

import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  } else {
    console.log(data)
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

const SNSBtn = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  margin-bottom: 8px;
  padding: 14px 16px 14px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const BtnLeftWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LogoImage = styled.Image`
  margin-right: 12px;
`;
const BtnText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.bold};
`;

export const FacebookBtn = ({ onPress }) => {
  return (
    <SNSBtn onPress={() => {
      onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))
      console.log('클릭');
    }}>
      <BtnLeftWrapper>
        <LogoImage source={{ uri: 'https://softer104.cafe24.com/assets/ic_facebook.png' }} />
        <BtnText>페이스북으로 시작하기</BtnText>
      </BtnLeftWrapper>
      <RightArrowIcon />
    </SNSBtn>
  );
};

export const KakaoBtn = ({ onPress }) => {
  return (
    <SNSBtn onPress={async () => {
      await login().then((res) => {
        console.log(res)
      })
    }}>
      <BtnLeftWrapper>
        <LogoImage source={{ uri: 'https://softer104.cafe24.com/assets/ic_kakao.png' }} />
        <BtnText>카카오로 시작하기</BtnText>
      </BtnLeftWrapper>
      <RightArrowIcon />
    </SNSBtn>
  );
};
