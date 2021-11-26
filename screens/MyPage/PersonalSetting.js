import React, { useState } from "react";
import styled from "styled-components/native";
import LayOut from "../../components/LayOut";
import { Input, NormalPopup, PurpleBtn } from "../../components/share";
import { screenSize } from "../../constants";
import { fonts } from "../../fonts";

const TopperWrap = styled.View`
  width: ${screenSize.width + "px"};
  height: 31px;
  left: -24px;
  background: #e5ebfb;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const InfoText = styled.Text`
  font-family: ${fonts.bold};
  font-size: 13px;
  color: #31383f;
`;

const InputBtnWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const PersonalSetting = () => {
  const [popOn, setPopOn] = useState(false);
  const [authOn, setAuthOn] = useState(false);

  const onPressPopOn = () => {
    setPopOn(!popOn);
  };
  const onPressAuthOn = () => {
    setAuthOn(!authOn);
  };
  return (
    <LayOut>
      <TopperWrap>
        <InfoText>XXX으로 로그인 하셨습니다.</InfoText>
      </TopperWrap>
      <InputBtnWrap>
        <Input
          width={"72%"}
          placeholder={"xxx@email.com"}
          editable={false}
          marginBottom={"12px"}
        />
        <PurpleBtn width={"84px"} text={"인증하기"} onPress={onPressAuthOn} />
      </InputBtnWrap>
      <Input
        width={"100%"}
        placeholder={`“-” 없이 숫자만 입력해주세요. (휴대전화번호 )`}
        marginBottom={"12px"}
      />
      <Input width={"100%"} placeholder={"닉네임"} />
      <PurpleBtn
        text={"확인"}
        marginTop={"auto"}
        marginBottom={"16px"}
        onPress={onPressPopOn}
      />
      {popOn && (
        <NormalPopup
          title={"회원정보 수정"}
          description={"회원정보가 정상적으로 수정되었습니다."}
          btnText={"확인"}
          onPress={onPressPopOn}
        />
      )}
      {authOn && (
        <NormalPopup
          title={"이메일 인증"}
          description={"이메일 인증이 완료되었습니다."}
          btnText={"확인"}
          onPress={onPressAuthOn}
        />
      )}
    </LayOut>
  );
};

export default PersonalSetting;
