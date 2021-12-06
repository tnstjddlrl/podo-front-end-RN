import React from "react";
import styled from "styled-components/native";
import { FacebookBtn, KakaoBtn } from "../../components/Auth/Buttons";

import LayOut from "../../components/LayOut";
import { PurpleBtn } from "../../components/share";

const Login = ({ navigation }) => {
  const goLoginPodo = () => navigation.navigate("LoginPodo");
  // const goHome = () => navigation.navigate("Home");
  return (
    <LayOut paddingTop={24}>

      <FacebookBtn />
      <KakaoBtn />
      <PurpleBtn
        width={"100%"}
        height={"52px"}
        marginTop={"12px"}
        text={"이메일로 시작하기"}
        onPress={goLoginPodo}
      />
    </LayOut>
  );
};

export default Login;
