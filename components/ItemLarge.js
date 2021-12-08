import React, { useState } from "react";
import styled, { css } from "styled-components/native";
import { colors } from "../colors";
import { FavoriteSmallIcon, FavoriteFilledSmallIcon } from "./Icons";

const ItemContainer = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const LeftPart = styled.View`
  flex-direction: row;
`;
const RightPart = styled.View`
  height: 100%;
  justify-content: space-between;
`;
const ItemImage = styled.Image`
  width: 100px;
  aspect-ratio: 1;
  margin-right: 12px;
`;

const InfoWrapper = styled.View`
  width: 57%;
  justify-content: space-between;
`;

const InfoText = styled.Text`
  ${(p) =>
    p.price &&
    css`
      font-size: 16px;
      color: ${colors.darkBlack};
    `}
  ${(p) =>
    p.rewardPercent &&
    css`
      font-size: 14px;
      color: ${colors.orange};
    `}
${(p) =>
    p.title &&
    css`
      width: 100%;
      font-size: 12px;
      color: ${colors.gray};
    `}
${(p) =>
    p.info &&
    css`
      font-size: 11px;
      color: ${colors.gray};
    `}
`;

const FavoriteBtnWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-start;
`;
const ItemLarge = ({ item, navigation }) => {
  // const [isLike, setIsLike] = useState(item.userLike);
  // const toggleLike = () => {
  //   setIsLike(!isLike);
  // };
  const { productUrl } = item;

  const goDetailPage = () =>
    navigation.navigate("DetailPageLink", { productUrl });
  return (
    <ItemContainer onPress={() => goDetailPage()}>
      <LeftPart>
        <ItemImage source={{ uri: item.productImage }} />
        <InfoWrapper>
          <InfoText price>{(item.productPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</InfoText>
          <InfoText title numberOfLines={2}>
            {item.productName}
          </InfoText>
          <InfoText info>쇼핑몰 마크 & 배송정보</InfoText>
          <InfoText info>쇼핑몰</InfoText>
        </InfoWrapper>
      </LeftPart>
      <RightPart>
        <InfoText rewardPercent>{item.reward}</InfoText>
        {/* <FavoriteBtnWrapper onPress={() => toggleLike()}>
          {isLike ? <FavoriteFilledSmallIcon /> : <FavoriteSmallIcon />}
        </FavoriteBtnWrapper> */}
      </RightPart>
    </ItemContainer>
  );
};

export default ItemLarge;
