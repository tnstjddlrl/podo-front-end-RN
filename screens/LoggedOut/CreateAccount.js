import React, { useState } from "react";
import styled from "styled-components/native";
import { FacebookBtn, KakaoBtn } from "../../components/Auth/Buttons";
import LayOut from "../../components/LayOut";
import { SnsConnectPopup } from "../../components/Auth/Popup";
import { PurpleBtn } from "../../components/share";

const ADImage = styled.Image``;

const CreateAccount = ({ navigation }) => {
  const [isFacebook, setIsFacebook] = useState(false);
  const [isKakao, setIsKakao] = useState(false);
  const onClickFacebook = () => {
    setIsFacebook(true);
  };
  const onCickKaKao = () => {
    setIsKakao(true);
  };
  const cancelPopup = () => {
    if (isFacebook) {
      setIsFacebook(false);
    }
    if (isKakao) {
      setIsKakao(false);
    }
  };
  const goCreateAccountPodo = () => navigation.navigate("CreateAccountPodo");
  const goHome = () => navigation.navigate("Home");
  return (
    <LayOut>
      <ADImage source={require("../../assets/ad.png")} />
      {/* <FacebookBtn onPress={onClickFacebook} />
      <KakaoBtn onPress={onCickKaKao} /> */}
      <PurpleBtn
        height={"52px"}
        width={"100%"}
        marginTop={"12px"}
        text={"PODO 신규 가입하기"}
        onPress={goCreateAccountPodo}
      />
      {/* {isFacebook && (
        <SnsConnectPopup onPress={cancelPopup} app="facebook" goHome={goHome} />
      )}
      {isKakao && (
        <SnsConnectPopup onPress={cancelPopup} app="kakao" goHome={goHome} />
      )} */}
    </LayOut>
  );
};

export default CreateAccount;
