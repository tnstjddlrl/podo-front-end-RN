import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../colors";
import LayOut from "../LayOut";
import { RecentSearchesData } from "../Home/SampleData";
import RecentSearchItem from "./RecentSearchItem";
import { AsyncSetUserCurrentSearchList, AtomUserCurrentSearchList } from "../../atom/atom";
import { useRecoilState } from "recoil";
import { ScrollView } from "react-native-gesture-handler";

const RowWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: ${colors.white};
`;

const Text = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
  color: ${(props) => (props.color ? props.color : colors.darkBlack)};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
`;

const FlatList = styled.FlatList`
  padding-bottom: 20px;
  background-color: #fff;
`;

const RecentSearches = () => {

  const [atUserSearchList, setAtUserSerachList] = useRecoilState(AtomUserCurrentSearchList);

  // useEffect(() => {
  //   let plus = atUserSearchList.concat({ id: atUserSearchList.length + 1, search: '추가됨!' })
  //   setAtUserSerachList(plus)
  // }, [])

  return (
    <LayOut backgroundColor={colors.white}>
      <RowWrapper>
        <Text fontSize={"14px"}>최근 검색어</Text>
        <TouchableOpacity onPress={() => {
          console.log('클릭');
          AsyncSetUserCurrentSearchList([]).then(() => { console.log('삭제 완료'); })
          setAtUserSerachList([])
        }}>
          <Text underline color={colors.gray}>
            전체삭제
          </Text>
        </TouchableOpacity>
      </RowWrapper>

      {/* <FlatList
        data={atUserSearchList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => "" + item.id}
        renderItem={RecentSearchItem}
      /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {([...atUserSearchList].reverse()).map((item, index) => {
          return (
            <RecentSearchItem key={item.id} item={item}></RecentSearchItem>
          )
        })}
      </ScrollView>
    </LayOut>
  );
};

export default RecentSearches;