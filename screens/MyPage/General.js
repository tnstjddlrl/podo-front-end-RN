import React, { useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Switch,
  Text,
} from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import { RightArrowIcon } from "../../components/Icons";
import LayOut from "../../components/LayOut";
import { fonts } from "../../fonts";

const NavMenuItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${colors.border};
  height: 72px;
  align-items: center;
  /* padding: 0 24px; */
  ${(p) =>
    p.isBottom &&
    css`
      border-top-width: 1px;
      margin-top: auto;
    `}
`;

const SwipeMenuItem = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${colors.border};
  height: 92px;
  align-items: center;
  /* padding: 0 24px; */
`;

const NavTextWrap = styled.View``;

const NavMenuText = styled.Text`
  color: #31383f;
  font-size: 16px;
  ${(p) =>
    p.isCaption &&
    css`
      font-family: ${fonts.bold};
      font-size: 13px;
      color: ${colors.purple};
      margin-top: 4px;
      ${(p) =>
        p.noColor &&
        css`
          color: ${colors.gray};
        `}
    `}
`;

const FooterWrap = styled.View`
  margin-top: 17px;
  margin-bottom: 24px;
`;

const FooterLineDivider = styled.View`
  width: 1px;
  height: 12px;
  background: ${colors.gray};
`;

const FooterBtnWrap = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  align-items: center;
`;

const FooterBtnText = styled.TouchableOpacity`
  ${(p) =>
    p.isLeft &&
    css`
      margin-right: 12px;
    `}
  ${(p) =>
    p.isRight &&
    css`
      margin-left: 12px;
    `}
`;

const FooterText = styled.Text`
  color: ${colors.gray};
  font-size: 12px;
  ${(p) =>
    p.isBtn &&
    css`
      font-size: 13px;
    `}
  ${(p) =>
    p.isCaption &&
    css`
      margin-bottom: 4px;
    `}
`;

const General = ({ navigation }) => {
  const [onAlarm, setOnAlarm] = useState(false);
  const toggleSwitch = () => setOnAlarm((previousState) => !previousState);

  return (
    <LayOut backgroundColor={"#fff"}>
      <NavMenuItem onPress={() => navigation.navigate("PersonalSetting")}>
        <NavTextWrap>
          <NavMenuText>개인정보 설정</NavMenuText>
          <NavMenuText isCaption>User ID</NavMenuText>
        </NavTextWrap>
        <RightArrowIcon color={colors.gray} />
      </NavMenuItem>
      <SwipeMenuItem>
        <NavTextWrap>
          <NavMenuText>PODO 알림 설정</NavMenuText>
          <NavMenuText isCaption noColor>
            다양한 할인정보와 추천 상품을{`\n`}받아 볼 수 있어요.
          </NavMenuText>
        </NavTextWrap>
        <Switch
          onValueChange={toggleSwitch}
          value={onAlarm}
          trackColor={{ false: "#E5EBFB", true: "#81b0ff" }}
          thumbColor={onAlarm ? colors.purple : "#fff"}
          ios_backgroundColor="#3e3e3e"
        />
      </SwipeMenuItem>

      <NavMenuItem isBottom>
        <NavTextWrap>
          <NavMenuText>버전정보</NavMenuText>
          <NavMenuText isCaption>Version Information</NavMenuText>
        </NavTextWrap>
        <RightArrowIcon color={colors.gray} />
      </NavMenuItem>
      <FooterWrap>
        <FooterBtnWrap>
          <FooterBtnText
            isLeft
            onPress={() =>
              navigation.navigate("TermsAndPolicy", { type: "Terms" })
            }
          >
            <FooterText isBtn>이용약관</FooterText>
          </FooterBtnText>
          <FooterLineDivider />
          <FooterBtnText
            isRight
            onPress={() =>
              navigation.navigate("TermsAndPolicy", { type: "Policy" })
            }
          >
            <FooterText isBtn>개인정보처리방침</FooterText>
          </FooterBtnText>
        </FooterBtnWrap>
        <FooterText isCaption>(주) 와이즈 블록 사업자 정보</FooterText>
        <FooterText numberOfLines={2}>
          PODO는 상품에 직접 관여하지 않으며 상품 주문, 배송 및 환불의 의무와
          책임은 각 판매업체에 있습니다 .
        </FooterText>
      </FooterWrap>
    </LayOut>
  );
};

export default General;
