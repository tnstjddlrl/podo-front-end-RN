import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components/native";
import { AtomUserId, AtomUserLevel, AtomUserToken } from "../atom/atom";
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
    btnText: "WBTC 출금 신청",
    navigate: "PocketNormal",
  },
  {
    coinName: "POD",
    btnText: "스테이킹 신청",
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
//   "created_at": "2021-12-02 10:14:05",
//   "deleted_at": null,
//   "mb_agree_email": "N",
//   "mb_alarm": "1",
//   "mb_email": "sasaa3865@naver.com",
//   "mb_level": 1,
//   "mb_nick": "",
//   "mb_no": "10",
//   "mb_phone": "010-7615-3865",
//   "mb_podo": "0",
//   "mb_sns_id": null,
//   "mb_state": "1",
//   "mb_token": "",
//   "mb_wbtc": "0",
//   "podo": "0",
//   "podo_date": "2021-12-02 11:21:55",
//   "podo_kr": 0,
//   "require_podo": 2000000,
//   "updated_at": "2021-12-02 11:21:07",
//   "wbtc_date": "2021-12-02 11:21:55",
//   "wbtc_kr": 0,
// }

const Wallet = ({ navigation }) => {
  const gaugePercent = 50;
  const [name, setName] = useState("게스트");

  const [atUserId, setAtUserId] = useRecoilState(AtomUserId)
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken)

  const [atMemberLevel, setAtMemberLevel] = useRecoilState(AtomUserLevel)

  const [requirePodoStaking, setRequirePodoStaking] = useState(0)
  const [userLevel, setUserLevel] = useState(0)

  const [wbtc, setWbtc] = useState(0)
  const [wbtc_kr, setWbtc_kr] = useState(0)

  const [podo, setPodo] = useState(0)
  const [podo_kr, setPodo_kr] = useState(0)

  useEffect(() => {
    getData("randomName").then((name) => setName(name));
    console.log('토큰 : ' + atUserToken);
    // MyInformLoadAxios()
    // TokenRefreshAxios()
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('토큰 : ' + atUserToken);
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

  // const renderItem = ({ item }) => {
  //   return (

  //   );
  // };
  return (
    <>
      {/* <LevelSection>
        <LevelText isTitle>{name}님, Level 1 에요!</LevelText>
        <Gauge>
          <GaugeStatus percent={gaugePercent} />
        </Gauge>
        <LevelText>다음 레벨까지 2000 Stacking 필요!</LevelText>
      </LevelSection> */}
      <LayOut backgroundColor={"#fff"} horizontalZero={true}>
        {/* <InfoSection>
          <InfoSectionText>현재까지 WBTC를</InfoSectionText>
          <InfoNum>
            <InfoSectionText isNumber>XXXX</InfoSectionText>
            <InfoSectionText isCount>획득!</InfoSectionText>
          </InfoNum>
        </InfoSection> */}
        <ScrollView>
          <LevelSection>
            {atUserId ?
              <LevelText isTitle>{atUserId.split('@')[0]}님, Level {userLevel} 에요!</LevelText>
              :
              <LevelText isTitle>로그인을 먼저 해주세요!</LevelText>

            }
            <Gauge>
              <GaugeStatus percent={gaugePercent} />
            </Gauge>
            <LevelText>다음 레벨까지 {requirePodoStaking} Stacking 필요!</LevelText>
          </LevelSection>
          <InfoSection>
            <InfoSectionText>현재까지 WBTC를</InfoSectionText>
            <InfoNum>
              <InfoSectionText isNumber>{wbtc}</InfoSectionText>
              <InfoSectionText isCount>획득!</InfoSectionText>
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
              text={'WBTC 출금 신청'}
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
              text={'스테이킹 신청'}
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
        {/* <FlatList
          ListHeaderComponent={
          }
          data={renderList}
          renderItem={renderItem}
          keyExtractor={(item) => item.coinName.toString()}
        /> */}
        {/* <WalletAccBox
          coinName={"WBTC"}
          coinValue={"0.0000000"}
          price={"10,000"}
          date={"YYYY.MM.DD XX:XX"}
        />
        <PurpleBtn
          text={"WBTC 출금 신청"}
          marginTop={"12px"}
          marginBottom={"20px"}
          onPress={() =>
            navigation.navigate("PocketNormal", {
              coinName: "WBTC",
            })
          }
        />
        <WalletAccBox
          coinName={"POD"}
          coinValue={"0.0000000"}
          price={"10,000"}
          date={"YYYY.MM.DD XX:XX"}
        />
        <PurpleBtn
          text={"스테이킹 신청"}
          marginTop={"12px"}
          marginBottom={"20px"}
          onPress={() =>
            navigation.navigate("PocketStacking", {
              coinName: "POD",
            })
          }
        /> */}
      </LayOut>
    </>
  );
};

export default Wallet;
