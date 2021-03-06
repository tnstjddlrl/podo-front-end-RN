import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components/native";
import { AtomUserPodo, AtomUserPodo_kr, AtomUserToken } from "../../atom/atom";
import { colors } from "../../colors";
import LayOut from "../../components/LayOut";
import { StackingBox } from "../../components/Wallet/WalletAccBox";
import { fonts } from "../../fonts";

const TabBox = styled.View`
  width: 100%;
  height: 32px;
  flex-direction: row;
  margin-bottom: 16px;
  margin-top: 40px;
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
  width: ${(p) => (p.width ? p.width : '100%')}
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
    p.status === "stake/3" &&
    css`
      background: #78879c;
    `}
  ${(p) =>
    p.status === "stackingProcessing" &&
    css`
      background: #e83535;
    `}
  ${(p) =>
    (p.status === "unstake/1" || p.status === "unstake/3") &&
    css`
      background: #2a1795;
    `}
    ${(p) =>
    (p.status === "stake/1") &&
    css`
      background: #20c06a;
    `}
`;

const HistoryStatusText = styled.Text`
  color: #fff;
  font-family: ${fonts.medium};
  font-size: 10px;
`;

const tabList = ["??????", "???????????? ??????", "??????????????? ??????"];

const sampleHistory = [
  {
    date: "2021.06.16",
    description: "06.14 ???????????? ?????? ???",
    status: {
      code: "stackingEnd",
      text: "???????????? ??????",
    },
  },
  {
    date: "2021.06.16",
    description: "06.14 ???????????? ?????? ???",
    status: {
      code: "stackingProcessing",
      text: "???????????? ?????????",
    },
  },
  {
    date: "2021.06.16",
    description: "06.23 ?????? ?????? ???",
    transaction: "XXXXXXXXXXXXXXX",
    status: {
      code: "stackingApply",
      text: "???????????? ??????",
    },
  },
  {
    date: "2021.06.23",
    description: "06.23 ??????????????? ?????? ???",
    status: {
      code: "unStackingApply",
      text: "??????????????? ??????",
    },
  },
  {
    date: "2021.06.27",
    description: "06.23 ??????????????? ?????? ???",
    status: {
      code: "unStackingEnd",
      text: "??????????????? ??????",
    },
  },
];

// const sampleStackingHistory = sampleHistory.filter((item) =>
//   item.status.code.toLowerCase().startsWith("stacking")
// );
// const sampleUnStackingHistory = sampleHistory.filter((item) =>
//   item.status.code.toLowerCase().includes("unstacking")
// );

const current = new Date();
const zeroPlus = (num) => {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};

