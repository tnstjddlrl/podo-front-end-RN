import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components/native";
import { AtomUserToken } from "../atom/atom";
import { colors } from "../colors";
import { randomValue } from "../constants";
import { fonts } from "../fonts";
import { FavoriteSmallIcon, FavoriteFilledSmallIcon } from "./Icons";

const ItemContainer = styled.TouchableOpacity`
  width: 50%;
  padding: 0 12px;
`;
const ImageWrapper = styled.View`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
`;

const ItemImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const FreeShippingBtn = styled.View`
  width: 46px;
  height: 20px;
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${colors.purple};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

const FreeBtnText = styled.Text`
  font-size: 9px;
  color: #fff;
  font-family: ${fonts.medium};
`;

const HeartBtn = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 2px;
  background-color: transparent;
`;
const HeartBtnBackground = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const InfoWrapper = styled.View`
  padding: 8px 4px;
`;

const InfoTextRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const InfoText = styled.Text`
  ${(p) =>
    p.price &&
    css`
      font-size: 15px;
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
      margin: 4px 0;
    `}
${(p) =>
    p.count &&
    css`
      font-size: 11px;
      color: ${colors.lightPurple};
    `}
`;

const ItemMedium = ({
  href,
  thumbnail,
  price,
  reward,
  title,
  isFavorite,
  userLike,
  freeShipping,
  navigation,
}) => {
  const goDetailPage = () =>
    navigation.navigate("DetailPageLink", { href, reward });
  const [isLike, setIsLike] = useState(isFavorite || userLike);
  const onClickLike = () => {
    setIsLike(!isLike);
  };

  return (
    <ItemContainer onPress={() => goDetailPage()}>
      <ImageWrapper>
        <ItemImage source={{ uri: thumbnail }} />
        {freeShipping && (
          <FreeShippingBtn>
            <FreeBtnText>무료배송</FreeBtnText>
          </FreeShippingBtn>
        )}
        <HeartBtn onPress={() => onClickLike()}>
          {isLike ? (
            <HeartBtnBackground>
              <FavoriteFilledSmallIcon />
            </HeartBtnBackground>
          ) : (
            <HeartBtnBackground>
              <FavoriteSmallIcon />
            </HeartBtnBackground>
          )}
        </HeartBtn>
      </ImageWrapper>
      <InfoWrapper>
        <InfoTextRow>
          <InfoText price>{price}</InfoText>
          <InfoText rewardPercent>{reward}</InfoText>
        </InfoTextRow>
        <InfoText title numberOfLines={2}>
          {title}
        </InfoText>
        <InfoText count>구매 123</InfoText>
      </InfoWrapper>
    </ItemContainer>
  );
};

const ItemMediumTest = ({
  productUrl,
  productImage,
  productPrice,
  productName,
  isFavorite,
  like,
  isFreeShipping,
  navigation,
  rank,
  categoryName,
  isRocket,
  keyword,
  productId
}) => {
  const goDetailPage = () =>
    navigation.navigate("DetailPageLink", { productUrl });
  const [isLike, setIsLike] = useState(isFavorite || like != 0);
  const onClickLike = () => {
    setIsLike(!isLike);
  };
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
          like: like
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

  return (
    <ItemContainer onPress={() => LinkAxios()}>
      <ImageWrapper>
        <ItemImage source={{ uri: productImage }} />
        {/* {isFreeShipping && (
          <FreeShippingBtn>
            <FreeBtnText>무료배송</FreeBtnText>
          </FreeShippingBtn>
        )} */}
        {/* <HeartBtn onPress={() => onClickLike()}>
          {isLike ? (
            <HeartBtnBackground>
              <FavoriteFilledSmallIcon />
            </HeartBtnBackground>
          ) : (
            <HeartBtnBackground>
              <FavoriteSmallIcon />
            </HeartBtnBackground>
          )}
        </HeartBtn> */}
      </ImageWrapper>
      <InfoWrapper>
        <InfoTextRow>
          {/* <InfoText price>{productPrice}</InfoText> */}
          <InfoText price>{productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</InfoText>
          {/* <InfoText rewardPercent>{reward}</InfoText> */}
        </InfoTextRow>
        <InfoText title numberOfLines={2}>
          {productName}
        </InfoText>
        <InfoText count>랭킹 {rank}위</InfoText>
      </InfoWrapper>
    </ItemContainer>
  );
};

export default ItemMediumTest;
