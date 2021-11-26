import React from "react";
import { TouchableOpacity, View } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";
import { colors } from "../colors";
import { fonts } from "../fonts";
import {
  RightArrowIcon,
  StarFiiledSmallIcon,
  StarOutLineSmallIcon,
} from "./Icons";
import { PurpleLineBtn, UnderLine } from "./share";

const Container = styled.TouchableOpacity`
  width: 100%;
  padding-top: 12px;
`;

const Text = styled.Text`
  ${(props) =>
    props.name &&
    css`
      font-size: 12px;
    `}
  ${(props) =>
    props.date &&
    css`
      font-size: 11px;
      font-family: ${fonts.bold};
    `}
${(props) =>
    props.text &&
    css`
      font-size: 12px;
      color: ${colors.gray};
    `}
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
const StarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const MiniStar = [
  { id: 1, fill: true },
  { id: 2, fill: true },
  { id: 3, fill: true },
  { id: 4, fill: false },
  { id: 5, fill: false },
];

const ReviewListItem = ({ navigation }) => {
  const goReview = () => navigation.navigate("Review");
  return (
    <Container onPress={() => goReview()}>
      <Wrapper>
        <View>
          <Text>홍*동</Text>
          <StarWrapper>
            {MiniStar.map((item) =>
              item.fill ? (
                <StarFiiledSmallIcon key={item.id} />
              ) : (
                <StarOutLineSmallIcon key={item.id} />
              )
            )}

            <Text date style={{ marginLeft: 4 }}>
              2021.07.28
            </Text>
          </StarWrapper>
          <Text>정말 이뻐요</Text>
        </View>
        <View>
          <RightArrowIcon color={colors.gray} />
        </View>
      </Wrapper>
      <UnderLine />
    </Container>
  );
};
export default ReviewListItem;
