// import React, { useEffect, useState } from "react";
// import { FlatList } from "react-native";
// import styled from "styled-components/native";
// import dummyData from "../../assets/dummyData";
// import ItemMedium from "../../components/ItemMedium";
// import LayOut from "../../components/LayOut";
// import SelectTabList from "../../components/SelectTabList.circle";

// const TabBox = styled.View`
//   width: 100%;
//   flex-direction: row;
//   margin-bottom: 16px;
//   padding-left: 12px;
// `;

// const favoriteListSample = dummyData.all.slice(0, 10);
// const viewedListSample = dummyData.all.slice(0, 20);
// const tabList = [
//     {
//         id: 1,
//         name: "Viewed",
//         title: "내가 본 상품",
//     },
//     {
//         id: 2,
//         name: "Favorite",
//         title: "좋아요 한 상품",
//     },
// ];

// const Favorite = ({
//     navigation,
//     route: {
//         params: { isFavorite },
//     },
// }) => {
//     const [isFocused, setIsFocused] = useState({
//         Viewed: !isFavorite,
//         Favorite: isFavorite,
//     });
//     const [listSample, setListSample] = useState(favoriteListSample);

//     const onClickSelect = (name) => {
//         if (!isFocused[name]) {
//             setIsFocused({
//                 ...{
//                     Viewed: false,
//                     Favorite: false,
//                 },
//                 ...{ [name]: !isFocused[name] },
//             });
//         } else {
//             return;
//         }
//     };

//     useEffect(() => {
//         if (isFocused.Favorite === true) {
//             setListSample(favoriteListSample);
//         } else {
//             setListSample(viewedListSample);
//         }
//     }, [isFocused.Favorite]);
//     const renderItem = ({ item }) => {
//         return (
//             <ItemMedium
//                 {...item}
//                 navigation={navigation}
//                 isFavorite={listSample === favoriteListSample && 1}
//             />
//         );
//     };
//     return (
//         <LayOut backgroundColor={"#fff"} horizontalZero>
//             <TabBox>
//                 {tabList.map((item) => {
//                     return (
//                         <SelectTabList
//                             key={item.id}
//                             item={item}
//                             isFocused={isFocused}
//                             onPress={onClickSelect}
//                         />
//                     );
//                 })}
//             </TabBox>
//             {/* <FlatList
//                 data={listSample}
//                 showsVerticalScrollIndicator={true}
//                 keyExtractor={(item) => "" + item.href}
//                 renderItem={renderItem}
//                 numColumns={2}
//             /> */}
//         </LayOut>
//     );
// };

// export default Favorite;
