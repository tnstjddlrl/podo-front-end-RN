import React from "react";
import { Image } from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import LayOut from "../../components/LayOut";

const Notice = styled.View`
  width: 100%;
  height: 30px;
  background: #e5ebfb;
  justify-content: center;
  align-items: center;
`;

const NoticeText = styled.Text`
  font-size: 13px;
  color: #31383f;
`;

const ShopList = styled.FlatList`
  padding-left: 24px;
  padding-right: 20px;
`;

const ListItem = styled.View`
  width: 100%;
  height: 68px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eef1ff;
`;

const ItemIcon = styled.Image`
  width: 44px;
  aspect-ratio: 1;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${colors.gray};
  margin-right: 12px;
`;

const ItemTextWrap = styled.View`
  justify-content: space-between;
`;

const ItemText = styled.Text`
  font-size: 16px;
  color: ${colors.darkBlack};
  margin-bottom: 4px;
  ${(p) =>
    p.caption &&
    css`
      font-size: 13px;
      color: ${colors.gray};
      margin-bottom: 0;
    `}
`;

const ConnectBtn = styled.TouchableOpacity`
  height: 32px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  padding: 9px 14px;
  margin-left: auto;
  ${(p) =>
    p.isConnected
      ? css`
          background: ${colors.purple};
        `
      : css`
          border-width: 1px;
          border-color: ${colors.purple};
        `}
`;

const ConnectText = styled.Text`
  font-size: 12px;
  color: ${(p) => (p.isConnected ? "#fff" : colors.purple)};
`;

const shopList = [
  {
    name: "쿠팡",
    icon: require("../../assets/coupangLogo.jpg"),
    url: "https://login.coupang.com/login/login.pang?rtnUrl=https%3A%2F%2Fwww.coupang.com%2Fnp%2Fpost%2Flogin%3Fr%3Dhttps%253A%252F%252Fwww.coupang.com%252F",
    isConnected: true,
  },
  {
    name: "티몬",
    icon: require("../../assets/tmonLogo.jpg"),
    url: "https://m.tmon.co.kr/user/loginForm?returnUrl=http%3A%2F%2Fm.tmon.co.kr%2Fmytmon%2Flist",
    isConnected: false,
  },
  {
    name: "위메프",
    icon: require("../../assets/wemapLogo.png"),
    url: "https://front.wemakeprice.com/user/login?returnUrl=https%3A%2F%2Ffront.wemakeprice.com%2Fmain&type=GENERAL&orderYN=N&selectionYN=N",
    isConnected: false,
  },
  {
    name: "쇼핑몰 명",
    icon: require("../../assets/logo.png"),
    url: "https://podopoint.io/#pd-feature",
    isConnected: false,
  },
];

const SetAutoLogin = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem>
        <ItemIcon resizeMode={"cover"} source={item.icon} />
        <ItemTextWrap>
          <ItemText>{item.name}</ItemText>
          <ItemText caption>계정을 연결해주세요</ItemText>
        </ItemTextWrap>
        <ConnectBtn
          isConnected={item.isConnected}
          onPress={() => navigation.navigate("LinkingPage", { url: item.url })}
        >
          <ConnectText isConnected={item.isConnected}>계정 연결</ConnectText>
        </ConnectBtn>
      </ListItem>
    );
  };
  return (
    <LayOut horizontalZero>
      <Notice>
        <NoticeText>자동 로그인 가능 쇼핑몰</NoticeText>
      </Notice>
      <ShopList
        data={shopList}
        renderItem={renderItem}
        keyExtractor={(item) => "" + item.name}
      />
    </LayOut>
  );
};

export default SetAutoLogin;
