import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { colors } from "../../colors";
import { SearchResultTabList } from "./SampleData";

import axios from 'axios';
import { Alert, Image } from "react-native";


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

const RenderItem = ({ item, setCategory }) => {
  const onPressSetState = () => {
    // setCategory(item.code);
    Alert.alert(item.code)
  };
  console.log(item.code)
  var dd = '../../assets/categoryIcons/' + '1030' + '.png'
  const img = require(dd)

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


  function CategoryGetAxios(params) {
    axios.get('https://softer104.cafe24.com/Open/Coupang/Category', {
      //noparam
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === 'success') {
        console.log('불러오기 성공')
        var array = []

        for (var i = 0; i < Object.keys(res.data).length - 3; i++) {
          array.push(Object.values(res.data)[i])
        }

        console.log(array)
        setCategoryArray(array)
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