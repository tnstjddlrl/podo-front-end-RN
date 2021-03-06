import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components/native";
import { AtomUserId, AtomUserLevel, AtomUserPodo, AtomUserPodo_kr, AtomUserToken, AtomUserWbtc, AtomUserWbtc_kr } from "../atom/atom";
import { colors } from "../colors";
import LayOut from "../components/LayOut";
import { PurpleBtn } from "../components/share";
import { WalletAccBox } from "../components/Wallet/WalletAccBox";
import { screenSize } from "../constants";
import { fonts } from "../fonts";
import { getData } from "../storage";

const LevelSection = styled.View`
  width: ${screenSize.width + "px"};
  height: 94px;
  background: #fff;
  padding: 8px 24px 20px 24px;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: #dae3ef;
`;

const LevelText = styled.Text`
  ${(p) =>
    p.isTitle
      ? css`
          font-family: ${fonts.bold};
          font-size: 16px;
          color: #1d242d;
        `
      : css`
          font-family: ${fonts.medium};
          font-size: 14px;
          color: #7f8b9d;
          align-self: center;
        `}
`;

const Gauge = styled.View`
  width: 100%;
  height: 12px;
  background: #dae3efbf;
  border-radius: 6px;
  position: relative;
`;

const GaugeStatus = styled.View`
  width: ${(p) => (p.percent ? p.percent + "%" : 0)};
  height: 12px;
  background: ${colors.purple};
  border-radius: 6px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InfoSection = styled.View`
  width: 100%;
  height: 49px;
  margin-top: 21px;
  margin-bottom: 16px;
  padding: 0 24px;
`;

const InfoSectionText = styled.Text`
  color: #1d242d;
  ${(p) =>
    p.isCount
      ? css`
          font-family: ${fonts.bold};
          font-size: 24px;
          text-align: right;
        `
      : css`
          font-family: ${fonts.medium};
          font-size: 16px;
        `}
  ${(p) =>
    p.isNumber &&
    css`
      font-family: ${fonts.bold};
      font-size: 24px;
      text-align: right;
      color: #f1b264;
      margin-right: 4px;
    `}
`;

const InfoNum = styled.View`
  width: 100%;
  height: 29px;
  flex-direction: row;
  justify-content: flex-end;
