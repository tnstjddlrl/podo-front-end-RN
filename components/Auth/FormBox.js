import React from "react";
import { Keyboard } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../colors";
import { fonts } from "../../fonts";
import { Checkbox } from "react-native-paper";
import { Input, PurpleBtn } from "../share";

const Container = styled.View`
  margin-bottom: 20px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 13px;
  font-family: ${fonts.bold};
  margin-bottom: 4px;
`;

const InputRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const FormBoxText = styled.Text`
  margin-top: ${(props) => (props.textTopMargin ? props.textTopMargin : "6px")};
  font-family: ${fonts.medium};
  font-size: 12px;
  color: ${colors.gray};
  margin-left: 4px;
`;

const FormBox = ({
  title,
  caption,
  inputPlaceholder,
  captionA,
  captionB,
  textTopMargin,
  isCheckbox,
  name,
  isSelected,
  onClickSelect,
  onChangeText,
  onPressFunction,
}) => {
  return (
    <Container>
      {isCheckbox ? (
        <Wrapper>
          <Checkbox.Android
            status={isSelected[name] ? "checked" : "unchecked"}
            onPress={() => onClickSelect(name)}
            color={colors.purple}
          />
          <Title>{title}</Title>
        </Wrapper>
      ) : (
        <Title>{title}</Title>
      )}

      <InputRow>
        <Input placeholder={inputPlaceholder} width={"70%"} onChangeText={onChangeText}></Input>
        <PurpleBtn
          height={"48px"}
          text="인증하기"
          width={"25%"}
          marginTop={0}
          onPress={onPressFunction}
        />
      </InputRow>
      {caption && (
        <FormBoxText textTopMargin={textTopMargin}>{caption}</FormBoxText>
      )}
      {captionA && (
        <>
          <FormBoxText textTopMargin={textTopMargin}>{captionA}</FormBoxText>
          <FormBoxText style={{ marginTop: 0 }}>{captionB}</FormBoxText>
        </>
      )}
    </Container>
  );
};

export default FormBox;
