import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import styled, { css } from "styled-components/native";
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

const Wallet = ({ navigation }) => {
  const gaugePercent = 50;
  const [name, setName] = useState("게스트");
  useEffect(() => {
    getData("randomName").then((name) => setName(name));
  }, []);

  function MyInformLoadAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/Member/@me', {
      headers: { Token }
    })
  }



  const renderItem = ({ item }) => {
    return (
      <View style={{ paddingHorizontal: 24 }}>
        <WalletAccBox
          coinName={item.coinName}
          coinValue={"0"}
          // price={"10,000"}
          // date={"YYYY.MM.DD XX:XX"}
          price={"0"}
          date={`${current.getFullYear()}.${zeroPlus(
            current.getMonth() + 1
          )}.${zeroPlus(current.getDate())} ${zeroPlus(
            current.getHours()
          )}:${zeroPlus(current.getMinutes())}`}
        />
        <PurpleBtn
          text={item.btnText}
          marginTop={"12px"}
          marginBottom={"20px"}
          onPress={() =>
            navigation.navigate(item.navigate, {
              coinName: item.coinName,
            })
          }
        />
      </View>
    );
  };
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
        <FlatList
          ListHeaderComponent={
            <>
              <LevelSection>
                <LevelText isTitle>{name}님, Level 1 에요!</LevelText>
                <Gauge>
                  <GaugeStatus percent={gaugePercent} />
                </Gauge>
                <LevelText>다음 레벨까지 2000 Stacking 필요!</LevelText>
              </LevelSection>
              <InfoSection>
                <InfoSectionText>현재까지 WBTC를</InfoSectionText>
                <InfoNum>
                  <InfoSectionText isNumber>0</InfoSectionText>
                  <InfoSectionText isCount>획득!</InfoSectionText>
                </InfoNum>
              </InfoSection>
            </>
          }
          data={renderList}
          renderItem={renderItem}
          keyExtractor={(item) => item.coinName.toString()}
        />
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
