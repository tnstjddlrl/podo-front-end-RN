import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

const Tab = styled.TouchableOpacity`
  height: 32px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  background-color: ${(p) => (p.focused ? colors.purple : colors.brightBlue)};
  border-radius: 100px;
  padding: 10px 16px 8px 16px;
`;

const TabText = styled.Text`
  font-size: 12px;
  color: ${(p) => (p.focused ? "#fff" : colors.gray)};
`;

const SelectTabList = ({ item, isFocused, onPress }) => {
  return (
    <Tab
      key={item.id}
      name={item.name}
      focused={isFocused[item.name]}
      onPress={() => onPress(item.name)}
    >
      <TabText name={item.name} focused={isFocused[item.name]}>
        {item.title}
      </TabText>
    </Tab>
  );
};

export default SelectTabList;
