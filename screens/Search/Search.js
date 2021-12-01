import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { SearchTabList } from "../../components/Home/SampleData";
import SelectTabList from "../../components/SelectTabList.circle";
import ItemMedium from "../../components/ItemMedium";
import { colors } from "../../colors";
import LayOut from "../../components/LayOut";
import RecentSearches from "../../components/Search/RecentSearches";
import dummyData from "../../assets/dummyData";

const TabBox = styled.View`
  width: 100%;
  flex-direction: row;
  margin: 0 24px;
  margin-bottom: 16px;
  background-color: ${colors.white};
`;

const FlatList = styled.FlatList`
  padding: 0 12px 20px 12px;
  background-color: #fff;
`;

const Search = ({ navigation }) => {
  const [normal, setNormal] = useState(true);
  const [isFocused, setIsFocused] = useState({
    recentSearches: false,
    seenProducts: false,
  });
  const onClickSelect = async (name) => {
    await setIsFocused((prevState) => {
      return {
        ...{ recentSearches: false, seenProducts: false },
        ...{ [name]: !prevState[name] },
      };
    });
  };
  useEffect(() => {
    if (Object.keys(isFocused).filter((item) => isFocused[item]).length !== 0) {
      setNormal(false);
    } else {
      setNormal(true);
    }
  }, [isFocused]);

  const renderItem = ({ item }) => {
    // return <ItemMedium {...item} navigation={navigation} />;
  };

  return (
    <LayOut paddingTop={16} horizontalZero backgroundColor={colors.white}>
      <TabBox>
        {SearchTabList.map((item) => {
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
      {normal && (
        <FlatList
          data={dummyData.all.slice(0, 10)}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => "" + item.href}
          renderItem={renderItem}
          numColumns={2}
          normal={normal}
        />
      )}
      {!normal && isFocused["recentSearches"] && <RecentSearches />}
      {!normal && isFocused["seenProducts"] && (
        <FlatList
          data={dummyData.beauty.slice(0, 10)}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => "" + item.href}
          renderItem={renderItem}
          numColumns={2}
        />
      )}
    </LayOut>
  );
};

export default Search;
