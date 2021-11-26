import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import { screenSize } from "../../constants";
import { fonts } from "../../fonts";
import { getData } from "../../storage";
import { CloseIcon, SettingIcon } from "../Icons";

const Container = styled.View`
  padding: 10px;
`;

const Wrapper = styled.View`
  width: 100%;
  height: 44px;
  flex-direction: row;
  align-items: center;
`;

const NameWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 16px;
  ${(p) =>
    p.isName &&
    css`
      font-family: ${fonts.bold};
    `}
`;

const IconWrap = styled.TouchableOpacity`
  margin-left: ${(p) => (p.isLast ? "20px" : "auto")};
`;

const Underline = styled.View`
  width: ${screenSize.width + "px"};
  height: 8px;
  background: ${colors.border};
  position: absolute;
  bottom: -8px;
  left: -16px;
`;

const MenuHeader = () => {
  const navigation = useNavigation();
  const goSetting = () => navigation.navigate("General");
  const goHome = () => navigation.navigate("Home");
  const [name, setName] = useState("게스트");
  useEffect(() => {
    getData("randomName").then((name) => setName(name));
  }, []);
  return (
    <Container>
      <Wrapper>
        <NameWrap>
          <HeaderText isName>{name},</HeaderText>
          <HeaderText> 환영합니다.</HeaderText>
        </NameWrap>
        <IconWrap onPress={goSetting}>
          <SettingIcon />
        </IconWrap>
        <IconWrap isLast onPress={goHome}>
          <CloseIcon />
        </IconWrap>
      </Wrapper>
      <Underline />
    </Container>
  );
};

export default MenuHeader;
