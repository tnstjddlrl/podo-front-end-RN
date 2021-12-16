import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { colors } from "../../colors";

import { CloseIcon } from "../../components/Icons";
import LayOut from "../../components/LayOut";
import { screenSize } from "../../constants";
import { fonts } from "../../fonts";
import LottieView from "lottie-react-native";
import { WebView } from "react-native-webview";

const RewardIndicatorWrap = styled.View`
  width: ${screenSize.width + "px"};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  z-index: 999;
`;

const WebViewTopper = styled.View`
  width: ${screenSize.width + "px"};
  height: 56px;
  align-items: center;
  justify-content: center;
  background: ${colors.border};
`;

const RewardIndicator = styled.View`
  background: ${colors.orange};
  border-radius: 100px;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
`;

const RewardIndicatorText = styled.Text`
  font-size: 11px;
  font-family: ${fonts.bold};
  color: #fff;
`;

const CloseIconWrap = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;

const FooterText = styled.Text`
  font-size: 12px;
  margin-top: auto;
  margin-bottom: 24px;
  color: ${colors.gray};
`;

const LinkingPage = ({ route, navigation }) => {
  const { url } = route.params;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff" }} />
      {loading && (
        <LayOut backgroundColor={"#fff"}>
          <RewardIndicatorWrap>
            <RewardIndicator>
              <RewardIndicatorText>리워드 30%</RewardIndicatorText>
            </RewardIndicator>
            <CloseIconWrap onPress={() => navigation.navigate("SetAutoLogin")}>
              <CloseIcon />
            </CloseIconWrap>
          </RewardIndicatorWrap>
          <LottieView
            source={{ uri: 'https://softer104.cafe24.com/assets/loadingSplash.json' }}
            autoPlay
            loop
          />
          <FooterText>
            PODO는 상품에 직접 관여하지 않으며 상품 주문, 배송 및 환불의 의무와
            책임은 각 판매업체에 있습니다 .
          </FooterText>
        </LayOut>
      )}
      {!loading && (
        <>
          <WebViewTopper>
            <RewardIndicator>
              <RewardIndicatorText>
                로그인 설정을 진행해주세요.
              </RewardIndicatorText>
            </RewardIndicator>
            <CloseIconWrap onPress={() => navigation.navigate("SetAutoLogin")}>
              <CloseIcon />
            </CloseIconWrap>
          </WebViewTopper>
          <WebView
            source={{ uri: url }}
            originWhitelist={["https://*", "http://*"]}
          />
        </>
      )}
    </>
  );
};

export default LinkingPage;
