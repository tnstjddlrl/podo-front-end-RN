import React from "react";
import styled from "styled-components/native";
import FormBox from "../../components/Auth/FormBox";
import LayOut from "../../components/LayOut";
import { PurpleBtn } from "../../components/share";

const Wrapper = styled.View`
  height: 100%;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const FindAccount = () => {
  return (
    <LayOut paddingTop={24}>
      <Wrapper>
        <FormBox
          title="휴대전화 번호로 이메일 찾기"
          inputPlaceholder={`"-" 없이 숫자만 입력해주세요.`}
          captionA="- SNS 계정 회원은 아이디 찾기가 불가능합니다. "
          captionB="- 가입시 선택하신 서비스로 로그인 해주세요."
          textTopMargin="20px"
          isCheckbox={false}
        />
        <PurpleBtn height={"52px"} text="완료" />
      </Wrapper>
    </LayOut>
  );
};

export default FindAccount;
