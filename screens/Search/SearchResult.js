import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import dummyData from "../../assets/dummyData";
import { colors } from "../../colors";
import { SearchResultTabList } from "../../components/Home/SampleData";
import ItemLarge from "../../components/ItemLarge";
import LayOut from "../../components/LayOut";
import FilterSection from "../../components/Search/FilterSection";
import ResultTopTab from "../../components/Search/ResultTopTab";
import SearchResultHeader from "../../components/Search/SearchResultHeader";

const SearchResult = ({ navigation, route }) => {
  const [isFocused, setIsFocused] = useState(0);
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const onClickSelect = (id) => {
    setIsFocused(id);
  };

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
      <SafeAreaView
        style={{ paddingTop: "9%", backgroundColor: colors.white }}
      />
      <LayOut backgroundColor={colors.white}>
        <SearchResultHeader navigation={navigation} route={route} />
        <FlatList
          data={SearchResultTabList}
          keyExtractor={(item) => "" + item.id}
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
          keyExtractor={(item) => "" + item.href}
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