const PocketStacking = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(0);
  const [historyList, setHistoryList] = useState(sampleHistory);
  // const historyList = null;

  // const onClickFocused = (index) => {
  //   setIsFocused(index);
  //   if (index === 1) {
  //     setHistoryList(sampleStackingHistory);
  //   } else if (index === 2) {
  //     setHistoryList(sampleUnStackingHistory);
  //   } else {
  //     setHistoryList(sampleHistory);
  //   }
  // };

  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken) //?????? ??????

  const [atuserPodo, setatuserPodo] = useRecoilState(AtomUserPodo)
  const [atuserPodo_kr, setatuserPodo_kr] = useRecoilState(AtomUserPodo_kr)

  const [stakingHistoryArray, setStakingHistoryArray] = useState([])
  const [stakingCompleteHistoryArray, setStakingCompleteHistoryArray] = useState([])
  const [UnstakingHistoryArray, setUnStakingHistoryArray] = useState([])
  const [UnstakingCompleteHistoryArray, setUnStakingCompleteHistoryArray] = useState([])

  const [AllStakingArray, setAllStakingArray] = useState([])
  const [AllUnStakingArray, setAllUnStakingArray] = useState([])

  const [AllArray, setAllarray] = useState([])

  function StakingHistoryLoadAxios(params) { //???????????? ????????????
    axios.get('https://softer104.cafe24.com/V1/Podo/StakeList', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 100,
        offset: 0,
      }
    }).then((res) => {
      console.log('???????????? ??????:')
      console.log(res.data);
      if (res.data.msg === 'success') {
        setStakingHistoryArray(res.data.list)
      }
    }).catch((error) => {
      console.log('???????????? ??????:')
      if (error.response) {
        console.log(error.response.data);
        // Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }

  function StakingCompleteHistoryLoadAxios(params) { //???????????? ????????????
    axios.get('https://softer104.cafe24.com/V1/Podo/StakeListComp', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 100,
        offset: 0,
      }
    }).then((res) => {
      console.log('???????????? ?????? ??????:')
      console.log(res.data);
      if (res.data.msg === 'success') {
        setStakingCompleteHistoryArray(res.data.list)
      }
    }).catch((error) => {
      console.log('???????????? ?????? ??????:')
      if (error.response) {
        console.log(error.response.data);
        // Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }

  function UnStakingHistoryLoadAxios(params) { //???????????? ????????????
    axios.get('https://softer104.cafe24.com/V1/Podo/UnStakeList', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 100,
        offset: 0,
      }
    }).then((res) => {
      console.log('??????????????? ??????:')
      console.log(res.data);
      if (res.data.msg === 'success') {
        setUnStakingHistoryArray(res.data.list)
      }
    }).catch((error) => {
      console.log('??????????????? ??????:')
      if (error.response) {
        console.log(error.response.data);
        // Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }

  function UnStakingCompleteHistoryLoadAxios(params) { //???????????? ????????????
    axios.get('https://softer104.cafe24.com/V1/Podo/UnStakeListComp', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 100,
        offset: 0,
      }
    }).then((res) => {
      console.log('??????????????? ?????? ??????:')
      console.log(res.data);
      if (res.data.msg === 'success') {
        setUnStakingCompleteHistoryArray(res.data.list)
      }
    }).catch((error) => {
      console.log('??????????????? ?????? ??????:')

      if (error.response) {
        console.log(error.response.data);
        // Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }

  useEffect(() => {

  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StakingHistoryLoadAxios()
      StakingCompleteHistoryLoadAxios()

      UnStakingHistoryLoadAxios()
      UnStakingCompleteHistoryLoadAxios()
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    let array = []
    array = array.concat(stakingCompleteHistoryArray, stakingHistoryArray)

    array.sort((a, b) => {
      return a.complete_date - b.complete_date;
    })

    setAllStakingArray(array)
  }, [stakingHistoryArray, stakingCompleteHistoryArray])

  useEffect(() => {
    let array = []
    array = array.concat(UnstakingHistoryArray, UnstakingCompleteHistoryArray)

    array.sort((a, b) => {
      return a.complete_date - b.complete_date;
    })

    setAllUnStakingArray(array)
  }, [UnstakingHistoryArray, UnstakingCompleteHistoryArray])

  useEffect(() => {
    let array = []
    array = array.concat(AllStakingArray, AllUnStakingArray)

    array.sort((a, b) => {
      return a.complete_date - b.complete_date;
    })

    setAllarray(array)

    console.log(array)
  }, [AllStakingArray, AllUnStakingArray])

  useEffect(() => {
    console.log(isFocused);
  }, [isFocused])


  const onClickFocused = (index) => {
    setIsFocused(index);
  };
  return (
    <LayOut>
      <StackingBox
        coinName={"POD Coin"}
        coinValue={atuserPodo}
        // price={"10,000"}
        // date={"YYYY.MM.DD XX:XX"}
        price={atuserPodo_kr}
        date={`${current.getFullYear()}.${zeroPlus(
          current.getMonth() + 1
        )}.${zeroPlus(current.getDate())} ${zeroPlus(
          current.getHours()
        )}:${zeroPlus(current.getMinutes())}`}
        goStacking={() => navigation.navigate("StackingWithdrawal")}
        goUnStacking={() => navigation.navigate("UnStackingWithdrawal")}
        cancelStacking={() => navigation.navigate("CancelStacking")}
        cancelUnStacking={() => navigation.navigate("CancelUnStacking")}
      />
      <TabBox>
        {tabList.map((item, index) => {
          return (
            <Tab key={index} onPress={() => onClickFocused(index)}>
              <TabText focused={index === isFocused}>{item}</TabText>
            </Tab>
          );
        })}
      </TabBox>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/* <HistoryText noHistory>
          ?????? ???????????? ?????? ????????? ????????????.
        </HistoryText> */}
        {/* {!AllArray && (
        )} */}
        {isFocused == '0' &&
          AllArray.map((item, index) => {
            return (
              <HistoryBox key={index}>
                <HistoryTextBlock>
                  <HistoryText date>{item.entrance_date}</HistoryText>
                  <HistoryText
                    description
                    hasTransaction={item.transactionId && true}
                  >
                    {item.podo}
                  </HistoryText>
                  {(item.transactionId != '') && (
                    <>
                      <HistoryText caption>Transaction Id :</HistoryText>
                      <HistoryText width={200} caption>{item.transactionId}</HistoryText>
                    </>
                  )}
                </HistoryTextBlock>
                <HistoryStatus status={item.type + '/' + item.state}>
                  <HistoryStatusText>{stateReturn(item.type + '/' + item.state)}</HistoryStatusText>
                </HistoryStatus>
              </HistoryBox>
            );
          })}

        {isFocused == '1' &&
          AllStakingArray.map((item, index) => {
            return (
              <HistoryBox key={index}>
                <HistoryTextBlock>
                  <HistoryText date>{item.entrance_date}</HistoryText>
                  <HistoryText
                    description
                    hasTransaction={item.transactionId && true}
                  >
                    {item.podo}
                  </HistoryText>
                  {(item.transactionId != '') && (
                    <>
                      <HistoryText caption>Transaction Id :</HistoryText>
                      <HistoryText width={200} caption>{item.transactionId}</HistoryText>
                    </>
                  )}
                </HistoryTextBlock>
                <HistoryStatus status={item.type + '/' + item.state}>
                  <HistoryStatusText>{stateReturn(item.type + '/' + item.state)}</HistoryStatusText>
                </HistoryStatus>
              </HistoryBox>
            );
          })}

        {isFocused == '2' &&
          AllUnStakingArray.map((item, index) => {
            return (
              <HistoryBox key={index}>
                <HistoryTextBlock>
                  <HistoryText date>{item.entrance_date}</HistoryText>
                  <HistoryText
                    description
                    hasTransaction={item.transactionId && true}
                  >
                    {item.podo}
                  </HistoryText>
                  {(item.transactionId != '') && (
                    <>
                      <HistoryText caption>Transaction Id :</HistoryText>
                      <HistoryText width={200} caption>{item.transactionId}</HistoryText>
                    </>
                  )}
                </HistoryTextBlock>
                <HistoryStatus status={item.type + '/' + item.state}>
                  <HistoryStatusText>{stateReturn(item.type + '/' + item.state)}</HistoryStatusText>
                </HistoryStatus>
              </HistoryBox>
            );
          })}
      </ScrollView>
    </LayOut>
  );
};

function stateReturn(param) {

  if (param == 'stake/3') {
    return '???????????? ??????'
  } else if (param == 'stake/1') {
    return '???????????? ?????????'
  } else if (param == 'unstake/1') {
    return '??????????????? ?????????'
  } else if (param == 'unstake/3') {
    return '??????????????? ??????'
  }

}

export default PocketStacking;
