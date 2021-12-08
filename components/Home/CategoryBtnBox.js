import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { colors } from "../../colors";
import { SearchResultTabList } from "./SampleData";

import axios from 'axios';
import { Alert, Image } from "react-native";
import { useRecoilState } from "recoil";
import { AtomCategoryArray } from "../../atom/atom";


const FlatList = styled.FlatList`
  padding: 16px 16px 16px 6px;
`;

const Container = styled.TouchableOpacity`
  width: 76px;
  height: 76px;
  justify-content: space-between;

  align-items: center;
  margin-right: 6px;
`;
const BackGround = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${colors.brightBlue};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;
const Text = styled.Text`
  margin-top: 8px;
  font-size: 11px;
  color: ${colors.gray};
`;

const slider = {
  1: require('../../assets/categoryIcons/1001.png'),
  2: require('../../assets/categoryIcons/1002.png'),
  10: require('../../assets/categoryIcons/1010.png'),
  11: require('../../assets/categoryIcons/1011.png'),
  12: require('../../assets/categoryIcons/1012.png'),
  13: require('../../assets/categoryIcons/1013.png'),
  14: require('../../assets/categoryIcons/1014.png'),
  15: require('../../assets/categoryIcons/1015.png'),
  16: require('../../assets/categoryIcons/1016.png'),
  17: require('../../assets/categoryIcons/1017.png'),
  18: require('../../assets/categoryIcons/1018.png'),
  19: require('../../assets/categoryIcons/1019.png'),
  20: require('../../assets/categoryIcons/1020.png'),
  21: require('../../assets/categoryIcons/1021.png'),
  24: require('../../assets/categoryIcons/1024.png'),
  25: require('../../assets/categoryIcons/1025.png'),
  26: require('../../assets/categoryIcons/1026.png'),
  29: require('../../assets/categoryIcons/1029.png'),
  30: require('../../assets/categoryIcons/1030.png')
}



const RenderItem = ({ item, setCategory }) => {
  const onPressSetState = () => {
    setCategory(item.code);
  };
  var img = ''

  if (item.code.split('')[2] === '0') {
    // console.log(item.code.split('')[3])
    // console.log(slider[Number(item.code.split('')[3])])
    img = slider[Number(item.code.split('')[3])]
  } else {
    // console.log(item.code.split('')[2] + item.code.split('')[3])
    // console.log(slider[Number(item.code.split('')[2] + item.code.split('')[3])])
    img = slider[Number(item.code.split('')[2] + item.code.split('')[3])]
  }

  return (
    <Container onPress={onPressSetState}>
      <BackGround>
        <Image source={img} style={{ width: 30, height: 30 }}></Image>
      </BackGround>
      <Text>{item.name}</Text>
    </Container>
  );
};

const CategoryBtnBox = ({ setCategory }) => {
  const [categoryArray, setCategoryArray] = useState([])
  const [atCategoryArray, setAtCategoryArray] = useRecoilState(AtomCategoryArray) //아톰 카테고리 배열

  function CategoryGetAxios(params) {
    axios.get('https://softer104.cafe24.com/Open/Coupang/Category', {
      //noparam
    }).then((res) => {
      // console.log(res.data);
      if (res.data.msg === 'success') {
        console.log('불러오기 성공')
        var array = []

        for (var i = 0; i < Object.keys(res.data).length - 3; i++) {
          array.push(Object.values(res.data)[i])
        }


        // console.log(array)
        setCategoryArray(array)
        setAtCategoryArray(array)
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data.error);
        Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }

  useEffect(() => {
    CategoryGetAxios()
  }, [])

  return (
    <FlatList
      data={categoryArray}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => "" + item.name}
      renderItem={(item, index) => <RenderItem key={index} {...item} setCategory={setCategory} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoryBtnBox;