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
import axios from "axios";
import { Modal, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


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
  width: ${p => p.percent}%;
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

const menuList = [
  // { text: "????????? ?????? ????????? ??????", navigate: "SetAutoLogin" },
  {
    text: "?????? ???????????? ??????",
    navigate: "Favorite",
    route: { isFavorite: true },
  },
  { text: "?????? ??? ??????", navigate: "Favorite", route: { isFavorite: false } },
  { text: "?????? ??????", navigate: "Shipping" },
  { text: "????????????", navigate: "Notice" },
  // { text: "??????", navigate: "General" },
  { text: "?????? ?????? ??????", navigate: "Qna" },
  // { text: "1:1 ??????", navigate: "ManToMan" },
  { text: "???????????????", navigate: "Guide" },
];

const MyPage = ({ navigation }) => {
  const [loginPopOn, setLoginPopOn] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const [userLevel, setUserLevel] = useState(0)
  const [levelPercent, setLevelPercent] = useState(0)

  const [atUserId, setAtUserId] = useRecoilState(AtomUserId)  //???????????????
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken) //?????? ??????

  function MyInformLoadAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/Member/@me', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      }
    }).then((res) => {
      console.log(res.data.data);
      var data = res.data.data

      setUserLevel(data.mb_level)

      setLevelPercent(Number(data.level_per))

    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    if (atUserId == '' || atUserId == null) {
      setLoginStatus(false)
    } else {
      setLoginStatus(true)
    }
  }, [atUserId])

  //?????? ???????????? ?????? ???????????? ??????. ????????? ???????????????
  const [name, setName] = useState("?????????");
  useEffect(() => {
    getData("randomName").then((name) => setName(name));
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      MyInformLoadAxios()
    });
    return unsubscribe;
  }, [navigation]);

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
                    <Username>{atUserId.split('@')[0]}???, </Username>
                    <WelcomeText>???????????????.</WelcomeText>
                  </NameWrap>
                  <LogoutBtn onPress={() => navigation.navigate("Login")}>
                    <BtnText>????????????</BtnText>
                  </LogoutBtn>
                </PageTitleWrap>
                <LevelGaugeWrap>
                  <LevelInfoWrap>
                    <LevelInfoText>User</LevelInfoText>
                    <LevelInfoText colored>Level {userLevel}</LevelInfoText>
                  </LevelInfoWrap>
                  <GaugeSection>
                    <Gauge percent={levelPercent} />
                  </GaugeSection>
                  <LevelInfoText reward> </LevelInfoText>
                </LevelGaugeWrap>
              </>
            )}
            {!loginStatus && (
              <>
                <PageTitleWrap>
                  <PurpleBtn
                    width={"100%"}
                    text={"?????????"}
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
      {/* {loginPopOn && (
        <NormalPopup
          btnText={"??????????????? ??????"}
          title={"???????????? ???????????????."}
          onPress={() => {
            setLoginPopOn(!loginPopOn);
            navigation.navigate("Login");
          }}
          description={
            "???????????? ????????? ??????????????????. ????????? ???????????? ???????????????."
          }
        />
      )} */}

      <Modal visible={loginPopOn} transparent={true}>
        <TouchableWithoutFeedback onPress={() => { setLoginPopOn(!loginPopOn); }}>
          <SafeAreaView style={{ backgroundColor: 'rgba(0,0,0,0.3)', alignItems: "center", justifyContent: "center", flex: 1 }}>
            <View style={{ borderRadius: 14, backgroundColor: 'white', width: '85%', padding: 20 }}>

              <PopupText title>???????????? ???????????????.</PopupText>
              <PopupText description>???????????? ????????? ??????????????????. ????????? ???????????? ???????????????.</PopupText>

              <TouchableWithoutFeedback onPress={() => {
                setLoginPopOn(!loginPopOn);
                navigation.navigate("Login");
              }}>
                <View style={{ borderRadius: 13, backgroundColor: 'rgb(84,59,237)', alignItems: "center", justifyContent: "center", width: '100%', padding: 10 }}>
                  <Text style={{ color: 'white', fontFamily: fonts.bold, fontSize: 18 }}>?????????</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>
    </LayOut>
  );
};

export default MyPage;
