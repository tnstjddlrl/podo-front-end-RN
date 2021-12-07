import React from "react";
import { TouchableOpacity } from "react-native";
import { useRecoilState } from "recoil";
import styled from "styled-components/native";
import { AtomUserCurrentSearchList } from "../../atom/atom";
import { colors } from "../../colors";
import { CancelIcon } from "../Icons";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;

const Text = styled.Text`
  font-size: 12px;
  color: ${colors.darkBlack};
`;

const RecentSearchItem = ({ item }) => {
  const [atUserSearchList, setAtUserSerachList] = useRecoilState(AtomUserCurrentSearchList);

  function ClickedDeleteBTN() {
    let array = atUserSearchList.filter((res) => item.id != res.id)
    setAtUserSerachList(array)
    console.log(array)
  }

  return (
    <Container>
      <TouchableOpacity onPress={(e) => { console.log(e.nativeEvent) }}>
        <Text>{item.search}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(e) => { console.log(e.nativeEvent), ClickedDeleteBTN() }}>
        <CancelIcon />
      </TouchableOpacity>
    </Container>
  );
};

export default RecentSearchItem;
