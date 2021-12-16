import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../colors";
import { DownIcon, FilterIcon, ListIcon } from "../Icons";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`;

const FilterBtn = styled.TouchableOpacity`
  height: 28px;
  width: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.purple};
  border-radius: 4px;
`;

const FilterBtnText = styled.Text`
  font-size: 12px;
  color: ${colors.white};
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
const OrderBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
`;

const Seperate = styled.View`
  width: 1px;
  height: 15px;
  border: 1px solid ${colors.gray};
  margin: 0 8px;
`;

const FilterSection = ({ navigation }) => {
  return (
    <Container>
      <FilterBtn onPress={() => navigation.navigate("SearchFilter")}>
        <FilterIcon />
        <FilterBtnText>필터</FilterBtnText>
      </FilterBtn>
      <Wrapper>
        <OrderBtn>
          <Text>인기순</Text>
          <DownIcon />
        </OrderBtn>
        <Seperate />
        <TouchableOpacity>
          <ListIcon />
        </TouchableOpacity>
      </Wrapper>
    </Container>
  );
};

export default FilterSection;
