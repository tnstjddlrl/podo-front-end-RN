import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { fonts } from "../../fonts";
import MyPage from "../../screens/MyPage/Mypage";
import Favorite from "../../screens/MyPage/Favorite";
import Viewed from "../../screens/MyPage/Viewed";

const Stack = createNativeStackNavigator();

const MyPageNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Mypage"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: fonts.bold,
          fontSize: 18,
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerTitle: "마이페이지",
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerTitle: "좋아요 한 상품" }}
      />
      <Stack.Screen
        name="Viewed"
        component={Favorite}
        options={{ headerTitle: "내가 본 상품" }}
      />
    </Stack.Navigator>
  );
};

export default MyPageNav;
