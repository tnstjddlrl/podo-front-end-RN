import { Checkbox } from "react-native-paper";
import React from "react";
import styled from "styled-components/native";

import { fonts } from "../../fonts";
import { colors } from "../../colors";

const AgreeRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AgreeTitle = styled.Text`
  font-size: 14px;
  font-family: ${(props) => (props.bold ? fonts.bold : fonts.medium)};
`;
const CheckRow = ({ text, bold, name, isSelected, onClickSelect }) => {
  return (
    <AgreeRow>
      <Checkbox
        color={colors.purple}
        status={isSelected[name] ? "checked" : "unchecked"}
        onPress={() => onClickSelect(name)}
      />
      <AgreeTitle bold={bold}>{text}</AgreeTitle>
    </AgreeRow>
  );
};

export default CheckRow;
