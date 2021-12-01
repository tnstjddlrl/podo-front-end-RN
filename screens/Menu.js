import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components/native";
import { AtomCategoryArray } from "../atom/atom";
import { colors } from "../colors";
import { SearchResultTabList } from "../components/Home/SampleData";
import LayOut from "../components/LayOut";
import { screenSize } from "../constants";
import { fonts } from "../fonts";

import axios from 'axios';

const Container = styled.ScrollView`
  flex: 1;
  min-height: ${screenSize.height + "px"};
  background: #fff;
  margin-top: 12px;
`;

const MenuHeader = styled.View`
  width: 100%;
  height: 48px;
  justify-content: center;
  padding: 0 24px;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

const MenuLayout = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MenuItem = styled.TouchableOpacity`
  width: 50%;
  height: 42px;
  justify-content: center;
  padding-left: 24px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

const MenuItemText = styled.Text`
  font-size: 14px;
  color: ${colors.gray};
  ${(p) =>
    p.header &&
    css`
      font-family: ${fonts.bold};
      color: ${colors.purple};
    `}
`;



const eventMenuList = ["골드박스", "기획전", "이벤트/쿠폰", "C.에비뉴"];

const Menu = () => {
  const [atCategoryArray, setAtCategoryArray] = useRecoilState(AtomCategoryArray)
  const [brandArray, setBrandArray] = useState([])


  function BrandLoadAxios(params) {
    axios.get('https://softer104.cafe24.com/Open/Coupang/Brands', {
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === 'success') {
        var array = []

        for (var i = 0; i < Object.keys(res.data).length - 3; i++) {
          array.push(Object.values(res.data)[i])
        }

        setBrandArray(array)
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

  useEffect(() => {
    BrandLoadAxios()
  }, [])


  return (
    <LayOut horizontalZero backgroundColor={"#fff"}>
      <Container>
        <MenuHeader>
          <MenuItemText header>쇼핑</MenuItemText>
        </MenuHeader>
        <MenuLayout>
          {atCategoryArray.map((item) => {
            return (
              <MenuItem key={item.code}>
                <MenuItemText>{item.name}</MenuItemText>
              </MenuItem>
            );
          })}
        </MenuLayout>
        <MenuHeader>
          <MenuItemText header>이벤트</MenuItemText>
        </MenuHeader>
        <MenuLayout>
          {eventMenuList.map((item, index) => {
            return (
              <MenuItem key={index}>
                <MenuItemText>{item}</MenuItemText>
              </MenuItem>
            );
          })}
        </MenuLayout>
      </Container>
    </LayOut>
  );
};

export default Menu;
