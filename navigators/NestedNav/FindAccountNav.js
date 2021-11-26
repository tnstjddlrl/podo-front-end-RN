import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FindAccount from "../../screens/LoggedOut/FindAccount";
import FindPassword from "../../screens/LoggedOut/FindPassword";
import { fonts } from "../../fonts";
import { colors } from "../../colors";

const TopTab = createMaterialTopTabNavigator();

const FindAccountNav = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontFamily: fonts.bold },
        tabBarIndicatorStyle: {
          backgroundColor: colors.purple,
        },
      }}
    >
      <TopTab.Screen
        name="FindAccount"
        component={FindAccount}
        options={{ title: "이메일 찾기" }}
      />
      <TopTab.Screen
        name="FindPassword"
        component={FindPassword}
        options={{ title: "비밀번호 찾기" }}
      />
    </TopTab.Navigator>
  );
};

export default FindAccountNav;
