import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components/native";
import { AtomUserToken } from "../atom/atom";
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
  const {
    productUrl,
    productImage,
    productPrice,
    productName,
    isFavorite,
    like,
    isFreeShipping,
    rank,
    categoryName,
    isRocket,
    keyword,
    productId
  } = item;
  // console.log(item)

  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken)


  function LinkAxios(param) { //
    if (atUserToken == '') {
      Alert.alert('로그인을 먼저 해주세요.')
      navigation.navigate("Login");
    } else {
      axios.get('https://softer104.cafe24.com/V1/View/Deeplink', {
        headers: {
          Authorization: `Bearer ${atUserToken}`
        },
        params: {
          productId: productId,
          productName: productName,
          productPrice: productPrice,
          productImage: productImage,
          productUrl: productUrl,
          categoryName: categoryName,
          keyword: keyword,
          rank: rank,
          isRocket: isRocket,
          isFreeShipping: isFreeShipping,
          like: 0
        }
      }).then((res) => {
        console.log(res.data);
        if (res.data.msg === 'success') {
          console.log(res.data.data[0].landingUrl);
          let url = res.data.data[0].landingUrl
          navigation.navigate("DetailPageLink", { url })
        }
      }).catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          // Alert.alert(error.response.data.error);
        } else if (error.request) {
          console.log(error.request);
        }
      })
    }

  }


  const goDetailPage = () =>
    navigation.navigate("DetailPageLink", { productUrl });
  return (
    <ItemContainer onPress={() => LinkAxios()}>
      <LeftPart>
        <ItemImage source={{ uri: item.productImage }} />
        <InfoWrapper>
          <InfoText price>{(item.productPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</InfoText>
          <InfoText title numberOfLines={2}>
            {item.productName}
          </InfoText>
          <InfoText info>무료배송</InfoText>
          <InfoText info>쿠팡</InfoText>
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