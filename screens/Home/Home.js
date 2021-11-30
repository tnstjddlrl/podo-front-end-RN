import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import Carousel from "../../components/Home/Carousel";
import CategoryBtnBox from "../../components/Home/CategoryBtnBox";
import { MainBannerData } from "../../components/Home/SampleData";
import ItemMedium from "../../components/ItemMedium";
import { screenSize } from "../../constants";
import dummyData from "../../assets/dummyData";
import axios from 'axios';
import { Alert } from "react-native";

const FlatList = styled.FlatList`
  background-color: #fff;
`;

const Home = ({ navigation }) => {
  const [category, setCategory] = useState("all");

  const [productCode, setProductCode] = useState('1001')
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const [axiosArray, setAxiosArray] = useState([])

  const renderItem = ({ item }) => {
    return <ItemMedium {...item} navigation={navigation} />;
  };

  function ProductGetAxios(params) {
    axios.get('https://softer104.cafe24.com/Open/Coupang/Product?limit=30&kinds=bestcategories&category_id=' + productCode, {
    }).then((res) => {
      // console.log(res.data);
      if (res.data.msg === 'success') {

        setAxiosArray(res.data.data)

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

  useEffect(() => {
    ProductGetAxios()
  }, [])

  const limit = 10;

  useEffect(() => {
    setData(dummyData[category].slice(0, limit));
    setOffset(limit);
  }, [category]);

  const loadMoreData = () => {
    const newData = data.concat(
      dummyData[category].slice(offset, offset + limit)
    );
    setData(newData);
    setOffset(offset + limit);
  };

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Carousel
              gap={0}
              data={MainBannerData}
              pageWidth={screenSize.width}
            />
            <CategoryBtnBox setCategory={setCategory} />
          </>
        }
        ListHeaderComponentStyle={{
          backgroundColor: "#fff",
        }}
        data={data}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item) => "" + item.href}
        renderItem={renderItem}
        numColumns={2}
        onEndReachedThreshold={0.95}
        onEndReached={loadMoreData}
      />
    </>
  );
};

export default Home;
