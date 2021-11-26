import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import FormBox from "../../components/Auth/FormBox";
import LayOut from "../../components/LayOut";
import { PurpleBtn } from "../../components/share";

const Wrapper = styled.View`
  height: 100%;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const FindPassword = () => {
  const [isSelected, setIsSelected] = useState({
    email: false,
    phone: false,
  });
  const onClickSelect = (name) => {
    setIsSelected({
      ...{ [name]: !isSelected[name] },
    });
  };
  return (
    <LayOut paddingTop={24}>
      <Wrapper>
        <View>
          <FormBox
            name="email"
            title="이메일로 비밀번호 찾기"
            inputPlaceholder="이메일"
            isCheckbox={true}
            onClickSelect={onClickSelect}
            isSelected={isSelected}
          />
          <FormBox
            name="phone"
            title="휴대전화 번호로 비밀번호 찾기"
            inputPlaceholder={`"-" 없이 숫자만 입력해주세요.`}
            captionA="- SNS 계정 회원은 아이디 찾기가 불가능합니다. "
            captionB="- 가입시 선택하신 서비스로 로그인 해주세요."
            textTopMargin={"20px"}
            isCheckbox={true}
            onClickSelect={onClickSelect}
            isSelected={isSelected}
          />
        </View>
        <PurpleBtn height={"52px"} text="완료" />
      </Wrapper>
    </LayOut>
  );
};

export default FindPassword;
