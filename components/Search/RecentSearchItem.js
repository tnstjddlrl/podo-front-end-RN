import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
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
  return (
    <Container>
      <TouchableOpacity>
        <Text>{item.search}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <CancelIcon />
      </TouchableOpacity>
    </Container>
  );
};

export default RecentSearchItem;
