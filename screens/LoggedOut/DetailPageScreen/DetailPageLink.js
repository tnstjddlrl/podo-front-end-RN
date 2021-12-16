import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { colors } from "../../../colors";
import { CloseIcon } from "../../../components/Icons";
import LayOut from "../../../components/LayOut";
import { screenSize } from "../../../constants";
import { fonts } from "../../../fonts";
import LottieView from "lottie-react-native";
import { WebView } from "react-native-webview";
import { Modal } from "react-native";

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

const DetailPageLink = ({ route, navigation }) => {
  // const { productUrl } = route.params;
  const [url, setUrl] = useState(route.params.url)
  const [loading, setLoading] = useState(true);

  console.log('불러온 url : ' + route.params)
  console.log(route.params);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff" }} />

      <WebViewTopper>
        <CloseIconWrap onPress={() => navigation.goBack()}>
          <CloseIcon />
        </CloseIconWrap>
      </WebViewTopper>
      <WebView
        source={{ uri: url }}
        originWhitelist={["https://*", "http://*"]}
        onLoadEnd={() => {
          console.log('로드 end')
          setLoading(false)
        }}
      />


      <Modal visible={loading}>
        <LayOut backgroundColor={"#fff"}>
          <RewardIndicatorWrap>
            <CloseIconWrap onPress={() => {
              navigation.goBack()
              console.log('클릭')
            }}>
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
      </Modal>
    </>
  );
};

export default DetailPageLink;
