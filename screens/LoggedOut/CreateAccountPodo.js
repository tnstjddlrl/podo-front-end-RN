import React, { useState } from "react";
import styled from "styled-components/native";
import { colors } from "../../colors";
import LayOut from "../../components/LayOut";
import CheckRow from "../../components/Auth/CheckRow";
import { TouchableOpacity } from "react-native";
import { TextPopup } from "../../components/Auth/Terms";
import FormBox from "../../components/Auth/FormBox";

const AgreeBox = styled.View`
  width: 100%;
  padding: 20px;
  border: 1px solid ${colors.border};
`;

const AgreeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Bio = styled.Text`
  font-size: 14px;
  color: ${colors.gray};
  text-decoration: underline;
`;

const CreateAccountPodo = () => {
  const [isTerm, setIsTerm] = useState(false);
  const [isPolicy, setIsPolicy] = useState(false);
  const onClickTerm = () => {
    setIsTerm(true);
  };
  const onClickPolicy = () => {
    setIsPolicy(true);
  };
  const onClickConfirm = () => {
    if (isTerm) {
      setIsTerm(false);
    }
    if (isPolicy) {
      setIsPolicy(false);
    }
  };
  const [isSelected, setIsSelected] = useState({
    all: false,
    terms: false,
    policy: false,
    age: false,
    email: false,
  });
  const onClickSelect = (name) => {
    if (name === "all") {
      setIsSelected({
        all: true,
        terms: true,
        policy: true,
        age: true,
        email: true,
      });
    } else {
      setIsSelected({
        ...isSelected,
        ...{ all: false, [name]: !isSelected[name] },
      });
    }
  };

  return (
    <LayOut paddingTop={24}>
      <FormBox
        title="이메일"
        inputPlaceholder="이메일"
        caption="이메일 주소를 입력해주세요."
      />
      <FormBox
        title="휴대전화 번호"
        inputPlaceholder={`"-" 없이 숫자만 입력해주세요.`}
        caption="휴대전화 번호를 입력해주세요."
      />
      <AgreeBox>
        <CheckRow
          name="all"
          text="PODO 가입 전체 약관에 동의"
          bold={true}
          onClickSelect={onClickSelect}
          isSelected={isSelected}
        />
        <AgreeWrapper>
          <CheckRow
            name="terms"
            text="서비스 이용약관 (필수)"
            onClickSelect={onClickSelect}
            isSelected={isSelected}
          />
          <TouchableOpacity onPress={() => onClickTerm()}>
            <Bio>내용</Bio>
          </TouchableOpacity>
        </AgreeWrapper>
        <AgreeWrapper>
          <CheckRow
            name="policy"
            text="개인정보 취급방침 (필수)"
            onClickSelect={onClickSelect}
            isSelected={isSelected}
          />
          <TouchableOpacity onPress={() => onClickPolicy()}>
            <Bio>내용</Bio>
          </TouchableOpacity>
        </AgreeWrapper>
        <CheckRow
          name="age"
          text="만 14세 이상 여부 확인 (필수)"
          onClickSelect={onClickSelect}
          isSelected={isSelected}
        />
        <CheckRow
          name="email"
          text="이메일 SMS수신 (선택)"
          onClickSelect={onClickSelect}
          isSelected={isSelected}
        />
      </AgreeBox>
      {isTerm && <TextPopup onPress={onClickConfirm} />}
      {isPolicy && <TextPopup onPress={onClickConfirm} />}
    </LayOut>
  );
};

export default CreateAccountPodo;
