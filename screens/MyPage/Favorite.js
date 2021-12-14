import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import dummyData from "../../assets/dummyData";
import { AtomUserId, AtomUserToken } from "../../atom/atom";
import ItemMediumTest from "../../components/ItemMedium";
import LayOut from "../../components/LayOut";
import SelectTabList from "../../components/SelectTabList.circle";

const TabBox = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 16px;
  padding-left: 12px;
`;

const favoriteListSample = dummyData.all.slice(0, 10);
const viewedListSample = dummyData.all.slice(0, 20);
const tabList = [
  {
    id: 1,
    name: "Viewed",
    title: "내가 본 상품",
  },
  {
    id: 2,
    name: "Favorite",
    title: "좋아요 한 상품",
  },
];

const Favorite = ({
  navigation,
  route: {
    params: { isFavorite },
  },
}) => {
  const [isFocused, setIsFocused] = useState({
    Viewed: !isFavorite,
    Favorite: isFavorite,
  });
  const [listSample, setListSample] = useState([]);

  const [atUserId, setAtUserId] = useRecoilState(AtomUserId)
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken)

  const [likeArray, setLikeArray] = useState([])
  const [viewArray, setViewArray] = useState([])

  function MyViewLoadAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/View/List', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 5,
        offset: 0,
        w_name: 'mb_email',
        w_para: atUserId
      }
    }).then((res) => {
      console.log('본 상품');
      console.log(res.data.list);
      setViewArray(res.data.list)
      // var data = res.data.data
    }).catch((error) => {
      console.log(error);
    })
  }

  function MyLikeLoadAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/Like/List', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      params: {
        limit: 5,
        offset: 0,
        w_name: 'mb_email',
        w_para: atUserId
      }
    }).then((res) => {
      console.log('좋아요 상품');
      console.log(res.data.list);
      setLikeArray(res.data.list)
      // var data = res.data.data
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    MyViewLoadAxios()
    MyLikeLoadAxios()
  }, [])



  const onClickSelect = (name) => {
    if (!isFocused[name]) {
      setIsFocused({
        ...{
          Viewed: false,
          Favorite: false,
        },
        ...{ [name]: !isFocused[name] },
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log(isFocused.Favorite)
    if (isFocused.Favorite === true) {
      setListSample(likeArray);
    } else {
      setListSample(viewArray);
    }
  }, [isFocused.Favorite]);
  const renderItem = ({ item }) => {
    return (
      <ItemMediumTest
        {...item}
        navigation={navigation}
        isFavorite={false}
      />
    );
  };
  return (
    <LayOut backgroundColor={"#fff"} horizontalZero>
      <TabBox>
        {tabList.map((item) => {
          return (
            <SelectTabList
              key={item.id}
              item={item}
              isFocused={isFocused}
              onPress={onClickSelect}
            />
          );
        })}
      </TabBox>

      {isFocused.Favorite ?
        <FlatList
          data={likeArray}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item) => "" + item.productId}
          renderItem={renderItem}
          numColumns={2}
        /> :

        <FlatList
          data={viewArray}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item) => "" + item.productId}
          renderItem={renderItem}
          numColumns={2}
        />
      }

      {/* {viewArray.map((item, index) => {
        console.log(index)
        return (
          <ItemMediumTest item={item} navigation={navigation}
            isFavorite={false}></ItemMediumTest>
        )
      })} */}
    </LayOut>
  );
};

export default Favorite;
