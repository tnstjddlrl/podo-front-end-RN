import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import { AtomUserToken } from "../../atom/atom";
import HistoryItem from "../../components/HistoryItem";
import { AlarmData, AlarmTabList } from "../../components/Home/SampleData";
import LayOut from "../../components/LayOut";
import NoPage from "../../components/NoPage";
import SelectTabList from "../../components/SelectTabList.circle";

const TabBox = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 16px;
  padding: 0 20px;
  position: relative;
  z-index: 998;
`;

const FlatList = styled.FlatList`
  background-color: #fff;
  padding: 0 20px;
`;

const Alarm = () => {
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken) //유저 토큰

  useEffect(() => {
    AlarmLoadAxios()
  }, [])

  function AlarmLoadAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/Alarm/List', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        al_type: 'wirhdraw'
      }
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === 'success') {
        // setSelectedList(res.data.list)
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        // Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }


  // const [list, setList] = useState(
  //   AlarmData.filter((item) => item.type === "marketing")
  // );
  const [isFocused, setIsFocused] = useState({
    marketing: true,
    reward: false,
    withdraw: false,
  });
  const onClickSelect = (name) => {
    setIsFocused({
      ...{
        marketing: false,
        reward: false,
        withdraw: false,
      },
      ...{ [name]: !isFocused[name] },
    });
    // setList(AlarmData.filter((item) => item.type === name));
  };
  // const renderItem = ({ item }) => {
  //   return <HistoryItem {...item} />;
  // };

  return (
    <LayOut backgroundColor={"#fff"} horizontalZero={true}>
      <TabBox>
        {AlarmTabList.map((item) => {
          return (
            <SelectTabList
              item={item}
              isFocused={isFocused}
              onPress={onClickSelect}
              key={item.id}
            />
          );
        })}
      </TabBox>
      <NoPage />
    </LayOut>
    // <FlatList
    //   ListHeaderComponent={
    //     <TabBox>
    //       {AlarmTabList.map((item) => {
    //         return (
    //           <SelectTabList
    //             item={item}
    //             isFocused={isFocused}
    //             onPress={onClickSelect}
    //             key={item.id}
    //           />
    //         );
    //       })}
    //     </TabBox>
    //   }
    //   ListHeaderComponentStyle={{
    //     backgroundColor: "#fff",
    //   }}
    //   data={list}
    //   keyExtractor={(item) => "" + item.id}
    //   renderItem={renderItem}
    // />
  );
};

export default Alarm;
