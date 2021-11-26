import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../colors";
import {
  RightArrowIcon,
  StarFiiledIcon,
  StarOutLineIcon,
} from "../../../components/Icons";
import LayOut from "../../../components/LayOut";
import ReviewListItem from "../../../components/ReviewListItem";
import { PurpleLineBtn, UnderLine } from "../../../components/share";
import { screenSize } from "../../../constants";

const StarWrapperRow = styled.View`
  width: 100%;
  height: 52px;
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

const NContainer = styled.View`
  margin-top: 60%;
  align-items: center;
`;

const NText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
`;

const Star = [
  { id: 1, fill: true },
  { id: 2, fill: true },
  { id: 3, fill: true },
  { id: 4, fill: true },
  { id: 5, fill: false },
];

const ReviewListS = ({ navigation }) => {
  const [noData, setNoData] = useState(true);
  const goBack = () => navigation.goBack();
  return (
    <LayOut backgroundColor={"#fff"}>
      {noData ? (
        <NContainer>
          <NText>아직 리뷰가 없습니다.</NText>
          <PurpleLineBtn
            text="리뷰하기"
            marginTop={"16px"}
            height={"44px"}
            width={"50%"}
            onPress={goBack}
          />
        </NContainer>
      ) : (
        <>
          <StarWrapperRow>
            <StarWrapper>
              {Star.map((item) =>
                item.fill ? (
                  <StarFiiledIcon key={item.id} />
                ) : (
                  <StarOutLineIcon key={item.id} />
                )
              )}
            </StarWrapper>
            <StarWrapperText>4</StarWrapperText>
          </StarWrapperRow>
          <UnderLine />
          {[1, 2, 3].slice(0, 4).map((item) => (
            <ReviewListItem key={item} navigation={navigation} />
          ))}
        </>
      )}
    </LayOut>
  );
};

export default ReviewListS;
