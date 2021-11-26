import React from "react";
import styled, { css } from "styled-components/native";
import { colors } from "../colors";
import { screenSize } from "../constants";
import { fonts } from "../fonts";

const Btn = styled.TouchableOpacity`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "48px")};
  background-color: ${colors.purple};
  border-radius: 12px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
  font-size: ${(p) => (p.fontSize ? p.fontSize : "15px")};
  font-family: ${fonts.bold};
  color: #fff;
`;

const LineBtn = styled.TouchableOpacity`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "48px")};
  border-color: ${colors.purple};
  border-width: 1px;
  border-radius: 12px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  justify-content: center;
  align-items: center;
`;

const LineBtnText = styled.Text`
  font-size: ${(p) => (p.fontSize ? p.fontSize : "15px")};
  font-family: ${fonts.bold};
  color: ${colors.purple};
`;

export const PurpleBtn = ({
  width,
  height,
  marginTop,
  text,
  onPress,
  marginBottom,
  fontSize,
}) => {
  return (
    <Btn
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
      onPress={() => onPress && onPress()}
    >
      <BtnText fontSize={fontSize}>{text}</BtnText>
    </Btn>
  );
};

export const PurpleLineBtn = ({
  width,
  height,
  marginTop,
  text,
  onPress,
  marginBottom,
  fontSize,
}) => {
  return (
    <LineBtn
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
      onPress={() => onPress && onPress()}
    >
      <LineBtnText fontSize={fontSize}>{text}</LineBtnText>
    </LineBtn>
  );
};

export const CancelBtn = ({ width, height, marginTop, text, onPress }) => {
  return (
    <Btn
      width={width}
      height={height}
      marginTop={marginTop}
      onPress={() => onPress()}
      style={{ backgroundColor: colors.paleBlue }}
    >
      <BtnText style={{ color: "#1D242D" }}>{text}</BtnText>
    </Btn>
  );
};

const InputA = styled.TextInput`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "48px")};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 16px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  font-family: ${(props) => (props.bold ? fonts.bold : fonts.medium)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
`;

export const Input = ({
  placeholder,
  width,
  marginBottom,
  secure,
  bold,
  editable,
  fontSize,
  height,
  multiline,
  onChangeText
}) => {
  return (
    <InputA
      secureTextEntry={secure}
      placeholder={placeholder}
      width={width}
      marginBottom={marginBottom}
      bold={bold}
      editable={editable || true}
      fontSize={fontSize}
      height={height}
      multiline={multiline}
      style={{ textAlignVertical: "top" }}
      onChangeText={onChangeText}
    />
  );
};

const UnderLineA = styled.View`
  width: 100%;
  background-color: ${colors.border};
  height: ${(p) => (p.height ? p.height + "px" : "1px")};
`;

export const UnderLine = ({ height }) => {
  return <UnderLineA height={height} />;
};

const Overlay = styled.View`
  height: ${screenSize.height + "px"};
  width: ${screenSize.width + "px"};
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
`;

const PopupLayout = styled.View`
  width: ${screenSize.width - 48 + "px"};
  top: ${(p) => (p.top ? p.top : "25%")};
  left: 24px;
  padding: 24px;
  background: #fff;
  border-radius: 20px;
`;

const PopupText = styled.Text`
  font-size: 15px;
  color: #2f3741;
  margin-bottom: 16px;
  ${(p) =>
    p.title &&
    css`
      font-size: 20px;
      font-family: ${fonts.bold};
      margin-bottom: 4px;
    `}
  ${(p) =>
    p.description &&
    css`
      min-height: 60px;
    `}
`;

export const NormalPopup = ({
  btnText,
  title,
  description,
  topPosition,
  onPress,
}) => {
  return (
    <Overlay>
      <PopupLayout top={topPosition}>
        <PopupText title>{title}</PopupText>
        <PopupText description>{description}</PopupText>
        <PurpleBtn
          width={"100%"}
          marginTop={"auto"}
          text={btnText}
          onPress={() => onPress && onPress()}
        />
      </PopupLayout>
    </Overlay>
  );
};