`;

const renderList = [
  {
    coinName: "WBTC",
    btnText: "WBTC ?????? ??????",
    navigate: "PocketNormal",
  },
  {
    coinName: "POD",
    btnText: "???????????? ??????",
    navigate: "PocketStacking",
  },
];

const current = new Date();
const zeroPlus = (num) => {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};

// {
//   "created_at":"2021-12-02 10:14:05",
//   "deleted_at":null,
//   "mb_admin_update":"",
//   "mb_agree_email":"N",
//   "mb_alarm":"1",
//   "mb_email":"sasaa3865@naver.com",
//   "mb_level":1,
//   "mb_nick":"",
//   "mb_no":"10",
//   "mb_os":"",
//   "mb_phone":"010-7615-3865",
//   "mb_podo":"0",
//   "mb_sns_id":null,
//   "mb_state":"1",
//   "mb_token":"",
//   "mb_wbtc":"0",
//   "podo":"0",
//   "podo_date":"2021-12-06 11:00:34",
//   "podo_kr":0,
//   "require_podo":2000000,
//   "updated_at":"2021-12-06 11:00:29",
//   "wbtc_date":"2021-12-06 11:00:34",
//   "wbtc_kr":0
//   }

const Wallet = ({ navigation }) => {
  const gaugePercent = 50;
  const [name, setName] = useState("?????????");

  const [atUserId, setAtUserId] = useRecoilState(AtomUserId)
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken)

  const [atMemberLevel, setAtMemberLevel] = useRecoilState(AtomUserLevel)

  const [requirePodoStaking, setRequirePodoStaking] = useState(0)
  const [userLevel, setUserLevel] = useState(0)
  const [levelPercent, setLevelPercent] = useState(0)

  const [atuserPodo, setatuserPodo] = useRecoilState(AtomUserPodo)
  const [atuserPodo_kr, setatuserPodo_kr] = useRecoilState(AtomUserPodo_kr)

  const [atuserWbtc, setatuserWbtc] = useRecoilState(AtomUserWbtc)
  const [atuserWbtc_kr, setatuserWbtc_kr] = useRecoilState(AtomUserWbtc_kr)



  const [wbtc, setWbtc] = useState(0)
  const [wbtc_kr, setWbtc_kr] = useState(0)

  const [podo, setPodo] = useState(0)
  const [podo_kr, setPodo_kr] = useState(0)

  useEffect(() => {
    getData("randomName").then((name) => setName(name));
    console.log('?????? : ' + atUserToken);

    if (atUserToken == '') {
      Alert.alert('???????????? ?????? ????????????.')
      navigation.navigate("Login");
    } else {
      // navigation.navigate("General");
    }
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('?????? : ' + atUserToken);
      MyInformLoadAxios()
    });

    return unsubscribe;
  }, [navigation]);

  function MyInformLoadAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/Member/@me', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      }
    }).then((res) => {
      console.log(res.data.data);
      var data = res.data.data
      setRequirePodoStaking(data.require_podo);
      setUserLevel(data.mb_level)

      setatuserPodo(data.mb_podo)
      setatuserPodo_kr(data.podo_kr)

      setatuserWbtc(data.mb_wbtc)
      setatuserWbtc_kr(data.wbtc_kr)

      setPodo(data.mb_podo)
      setPodo_kr(data.podo_kr)

      setWbtc(data.mb_wbtc)
      setWbtc_kr(data.wbtc_kr)

      setLevelPercent(Number(data.level_per))


    }).catch((error) => {
      console.log(error);
    })
  }

  function TokenRefreshAxios(params) {
    axios.get('https://softer104.cafe24.com/Open/Login/Refresh', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        refresh_token: atUserToken
      }
    }).then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      {/* <LevelSection>
        <LevelText isTitle>{name}???, Level 1 ??????!</LevelText>
        <Gauge>
          <GaugeStatus percent={gaugePercent} />
        </Gauge>
        <LevelText>?????? ???????????? 2000 Stacking ??????!</LevelText>
      </LevelSection> */}
      <LayOut backgroundColor={"#fff"} horizontalZero={true}>
        {/* <InfoSection>
          <InfoSectionText>???????????? WBTC???</InfoSectionText>
          <InfoNum>
            <InfoSectionText isNumber>XXXX</InfoSectionText>
            <InfoSectionText isCount>??????!</InfoSectionText>
          </InfoNum>
        </InfoSection> */}
        <ScrollView>
          <LevelSection>
            {atUserId ?
              <LevelText isTitle>{atUserId.split('@')[0]}???, Level {userLevel} ??????!</LevelText>
              :
              <LevelText isTitle>???????????? ?????? ????????????!</LevelText>
            }
            <Gauge>
              <GaugeStatus percent={levelPercent} />
            </Gauge>
            <LevelText>?????? ???????????? {requirePodoStaking} Stacking ??????!</LevelText>
          </LevelSection>
          <InfoSection>
            <InfoSectionText>???????????? WBTC???</InfoSectionText>
            <InfoNum>
              <InfoSectionText isNumber>{wbtc}</InfoSectionText>
              <InfoSectionText isCount>??????!</InfoSectionText>
            </InfoNum>
          </InfoSection>

          <View style={{ paddingHorizontal: 24 }}>
            <WalletAccBox
              coinName={'WBTC'}
              coinValue={wbtc}
              // price={"10,000"}
              // date={"YYYY.MM.DD XX:XX"}
              price={wbtc_kr}
              date={`${current.getFullYear()}.${zeroPlus(
                current.getMonth() + 1
              )}.${zeroPlus(current.getDate())} ${zeroPlus(
                current.getHours()
              )}:${zeroPlus(current.getMinutes())}`}
            />
            <PurpleBtn
              text={'WBTC ?????? ??????'}
              marginTop={"12px"}
              marginBottom={"20px"}
              onPress={() =>
                navigation.navigate('PocketNormal', {
                  coinName: "WBTC",
                })
              }
            />
          </View>

          <View style={{ paddingHorizontal: 24 }}>
            <WalletAccBox
              coinName={'POD'}
              coinValue={podo}
              // price={"10,000"}
              // date={"YYYY.MM.DD XX:XX"}
              price={podo_kr}
              date={`${current.getFullYear()}.${zeroPlus(
                current.getMonth() + 1
              )}.${zeroPlus(current.getDate())} ${zeroPlus(
                current.getHours()
              )}:${zeroPlus(current.getMinutes())}`}
            />
            <PurpleBtn
              text={'???????????? ??????'}
              marginTop={"12px"}
              marginBottom={"20px"}
              onPress={() =>
                navigation.navigate('PocketStacking', {
                  coinName: "POD",
                })
              }
            />
          </View>

        </ScrollView>
      </LayOut>
    </>
  );
};

export default Wallet;
