import React from "react";
import styled from "styled-components/native";
import { colors } from "../../colors";
import { Input, PurpleBtn, PurpleLineBtn } from "../share";

const Caption = styled.Text`
  width: 100%;
  font-size: 12px;
  color: ${colors.gray};
`;

const Inquiry = ({ navigation, onClickInquiry }) => {
  const goInquiryListS = () => navigation.navigate("InquiryListS");
  return (
    <>
      <Input
        height={"48px"}
        placeholder="제목을 입력해 주세요."
        marginBottom={"8px"}
      />

      <Input
        height={"156px"}
        placeholder="제목을 입력해 주세요."
        multiline
        textAlign={"flex-start"}
        marginBottom={"8px"}
      />
      <Caption>
        주민번호, 전화번호, 이메일 등 개인정보를 남기면 타인에 의해 도용될 수
        있으니 각별히 주의해주세요.
      </Caption>
      <PurpleBtn
        marginTop={"32px"}
        height={"52px"}
        text="문의하기"
        onPress={onClickInquiry}
      />
      <PurpleLineBtn
        marginTop={"16px"}
        height={"52px"}
        text="이 상품의 문의 내역보기"
        onPress={goInquiryListS}
      />
    </>
  );
};

export default Inquiry;
