import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import dummyData from "../../assets/dummyData";
import { AtomCategoryArray } from "../../atom/atom";
import { colors } from "../../colors";
import { SearchResultTabList } from "../../components/Home/SampleData";
import ItemLarge from "../../components/ItemLarge";
import LayOut from "../../components/LayOut";
import FilterSection from "../../components/Search/FilterSection";
import ResultTopTab from "../../components/Search/ResultTopTab";
import SearchResultHeader from "../../components/Search/SearchResultHeader";

const SearchResult = ({ navigation, route }) => {
  const [isFocused, setIsFocused] = useState(1001);
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const onClickSelect = (id) => {
    setIsFocused(id);
  };

  const [atCategoryArray, setAtCategoryArray] = useRecoilState(AtomCategoryArray)
  const [axiosArray, setAxiosArray] = useState([])
  const [searchText, SetSearchText] = useState('')

  function ProductGetAxios(params) {
    axios.get('https://softer104.cafe24.com/Open/Coupang/Product?limit=100&kinds=bestcategories&category_id=' + isFocused, {
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
    console.log(isFocused)
    ProductGetAxios()
  }, [isFocused])

  useEffect(() => {
    setData(axiosArray.slice(0, limit));
    setOffset(limit);
  }, [axiosArray]);

  const loadMoreData = () => {
    const newData = data.concat(
      axiosArray.slice(offset, offset + limit)
    );
    setData(newData);
    setOffset(offset + limit);
  };

  useEffect(() => {
    console.log(searchText);
  }, [searchText])




  return (
    <>
      <SafeAreaView
        style={{ paddingTop: "9%", backgroundColor: colors.white }}
      />
      <LayOut backgroundColor={colors.white}>
        <SearchResultHeader navigation={navigation} route={route} setSearchText={SetSearchText} />
        <FlatList
          data={atCategoryArray}
          keyExtractor={(item) => "" + item.code}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
          renderItem={(item) => (
            <ResultTopTab
              {...item}
              isFocused={isFocused}
              onClickSelect={onClickSelect}
              setCategory={setCategory}
            />
          )}
        />
        <FlatList
          ListHeaderComponent={<FilterSection navigation={navigation} />}
          data={data}
          keyExtractor={(item) => "" + item.productUrl}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => <ItemLarge {...item} navigation={navigation} />}
          onEndReachedThreshold={0.95}
          onEndReached={loadMoreData}
        />
      </LayOut>
    </>
  );
};

export default SearchResult;