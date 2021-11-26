import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../colors";
import LayOut from "../LayOut";
import { RecentSearchesData } from "../Home/SampleData";
import RecentSearchItem from "./RecentSearchItem";

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
  return (
    <LayOut backgroundColor={colors.white}>
      <RowWrapper>
        <Text fontSize={"14px"}>최근 검색어</Text>
        <TouchableOpacity>
          <Text underline color={colors.gray}>
            전체삭제
          </Text>
        </TouchableOpacity>
      </RowWrapper>
      {/* <FlatList
        data={RecentSearchesData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => "" + item.id}
        renderItem={RecentSearchItem}
      /> */}
    </LayOut>
  );
};

export default RecentSearches;
