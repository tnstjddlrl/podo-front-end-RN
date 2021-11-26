import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../colors";
import { fonts } from "../fonts";

const Container = styled.TouchableOpacity`
  margin-right: 12px;
`;
const Image = styled.Image`
  width: 88px;
  height: 88px;
  margin-bottom: 12px;
`;
const Text = styled.Text`
  ${(props) =>
    props.title &&
    css`
      font-size: 12px;
      margin-bottom: 4px;
    `}
  ${(props) =>
    props.price &&
    css`
      font-size: 14px;
      color: ${colors.purple};
      font-family: ${fonts.bold};
    `}
`;
const ItemSmall = ({ id, url, title, price, navigation }) => {
  return (
    <Container onPress={() => navigation.replace("DetailPage", id)}>
      <Image source={url} />
      <Text title>{title}</Text>
      <Text price>{price}</Text>
    </Container>
  );
};

export default ItemSmall;
