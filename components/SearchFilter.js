import React, { useState } from "react";
import { Animated, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { colors } from "../colors";
import { screenSize } from "../constants";
import { fonts } from "../fonts";
import { DownArrowIcon, ReloadIcon } from "./Icons";
import { Input } from "./share";
import { Checkbox } from "react-native-paper";
import { getStatusBarHeight } from "react-native-status-bar-height";

const OverlayWrap = styled.View`
  width: ${screenSize.width + "px"};
  height: ${screenSize.height + "px"};
  background: rgba(0, 0, 0, 0.25);
  flex-direction: row;
  /* transform: [
        {
          scale: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.9, 1],
            extrapolate: 'clamp',
          }),
        },
      ], */
`;

const OnPressOverlay = styled.TouchableOpacity`
  width: ${screenSize.width - 280 + "px"};
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
`;

const FilterContainer = styled.ScrollView`
  width: 280px;
  height: 100%;
  background: #fff;
  margin-left: auto;
`;

const FilterText = styled.Text`
  font-size: 14px;
  color: #31383f;
  ${(p) =>
    p.header &&
    css`
      font-family: ${fonts.bold};
      font-size: 18px;
      color: #1c1e22;
    `}
  ${(p) =>
    p.headerCaption &&
    css`
      color: ${colors.gray};
      font-family: ${fonts.regular};
    `}
    ${(p) =>
    p.title &&
    css`
      font-family: ${fonts.bold};
    `}
`;

const FilterHeader = styled.View`
  width: 100%;
  flex-direction: row;
  border-color: ${colors.border};
  border-bottom-width: 1px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const FilterHeaderTextWrap = styled.View`
  justify-content: space-between;
`;

const FilterMenuHeaderWrap = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  height: 40px;
  width: 100%;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

const FilterMenuListWrap = styled.View`
  background: #f3f6f9;
  width: 100%;
  padding: 20px;
`;

const InputWrap = styled.View`
  width: 240px;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchInput = styled.TextInput`
  width: ${240 - 54 + "px"};
  height: 40px;
  padding: 12px 16px;
  border-color: ${colors.border};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-width: 1px;
  font-size: 13px;
  font-family: ${fonts.bold};
  color: ${colors.gray};
  background: #fff;
`;

const SearchBtn = styled.TouchableOpacity`
  width: 54px;
  height: 100%;
  background: ${colors.purple};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const SearchBtnText = styled.Text`
  font-size: 13px;
  font-family: ${fonts.regular};
  color: #fff;
`;

const MenuItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const IconWrap = styled.TouchableOpacity`
  ${(p) =>
    p.turned &&
    css`
      transform: rotateZ(180deg);
    `}
  ${(p) =>
    p.reFresh &&
    css`
      transform: rotateZ(360deg);
    `}
`;

const IosTopper = styled.View`
  width: 100%;
  height: ${getStatusBarHeight() + "px"};
`;

const detailSearchList = [
  {
    text: "선택하지 않음",
    checked: true,
  },
  {
    text: "매진 임박",
    checked: false,
  },
  {
    text: "바로 사용",
    checked: false,
  },
  {
    text: "모바일 결제가능",
    checked: false,
  },
  {
    text: "오늘 오픈",
    checked: false,
  },
  {
    text: "오늘 마감",
    checked: false,
  },
];

const shopList = [
  {
    text: "쿠팡",
    checked: true,
  },
  {
    text: "티몬",
    checked: false,
  },
  {
    text: "위메프",
    checked: false,
  },
];

const SearchFilter = ({ navigation }) => {
  const [detailCheck, setDetailCheck] = useState({
    value0: detailSearchList[0].checked,
    value1: detailSearchList[1].checked,
    value2: detailSearchList[2].checked,
    value3: detailSearchList[3].checked,
    value4: detailSearchList[4].checked,
    value5: detailSearchList[5].checked,
  });
  const [shopCheck, setShopCheck] = useState({
    value0: shopList[0].checked,
    value1: shopList[1].checked,
    value2: shopList[2].checked,
  });
  const [detailOpen, setDetailOpen] = useState({
    detailFilter: true,
    shopFilter: false,
  });

  const onClickDetailCheck = (name) => {
    if (name === "value0") {
      setDetailCheck({
        ...{
          value0: false,
          value1: false,
          value2: false,
          value3: false,
          value4: false,
          value5: false,
        },
        ...{ [name]: !detailCheck[name] },
      });
    } else {
      setDetailCheck({
        ...detailCheck,
        ...{ value0: false },
        ...{ [name]: !detailCheck[name] },
      });
    }
  };

  const onPressCheck = (name, state, setState) => {
    setState({
      ...state,
      ...{ [name]: !state[name] },
    });
  };

  const onPressResetFilter = () => {
    setDetailCheck({
      ...{
        value0: true,
        value1: false,
        value2: false,
        value3: false,
        value4: false,
        value5: false,
      },
    });
    setShopCheck({
      ...{
        value0: false,
        value1: false,
        value2: false,
      },
    });
  };

  return (
    <>
      {Platform.OS === "android" && <SafeAreaView />}
      {Platform.OS === "ios" && <IosTopper />}
      <OverlayWrap>
        <OnPressOverlay onPress={() => navigation.navigate("SearchResult")} />
        <FilterContainer>
          <FilterHeader>
            <FilterHeaderTextWrap>
              <FilterText header>필터</FilterText>
              <FilterText headerCaption>원하는 필터를 선택해주세요</FilterText>
            </FilterHeaderTextWrap>
            <IconWrap onPress={onPressResetFilter}>
              <ReloadIcon />
            </IconWrap>
          </FilterHeader>
          <FilterMenuHeaderWrap
            onPress={() =>
              onPressCheck("detailFilter", detailOpen, setDetailOpen)
            }
          >
            <FilterText title>상세검색</FilterText>
            <IconWrap
              turned={detailOpen.detailFilter}
              onPress={() =>
                onPressCheck("detailFilter", detailOpen, setDetailOpen)
              }
            >
              <DownArrowIcon color={colors.purple} />
            </IconWrap>
          </FilterMenuHeaderWrap>
          {detailOpen.detailFilter && (
            <FilterMenuListWrap>
              <InputWrap>
                <SearchInput placeholder={"카테고리에서 핫딜 검색"} />
                <SearchBtn>
                  <SearchBtnText>검색</SearchBtnText>
                </SearchBtn>
              </InputWrap>
              {detailSearchList.map((item, index) => {
                return (
                  <MenuItem key={index}>
                    <FilterText>{item.text}</FilterText>
                    <Checkbox.Android
                      status={
                        detailCheck[`value${index}`] ? "checked" : "unchecked"
                      }
                      onPress={() => onClickDetailCheck(`value${index}`)}
                      color={colors.purple}
                    />
                  </MenuItem>
                );
              })}
            </FilterMenuListWrap>
          )}
          <FilterMenuHeaderWrap
            onPress={() =>
              onPressCheck("shopFilter", detailOpen, setDetailOpen)
            }
          >
            <FilterText title>쇼핑몰</FilterText>
            <IconWrap
              turned={detailOpen.shopFilter}
              onPress={() =>
                onPressCheck("shopFilter", detailOpen, setDetailOpen)
              }
            >
              <DownArrowIcon color={colors.purple} />
            </IconWrap>
          </FilterMenuHeaderWrap>
          {detailOpen.shopFilter && (
            <FilterMenuListWrap>
              {shopList.map((item, index) => {
                return (
                  <MenuItem key={index}>
                    <FilterText>{item.text}</FilterText>
                    <Checkbox.Android
                      status={
                        shopCheck[`value${index}`] ? "checked" : "unchecked"
                      }
                      onPress={() =>
                        onPressCheck(`value${index}`, shopCheck, setShopCheck)
                      }
                      color={colors.purple}
                    />
                  </MenuItem>
                );
              })}
            </FilterMenuListWrap>
          )}
        </FilterContainer>
      </OverlayWrap>
    </>
  );
};

export default SearchFilter;
