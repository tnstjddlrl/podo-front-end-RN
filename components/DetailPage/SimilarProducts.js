import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { fonts } from "../../fonts";
import { GridData } from "../Home/SampleData";
import ItemSmall from "../ItemSmall";

const Container = styled.View`
  background-color: #fff;
  padding: 20px 20px 120px 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.bold};
  margin-bottom: 12px;
`;

const SimilarProducts = ({ navigation }) => {
  return (
    <Container>
      <Title>유사상품</Title>
      {/* <FlatList
        data={GridData}
        showsVerticalScrollIndicator={true}
        keyExtractor={item => "" + item.id}
        renderItem={({ item }) => (
          <ItemSmall {...item} navigation={navigation} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      /> */}
    </Container>
  );
};

export default SimilarProducts;
