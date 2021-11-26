import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../colors";
import { RightArrowIcon, StarFiiledIcon, StarOutLineIcon } from "../Icons";
import ReviewListItem from "../ReviewListItem";
import { PurpleLineBtn, UnderLine } from "../share";

const StarWrapperRow = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13px;
`;

const StarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StarWrapperText = styled.Text`
  margin-left: 14px;
  font-size: 20px;
`;

const Star = [
  { id: 1, fill: true },
  { id: 2, fill: true },
  { id: 3, fill: true },
  { id: 4, fill: true },
  { id: 5, fill: false },
];

const ReviewList = ({ navigation }) => {
  const goReviewList = () => navigation.navigate("ReviewListS");
  return (
    <>
      <StarWrapperRow onPress={() => goReviewList()}>
        <StarWrapper>
          {Star.map((item) =>
            item.fill ? (
              <StarFiiledIcon key={item.id} />
            ) : (
              <StarOutLineIcon key={item.id} />
            )
          )}
          <StarWrapperText>4</StarWrapperText>
        </StarWrapper>
        <View>
          <RightArrowIcon color={colors.gray} />
        </View>
      </StarWrapperRow>
      <UnderLine />
      {[1, 2, 3].slice(0, 4).map((item) => (
        <ReviewListItem key={item} navigation={navigation} />
      ))}
      <PurpleLineBtn
        onPress={goReviewList}
        marginTop={"16px"}
        height={"52px"}
        text="이 상품의 상품평 모두보기"
      />
    </>
  );
};

export default ReviewList;
