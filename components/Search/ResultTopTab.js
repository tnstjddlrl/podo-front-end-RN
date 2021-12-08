import React from "react";
import styled from "styled-components/native";
import { colors } from "../../colors";

const SearchTabContainer = styled.TouchableOpacity`
  height: 40px;
  justify-content: center;
  padding: 0 10px;
  align-items: center;
  border-bottom-width: ${(p) => (p.isFocused ? "5px" : "3px")};
  border-bottom-color: ${(p) => (p.isFocused ? colors.purple : colors.border)};
`;

const SearchTabText = styled.Text`
  font-size: 13px;
  width: 100%;
  text-align: center;
  color: ${(p) => (p.isFocused ? colors.darkBlack : colors.gray)};
`;

const ResultTopTab = ({ item, isFocused, onClickSelect, setCategory }) => {
  return (
    <SearchTabContainer
      isFocused={isFocused == item.code}
      onPress={() => {
        onClickSelect(item.code);
        setCategory(item.name);
      }}
    >
      <SearchTabText isFocused={isFocused == item.code}>
        {item.name}
      </SearchTabText>
    </SearchTabContainer>
  );
};

export default ResultTopTab;
