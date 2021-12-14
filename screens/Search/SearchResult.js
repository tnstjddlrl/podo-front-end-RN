import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components/native";
import dummyData from "../../assets/dummyData";
import { AtomCategoryArray, AtomUserToken } from "../../atom/atom";
import { colors } from "../../colors";
import { SearchResultTabList } from "../../components/Home/SampleData";
import ItemLarge from "../../components/ItemLarge";
import LayOut from "../../components/LayOut";
import FilterSection from "../../components/Search/FilterSection";
import ResultTopTab from "../../components/Search/ResultTopTab";
import SearchResultHeader from "../../components/Search/SearchResultHeader";


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
    p.quantity &&
    css`
      font-family: ${fonts.bold};
      font-size: 14px;
      line-height: 16.8px;
      color: #31383f;
      margin-bottom: ${(p) => (p.hasTransaction ? "12px" : 0)};
    `}
    ${(p) =>
    p.noHistory &&
    css`
      font-size: 16px;
      text-align: center;
      margin-top: 35%;
      color: ${colors.gray};
    `}
`;




const SearchResult = ({ navigation, route }) => {
  const [isFocused, setIsFocused] = useState(route.params.code ? route.params.code : '9999');
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const onClickSelect = (id) => {
    setIsFocused(id);
  };

  const [atCategoryArray, setAtCategoryArray] = useRecoilState(AtomCategoryArray)
  const [searchCategory, setSearchCategory] = useState([{ code: '9999', name: '전체' }])
  const [axiosArray, setAxiosArray] = useState([])
  const [searchText, SetSearchText] = useState(route.params.searchText)
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken)

  function ProductGetAxios(params) {
    axios.get(`https://softer104.cafe24.com/Open/Coupang/ProductSearch?keyword=${searchText}&category_id=${isFocused === '9999' ? '' : isFocused}&kinds=bestcategories,coupangPL,goldbox`, {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === 'success') {

        setAxiosArray(res.data.list)
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
    console.log(isFocused, searchText, route.params)
    // Alert.alert(isFocused, searchText, route.params)
    ProductGetAxios()

  }, [isFocused])

  useEffect(() => {

  }, [])

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
          data={(searchCategory.concat(atCategoryArray))}
          keyExtractor={(item) => '' + item.code}
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

        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
          {(searchCategory.concat(atCategoryArray)).map((item, index) => {
            return (
              <ResultTopTab
                item={item}
                key={index}
                isFocused={isFocused}
                onClickSelect={onClickSelect}
                setCategory={setCategory}
              />
            )
          })}
        </ScrollView> */}
        {(data.length == 0) &&
          <HistoryText noHistory>
            검색결과가 없습니다!
          </HistoryText>
        }
        <FlatList
          style={{ marginTop: 10, height: '100%' }}
          data={data}
          keyExtractor={(item) => "" + item.productId}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => <ItemLarge key={item.productId} {...item} navigation={navigation} />}
          onEndReachedThreshold={0.95}
          onEndReached={loadMoreData}
        />
      </LayOut>
    </>
  );
};



export default SearchResult;