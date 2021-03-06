import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { useRecoilState } from "recoil";

import styled from "styled-components/native";
import { AsyncSetUserCurrentSearchList, AtomUserCurrentSearchList } from "../../atom/atom";
import { colors } from "../../colors";
import { fonts } from "../../fonts";
import { AlarmIcon, SearchIcon } from "../Icons";

const Container = styled.View`
  padding: 0 5px 0 10px;
  padding-top: 16px;
`;

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SearchBar = styled.View`
  width: ${(props) => (props.home ? "88%" : "100%")};
  height: 44px;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
`;

const Input = styled.TextInput`
  margin-left: 4px;
  width: 80%;
  font-family: ${fonts.medium};
`;

const SearchHeader = ({ home }) => {
  const navigation = useNavigation();
  const goAlarm = () => navigation.navigate("Alarm");
  const { register, handleSubmit, setValue, watch } = useForm();

  const onCompleted = (data) => {
    navigation.navigate("SearchResult", data);

    console.log(data.searchText)
    let array = atUserSearchList.concat({ id: Math.random().toString(36).substr(2, 11), search: data.searchText })
    setAtUserSerachList(array)
    AsyncSetUserCurrentSearchList(array).then(() => { console.log('어싱크 완료'); })
    setValue('searchText', '')
  };

  const [atUserSearchList, setAtUserSerachList] = useRecoilState(AtomUserCurrentSearchList);

  // useEffect(()=>{

  // },[])


  useEffect(() => {
    register("searchText", {
      required: true,
    });
  }, [register]);

  return (
    <Container>
      <Wrapper>
        <SearchBar home={home}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handleSubmit(onCompleted)}>
              <SearchIcon />
            </TouchableOpacity>
            <Input
              placeholder="검색어를 입력해주세요."
              returnKeyType="done"
              value={watch('searchText')}
              onChangeText={(text) => setValue("searchText", text)}
              onSubmitEditing={handleSubmit(onCompleted)}
            />
          </View>
        </SearchBar>
        {home && (
          <TouchableOpacity onPress={() => goAlarm()}>
            <AlarmIcon />
          </TouchableOpacity>
        )}
      </Wrapper>
    </Container>
  );
};

export default SearchHeader;
