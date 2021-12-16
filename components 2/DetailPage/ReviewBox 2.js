import React from "react";
import { css } from "styled-components";
import styled from "styled-components/native";
import { colors } from "../../colors";
import { fonts } from "../../fonts";
import Inquiry from "./Inquiry";
import ReviewList from "./ReviewList";

const Container = styled.View`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 8px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.bold};
  margin-bottom: 24px;
`;

const SeparateBtnWarpper = styled.View`
  width: 100%;
  height: 44px;
  flex-direction: row;
  margin-bottom: 20px;
`;

const SeparateBtn = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 8px 13px;
  background-color: ${(props) =>
    props.isSelected ? colors.purple : colors.white};
  ${(props) =>
    props.isSelected
      ? css`
          border: none;
        `
      : css`
          border: 1px solid ${colors.border};
        `}
  ${(props) =>
    props.left &&
    css`
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    `}
  ${(props) =>
    props.right &&
    css`
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    `}
`;

const SeparateBtnText = styled.Text`
  font-family: ${fonts.bold};
  color: ${(props) => (props.isSelected ? colors.white : colors.darkBlack)};
`;

const ReviewBox = ({
  onClickSelect,
  isSelected,
  navigation,
  onClickInquiry,
}) => {
  return (
    <Container>
      <Title>상품평 및 상품 문의</Title>
      <SeparateBtnWarpper>
        <SeparateBtn
          isSelected={isSelected["review"]}
          onPress={() => onClickSelect("review")}
          left
        >
          <SeparateBtnText isSelected={isSelected["review"]}>
            상품평
          </SeparateBtnText>
        </SeparateBtn>
        <SeparateBtn
          isSelected={isSelected["inquiry"]}
          onPress={() => onClickSelect("inquiry")}
          right
        >
          <SeparateBtnText isSelected={isSelected["inquiry"]}>
            상품문의
          </SeparateBtnText>
        </SeparateBtn>
      </SeparateBtnWarpper>
      {isSelected["review"] ? (
        <ReviewList navigation={navigation} />
      ) : (
        <Inquiry navigation={navigation} onClickInquiry={onClickInquiry} />
      )}
    </Container>
  );
};

export default ReviewBox;
