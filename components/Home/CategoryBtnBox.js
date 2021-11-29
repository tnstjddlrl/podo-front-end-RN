import React, { useState } from "react";
import styled from "styled-components";

import { colors } from "../../colors";
import { SearchResultTabList } from "./SampleData";

const FlatList = styled.FlatList`
  padding: 16px 16px 16px 6px;
`;

const Container = styled.TouchableOpacity`
  width: 76px;
  height: 76px;
  justify-content: space-between;

  align-items: center;
  margin-right: 6px;
`;
const BackGround = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${colors.brightBlue};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;
const Text = styled.Text`
  margin-top: 8px;
  font-size: 11px;
  color: ${colors.gray};
`;

const RenderItem = ({ item, setCategory }) => {
  const onPressSetState = () => {
    setCategory(item.name);
  };
  return (
    <Container onPress={onPressSetState}>
      <BackGround>
        <item.icon />
      </BackGround>
      <Text>{item.title}</Text>
    </Container>
  );
};
const CategoryBtnBox = ({ setCategory }) => {
  return (
    <FlatList
      data={SearchResultTabList}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => "" + item.id}
      renderItem={(item) => <RenderItem {...item} setCategory={setCategory} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoryBtnBox;