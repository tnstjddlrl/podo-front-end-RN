import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import LayOut from "../../components/LayOut";
import { PurpleBtn, PurpleLineBtn } from "../../components/share";
import { SmallWalletAccBox } from "../../components/Wallet/WalletAccBox";
import { screenSize } from "../../constants";
import { fonts } from "../../fonts";
import { ScrollView } from "react-native";
import { AtomUserToken, AtomUserWbtc, AtomUserWbtc_kr } from "../../atom/atom";
import { useRecoilState } from "recoil";
import axios from "axios";

const BtnBox = styled.View`
  width: 100%;
  height: 44px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 40px;
`;

const TabBox = styled.View`
  width: 100%;
  height: 32px;
  flex-direction: row;
  margin-bottom: 16px;
`;

const Tab = styled.TouchableOpacity`
  height: 32px;
  margin-right: 8px;
`;

const TabText = styled.Text`
  font-family: ${fonts.medium};
  font-size: 12px;
  color: ${(p) => (p.focused ? "#fff" : colors.gray)};
  background: ${(p) => (p.focused ? colors.purple : "#E5EBFB")};
  padding: 10px 16px 8px 16px;
  border-radius: 100px;
`;

const HistoryBox = styled.View`
  width: 100%;
  padding: 16px 14px 16px 16px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.border};
  margin-bottom: 8px;
`;

const HistoryText = styled.Text`
  ${(p) =>
    p.date &&
    css`
      font-family: ${fonts.medium};
      font-size: 13px;
      line-height: 14px;
      color: #31383fbf;
      margin-bottom: 8px;
    `}
  ${(p) =>
    p.description &&
    css`
      font-family: ${fonts.bold};
      font-size: 14px;
      line-height: 16.8px;
      color: #31383f;
      margin-bottom: ${(p) => (p.hasTransaction ? "12px" : 0)};
    `}
  ${(p) =>
    p.caption &&
    css`
      font-family: ${fonts.medium};
      font-size: 12px;
      color: ${colors.gray};
    `}
    ${(p) =>
    p.noHistory &&
    css`
      text-align: center;
      color: ${colors.gray};
      margin-top: 40px;
    `}
`;

const HistoryTextBlock = styled.View``;

const HistoryStatus = styled.TouchableOpacity`
  padding: 4px 8px;
  height: 20px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  ${(p) =>
    p.status === "????????????" &&
    css`
      background: #78879c;
    `}
  ${(p) =>
    (p.status === "?????? ?????? ??????" || p.status === "???????????? ??????") &&
    css`
      background: #e83535;
    `}
  ${(p) =>
    p.status === "????????????" &&
    css`
      background: ${colors.purple};
    `}
    ${(p) =>
    p.status === "???????????? ?????????" &&
    css`
      background: #20c06a;
    `}
`;

const HistoryStatusText = styled.Text`
  color: #fff;
  font-family: ${fonts.medium};
  font-size: 10px;
`;

const tabList = ["??????", "?????? ??????"];

const sampleHistory = [
  {
    date: "2021.06.16",
    description: "06.14 ?????? ?????? ???",
    transaction: "XXXXXXXXXXXXXXX",
    status: {
      code: "withDrawEnd",
      text: "????????????",
    },
  },
  {
    date: "2021.06.16",
    description: "06.14 ?????? ?????? ???",
    status: {
      code: "withDrawing",
      text: "?????? ?????????",
    },
  },
  {
    date: "2021.06.16",
    description: "????????? ??????",
    status: {
      code: "reward",
      text: "?????????",
    },
  },
  {
    date: "2021.06.23",
    description: "06.23 ?????? ?????? ???",
    status: {
      code: "sendWithDraw",
      text: "?????? ??????",
    },
  },
];

// const sampleWithDrawHistory = sampleHistory.filter((item) =>
//   item.status.code.toLowerCase().includes("withdraw")
// );
// const sampleRewardHistory = sampleHistory.filter((item) =>
//   item.status.code.toLowerCase().includes("reward")
// );

const current = new Date();
const zeroPlus = (num) => {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};

