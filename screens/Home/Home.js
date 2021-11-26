import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import Carousel from "../../components/Home/Carousel";
import CategoryBtnBox from "../../components/Home/CategoryBtnBox";
import { MainBannerData } from "../../components/Home/SampleData";
import ItemMedium from "../../components/ItemMedium";
import { screenSize } from "../../constants";
import dummyData from "../../assets/dummyData";

const FlatList = styled.FlatList`
  background-color: #fff;
`;

const Home = ({ navigation }) => {
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const renderItem = ({ item }) => {
    return <ItemMedium {...item} navigation={navigation} />;
  };

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
