import React, { useState } from "react";
import { FlatList } from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import { DownArrowIcon } from "../../components/Icons";
import LayOut from "../../components/LayOut";
import NoPage from "../../components/NoPage";
import SelectTabList from "../../components/SelectTabList.circle";
import { fonts } from "../../fonts";

const TabBox = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 16px;
  padding: 0 24px;
  position: relative;
  z-index: 998;
`;

const ListItem = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

const ListTextWrap = styled.View``;

const ListText = styled.Text`
  ${(p) =>
    p.title &&
    css`
      font-family: ${fonts.bold};
      font-size: 16px;
      color: ${colors.darkBlack};
    `}
  ${(p) =>
    p.category &&
    css`
      color: ${colors.gray};
      font-size: 13px;
    `}
`;

const ListIcon = styled.View`
  justify-content: center;
  align-items: center;
`;

const ListContent = styled.View`
  margin-top: 16px;
  padding-bottom: 40px;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

const ListContentText = styled.Text`
  font-size: 14px;
`;

const tabList = [
  {
    id: 1,
    name: "All",
    title: "전체",
  },
  {
    id: 2,
    name: "Service",
    title: "서비스",
  },
  {
    id: 3,
    name: "Product",
    title: "상품",
  },
  {
    id: 4,
    name: "Etc",
    title: "기타",
  },
];

const faqList = [
  {
    id: 1,
    title: "FAQ title",
    category: "Service",
    summary: "Description",
    mainText: "마일리지 확인은 어떻게 하나요?",
    description: `1. My wallet 에서 확인 하실 수 있으며 2. 메인의 Status Bar를 통해서도 확인 하실 수
      있습니다.`,
  },
  {
    id: 2,
    title: "FAQ title",
    category: "Product",
    summary: "Description",
    mainText: "마일리지 확인은 어떻게 하나요?",
    description: "lorem ipsum",
  },
  {
    id: 3,
    title: "FAQ title",
    category: "Service",
    summary: "Description",
    mainText: "마일리지 확인은 어떻게 하나요?",
    description: "lorem ipsum",
  },
  {
    id: 4,
    title: "FAQ title",
    category: "Etc",
    summary: "Description",
    mainText: "마일리지 확인은 어떻게 하나요?",
    description: "lorem ipsum",
  },
];

const Qna = () => {
  const [isFocused, setIsFocused] = useState({
    All: true,
    Service: false,
    Product: false,
    Etc: false,
  });
  // const [showList, setShowList] = useState(faqList);
  const showList = null;

  const [clicked, setClicked] = useState([]);

  const onPressClicked = (num) => {
    if (clicked.filter((item) => item.id === num).length !== 0) {
      setClicked(clicked.filter((item) => item.id !== num));
    } else {
      setClicked(clicked.concat(faqList.filter((item) => item.id === num)));
    }
  };

  const onClickSelect = (name) => {
    setIsFocused({
      ...{
        All: false,
        Service: false,
        Product: false,
        Etc: false,
      },
      ...{ [name]: !isFocused[name] },
    });
    // if (name === "All") {
    //   setShowList(faqList);
    // } else {
    //   setShowList(faqList.filter((item) => item.category === name));
    // }
  };
  const renderItem = ({ item }) => {
    return (
      <>
        <ListItem onPress={() => onPressClicked(item.id)}>
          <ListTextWrap>
            <ListText category>
              {item.title} ({item.category})
            </ListText>
            <ListText title>{item.summary}</ListText>
          </ListTextWrap>
          <ListIcon
            style={
              clicked.filter((list) => list.id === item.id).length !== 0 && {
                transform: [{ rotateZ: "180deg" }],
              }
            }
          >
            <DownArrowIcon />
          </ListIcon>
        </ListItem>
        {clicked.filter((list) => list.id === item.id).length !== 0 && (
          <ListContent>
            <ListContentText>{item.mainText}</ListContentText>
            <ListContentText>{item.description}</ListContentText>
          </ListContent>
        )}
      </>
    );
  };
  return (
    <LayOut backgroundColor={"#fff"} horizontalZero={true}>
      <TabBox>
        {tabList.map((item) => {
          return (
            <SelectTabList
              key={item.id}
              item={item}
              isFocused={isFocused}
              onPress={onClickSelect}
            />
          );
        })}
      </TabBox>
      {showList && (
        <FlatList
          data={showList}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item) => "" + item.id}
          renderItem={renderItem}
          numColumns={1}
          style={{ paddingHorizontal: 24 }}
        />
      )}
      {!showList && <NoPage horizontalZero={true} />}
    </LayOut>
  );
};

export default Qna;