const PocketNormal = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(0);
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken)

  const [atuserWbtc, setatuserWbtc] = useRecoilState(AtomUserWbtc)
  const [atuserWbtc_kr, setatuserWbtc_kr] = useRecoilState(AtomUserWbtc_kr)

  const [compArray, setCompArray] = useState([])
  const [HistoryArray, setHistoryArray] = useState([])
  const [allArray, setAllArray] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('?????? : ' + atUserToken);
      LoadWbtcPayOutHistoryComplteAxios()
      LoadWbtcPayOutHistoryAxios()
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {

    if (compArray != null && HistoryArray != null) {
      let array = []
      array = array.concat(compArray, HistoryArray)
      setAllArray(array)
    }

    // console.log(allArray);
  }, [compArray, HistoryArray])

  function LoadWbtcPayOutHistoryComplteAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/Wbtc/List', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 100,
        offset: 0
      }
    }).then((res) => {
      console.log('????????????');
      console.log(res.data.list);
      setCompArray(res.data.list)

    }).catch((error) => {
      console.log(error);
    })
  }

  function LoadWbtcPayOutHistoryAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/Wbtc/EntranceList', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 100,
        offset: 0
      }
    }).then((res) => {
      console.log('???????????????');
      console.log(res.data);
      setHistoryArray(res.data.data)


    }).catch((error) => {
      console.log(error);
    })
  }

  // const onClickFocused = (index) => {
  //   setIsFocused(index);
  //   if (index === 1) {
  //     setHistoryList(sampleWithDrawHistory);
  //   } else if (index === 2) {
  //     setHistoryList(sampleRewardHistory);
  //   } else {
  //     setHistoryList(sampleHistory);
  //   }
  // };
  const onClickFocused = (index) => {
    setIsFocused(index);
  };

  return (
    <LayOut paddingTop={4}>
      <SmallWalletAccBox
        coinName={"WBTC"}
        coinValue={atuserWbtc}
        // price={"10,000"}
        // date={"YYYY.MM.DD XX:XX"}
        price={atuserWbtc_kr}
        date={`${current.getFullYear()}.${zeroPlus(
          current.getMonth() + 1
        )}.${zeroPlus(current.getDate())} ${zeroPlus(
          current.getHours()
        )}:${zeroPlus(current.getMinutes())}`}
      />
      <BtnBox>
        <PurpleLineBtn
          text={"WBTC ?????? ??????"}
          width={screenSize.width / 2 - 28 + "px"}
          onPress={() => navigation.navigate("CancelWithdraw")}
        />
        <PurpleBtn
          text={"WBTC ?????? ??????"}
          width={screenSize.width / 2 - 28 + "px"}
          onPress={() => navigation.navigate("PocketWithDrawal")}
        />
      </BtnBox>
      <TabBox>
        {tabList.map((item, index) => {
          return (
            <Tab key={index} onPress={() => onClickFocused(index)}>
              <TabText focused={index === isFocused}>{item}</TabText>
            </Tab>
          );
        })}
      </TabBox>
      <ScrollView showsVerticalScrollIndicator>
        {(compArray == []) && (
          <HistoryText noHistory>?????? ?????? ?????? ????????? ????????????.</HistoryText>
        )}
        {(compArray != [] && compArray != undefined) &&
          compArray.map((item, index) => {
            return (
              <HistoryBox key={index}>
                <HistoryTextBlock>
                  <HistoryText date>{item.entrance_date}</HistoryText>
                  <HistoryText
                    description
                    hasTransaction={item.transactionId && true}
                  >
                    {item.wbtc} WBTC
                  </HistoryText>
                  {(item.transactionId !== null && item.transactionId != '') && (
                    <>
                      <HistoryText caption>Transaction Id :</HistoryText>
                      <HistoryText caption>{item.transactionId}</HistoryText>
                    </>
                  )}
                </HistoryTextBlock>
                <HistoryStatus status={stateSwitch(item.state)}>
                  <HistoryStatusText>{stateSwitch(item.state)}</HistoryStatusText>
                </HistoryStatus>
              </HistoryBox>
            );
          })}
      </ScrollView>
    </LayOut>
  );
};

function stateSwitch(param) {
  switch (param) {
    case '1':
      return '????????????'
      break;
    case '2':
      return '???????????? ?????????'
      break;
    case '3':
      return '????????????'
      break;
    case '4':
      return '?????? ?????? ??????'
      break;
    case '5':
      return '???????????? ??????'
      break;
    default:
      break;
  }
}

export default PocketNormal;
