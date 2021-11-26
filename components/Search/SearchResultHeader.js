import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../colors";
import { fonts } from "../../fonts";
import { BackArrowIcon, CancelIcon, SearchIcon } from "../Icons";
import { useForm } from "react-hook-form";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchBar = styled.View`
  width: 90%;
  height: 44px;
  padding: 10px 12px 10px 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.border};
  border-radius: 12px;
`;
const LeftPart = styled.View`
  flex-direction: row;
`;

const Input = styled.TextInput`
  margin-left: 4px;
  width: 80%;
  font-family: ${fonts.medium};
`;

const SearchResultHeader = ({ navigation, route: { params } }) => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      searchText: params?.searchText,
    },
  });

  const onCompleted = async (data) => {
    await navigation.replace("SearchResult", data);
  };
  useEffect(() => {
    register("searchText", { required: true });
  });

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrowIcon />
      </TouchableOpacity>
      <SearchBar>
        <LeftPart>
          <TouchableOpacity onPress={handleSubmit(onCompleted)}>
            <SearchIcon />
          </TouchableOpacity>
          <Input
            placeholder="검색어를 입력해주세요."
            value={watch("searchText")}
            returnKeyType="done"
            onChangeText={(text) => setValue("searchText", text)}
          />
        </LeftPart>
        <TouchableOpacity onPress={() => setValue("searchText", "")}>
          <CancelIcon />
        </TouchableOpacity>
      </SearchBar>
    </Container>
  );
};

export default SearchResultHeader;
