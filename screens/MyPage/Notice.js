import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import { DownArrowIcon } from "../../components/Icons";
import NoPage from "../../components/NoPage";
import { fonts } from "../../fonts";

import axios from "axios";

const ListItem = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${colors.border};
  padding: 0 24px;
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
    p.date &&
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
  padding: 0 24px;
  padding-bottom: 40px;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

const ListContentText = styled.Text`
  font-size: 14px;
`;

const data = [
  {
    id: 1,
    title: "[공지] Event title 1",
    date: "YYYY.MM.DD",
    description:
      "공지사항 YYYY.MM.DD 이번에 100,000 포인트를 모두에게 지급합니다~ 모두 부자되세요~",
  },
  {
    id: 2,
    title: "[공지] Event title 2",
    date: "YYYY.MM.DD",
    description: "lorem ipsum",
  },
  {
    id: 3,
    title: "[공지] Event title 3",
    date: "YYYY.MM.DD",
    description: "lorem ipsum",
  },
  {
    id: 4,
    title: "[공지] Event title 4",
    date: "YYYY.MM.DD",
    description: "lorem ipsum",
  },
];

//테스트로 넘어온 값
// {
//   "error": false,
//   "list": Array [
//     Object {
//       "category": "",
//       "content": "공지사항 내용",
//       "hit": "0",
//       "img_name": "이미지 파일이름",
//       "img_path": "이미지 파일 경로",
//       "img_size": "이미지 파일 사이즈",
//       "num": "4",
//       "reg_date": "2021-11-19 22:10:38",
//       "title": "공지사항 제목",
//       "writer": "",
//     },
//   ],
//   "msg": "success",
//   "status": 200,
// }

const Notice = () => {
  const [clicked, setClicked] = useState([]);

  const onPressClicked = (num) => {
    if (clicked.filter((item) => item.id === num).length !== 0) {
      setClicked(clicked.filter((item) => item.id !== num));
    } else {
      setClicked(clicked.concat(data.filter((item) => item.id === num)));
    }
  };

  function noticePostAxios(params) {
    axios.post('https://softer104.cafe24.com/Open/Notice/List', {
      limit: 10,
      offset: 0,
      w_name: 'num',
      w_para: 4
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === 'success') {

      }

    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }

  useEffect(() => {
    noticePostAxios()
  }, [])

  const renderItem = ({ item }) => {
    // const [isClick, setIsclick] = useState(false)
    var isClick = false
    function ClickedListItem(params) {
      if (isClick) {
        isClick = false
      } else {
        isClick = true
      }
    }

    return (
      <>
        <ListItem onPress={() => ClickedListItem()}>
          <ListTextWrap>
            <ListText title>{item.title}</ListText>
            <ListText date>{item.date}</ListText>
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
        {isClick && (
          <ListContent>
            <ListContentText>{item.description}</ListContentText>
          </ListContent>
        )}

        {/* {clicked.filter((list) => list.id === item.id).length !== 0 && (
          <ListContent>
            <ListContentText>{item.description}</ListContentText>
          </ListContent>
        )} */}
      </>
    );
  };
  return (
    // <NoPage customText={"아직 공지사항이 없습니다!"} />
    <FlatList
      style={{
        backgroundColor: "#fff",
      }}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => "" + item.id}
    />
  );
};

export default Notice;
