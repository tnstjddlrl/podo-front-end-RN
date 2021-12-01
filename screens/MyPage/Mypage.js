import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components/native";
import { AtomUserId, AtomUserToken } from "../../atom/atom";
import { colors } from "../../colors";
import { RightArrowIcon } from "../../components/Icons";
import LayOut from "../../components/LayOut";
import { NormalPopup, PurpleBtn } from "../../components/share";
import { fonts } from "../../fonts";
import { getData } from "../../storage";

import { useRecoilState } from 'recoil';


const PageTitleWrap = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const NameWrap = styled.View`
  flex-direction: row;
`;

const Username = styled.Text`
  font-family: ${fonts.bold};
  font-size: 16px;
`;

const WelcomeText = styled.Text`
  font-size: 16px;
`;

const LogoutBtn = styled.TouchableOpacity`
  height: 40px;
  padding: 10px 16px;
  background: #e5ebfb;
  border-radius: 12px;
`;

const BtnText = styled.Text`
  font-family: ${fonts.bold};
  font-size: 14px;
  color: ${colors.darkBlack};
`;

const LevelGaugeWrap = styled.View`
  width: 100%;
  padding: 8px 24px 10px 24px;
  border-bottom-width: 6px;
  border-color: #dae3efbf;
`;

const LevelInfoWrap = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

const LevelInfoText = styled.Text`
  font-size: 20px;
  color: ${colors.darkBlack};
  margin-right: 4px;
  ${(p) =>
    p.colored &&
    css`
      color: ${colors.orange};
      font-family: ${fonts.bold};
    `}
  ${(p) =>
    p.reward &&
    css`
      color: ${colors.gray};
      font-size: 14px;
      margin-right: 0;
      text-align: right;
      margin-top: 8px;
    `}
`;

const GaugeSection = styled.View`
  width: 100%;
  height: 12px;
  background: #dae3efbf;
  border-radius: 100px;
  position: relative;
`;

const Gauge = styled.View`
  width: 50%;
  height: 12px;
  background: ${colors.orange};
  border-radius: 100px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;

const SettingList = styled.FlatList`
  padding: 0;
`;

const MenuItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #dae3efbf;
  height: 56px;
  align-items: center;
  padding: 0 24px;
`;

const MenuText = styled.Text`
  color: #31383f;
  font-size: 16px;
`;

const menuList = [
  { text: "쇼핑몰 자동 로그인 관리", navigate: "SetAutoLogin" },
  {
    text: "내가 좋아하는 상품",
    navigate: "Favorite",
    route: { isFavorite: true },
  },
  { text: "내가 본 상품", navigate: "Viewed", route: { isFavorite: false } },
  { text: "배송 조회", navigate: "Shipping" },
  { text: "공지사항", navigate: "Notice" },
  { text: "설정", navigate: "General" },
  { text: "자주 묻는 질문", navigate: "Qna" },
  { text: "1:1 문의", navigate: "ManToMan" },
  { text: "이용가이드", navigate: "Guide" },
];

const MyPage = ({ navigation }) => {
  const [loginPopOn, setLoginPopOn] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const [atUserId, setAtUserId] = useRecoilState(AtomUserId)  //유저아이디
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken) //유저 토큰

  useEffect(() => {
    if (atUserId == '' || atUserId == null) {
      setLoginStatus(false)
    } else {
      setLoginStatus(true)
    }
  }, [atUserId])

  //현재 랜덤으로 이름 불러오고 있음. 이부분 변경해야함
  const [name, setName] = useState("게스트");
  useEffect(() => {
    getData("randomName").then((name) => setName(name));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <MenuItem
        onPress={() => {
          if (loginStatus) {
            return navigation.navigate(item.navigate, item.route && item.route);
          } else {
            return setLoginPopOn(!loginPopOn);
          }
        }}
      >
        <MenuText>{item.text}</MenuText>
        <RightArrowIcon color={"#dae3efbf"} />
      </MenuItem>
    );
  };
  return (
    <LayOut horizontalZero backgroundColor={"#fff"}>
      <SettingList
        ListHeaderComponent={
          <>
            {loginStatus && (
              <>
                <PageTitleWrap>
                  <NameWrap>
                    <Username>{atUserId.split('@')[0]}님, </Username>
                    <WelcomeText>환영합니다.</WelcomeText>
                  </NameWrap>
                  <LogoutBtn onPress={() => navigation.navigate("Login")}>
                    <BtnText>로그아웃</BtnText>
                  </LogoutBtn>
                </PageTitleWrap>
                <LevelGaugeWrap>
                  <LevelInfoWrap>
                    <LevelInfoText>User</LevelInfoText>
                    <LevelInfoText colored>Level 1</LevelInfoText>
                  </LevelInfoWrap>
                  <GaugeSection>
                    <Gauge />
                  </GaugeSection>
                  <LevelInfoText reward>리워드 30%</LevelInfoText>
                </LevelGaugeWrap>
              </>
            )}
            {!loginStatus && (
              <>
                <PageTitleWrap>
                  <PurpleBtn
                    width={"100%"}
                    text={"로그인"}
                    onPress={() => navigation.navigate("Login")}
                    marginTop={"8px"}
                  />
                </PageTitleWrap>
                <LevelGaugeWrap />
              </>
            )}
          </>
        }
        data={menuList}
        keyExtractor={(item) => "" + item.navigate}
        renderItem={renderItem}
      />
      {loginPopOn && (
        <NormalPopup
          btnText={"로그인하러 가기"}
          title={"로그인이 필요합니다."}
          onPress={() => {
            setLoginPopOn(!loginPopOn);
            navigation.navigate("Login");
          }}
          description={
            "로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다."
          }
        />
      )}
    </LayOut>
  );
};

export default MyPage;
