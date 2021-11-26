// import React, { useState } from "react";
// import { FlatList } from "react-native";
// import styled from "styled-components/native";
// import dummyData from "../../assets/dummyData";
// import { GridData } from "../../components/Home/SampleData";
// import ItemMedium from "../../components/ItemMedium";
// import LayOut from "../../components/LayOut";
// import SelectTabList from "../../components/SelectTabList.circle";

// const TabBox = styled.View`
//   width: 100%;
//   flex-direction: row;
//   margin-bottom: 16px;
//   padding-left: 12px;
// `;

// const viewedListSample = GridData.filter((item) => item.isViewed === true);

// const tabList = [
//   {
//     id: 1,
//     name: "Viewed",
//     title: "내가 본 상품",
//   },
//   {
//     id: 2,
//     name: "Favorite",
//     title: "좋아요 한 상품",
//   },
// ];

// const Viewed = ({ navigation }) => {
//   const [isFocused, setIsFocused] = useState({
//     Viewed: true,
//     Favorite: false,
//   });
//   const [listSample, setListSample] = useState(viewedListSample);

//   const onClickSelect = (name) => {
//     setIsFocused({
//       ...{
//         Viewed: false,
//         Favorite: false,
//       },
//       ...{ [name]: !isFocused[name] },
//     });
//     if (isFocused.Viewed === true) {
//       setListSample(GridData.filter((item) => item.isFavorite === true));
//     } else {
//       setListSample(viewedListSample);
//     }
//   };
//   const renderItem = ({ item }) => {
//     return <ItemMedium {...item} navigation={navigation} />;
//   };
//   return (
//     <LayOut backgroundColor={"#fff"} horizontalZero>
//       <TabBox>
//         {tabList.map((item) => {
//           return (
//             <SelectTabList
//               key={item.id}
//               item={item}
//               isFocused={isFocused}
//               onPress={onClickSelect}
//             />
//           );
//         })}
//       </TabBox>
//       <FlatList
//         data={dummyData.all.slice(0, 10)}
//         showsVerticalScrollIndicator={true}
//         keyExtractor={(item) => "" + item.href}
//         renderItem={renderItem}
//         numColumns={2}
//       />
//     </LayOut>
//   );
// };

// export default Viewed;
