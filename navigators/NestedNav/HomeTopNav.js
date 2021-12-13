import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../../screens/Home/Home";
import EventA from "../../screens/Home/HomeTop/EventA";

import ExhibitionA from "../../screens/Home/HomeTop/ExhibitionA";
import EventB from "../../screens/Home/HomeTop/EventB";
import ExhibitionB from "../../screens/Home/HomeTop/ExhibitionB";
import { colors } from "../../colors";

const TopTab = createMaterialTopTabNavigator();

const HomeTopNav = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Home"
      backBehavior="firstRoute"
      screenOptions={{
        swipeEnabled: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: "#000",
        tabBarIndicatorStyle: {
          backgroundColor: colors.purple,
        },

        animationEnabled: true,
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: "auto",
        },
      }}
    >
      <TopTab.Screen name="Home" component={Home} options={{ title: "홈" }} />
      {/* <TopTab.Screen
        name="EventA"
        component={EventA}
        options={{
          title: "이벤트 테스트",
        }}
      />
      <TopTab.Screen
        name="ExhibitionA"
        component={ExhibitionA}
        options={{
          title: "포인트두배 이벤트",
        }}
      />
      <TopTab.Screen
        name="EventB"
        component={EventB}
        options={{
          title: "TOP100 기획전",
        }}
      />
      <TopTab.Screen
        name="ExhibitionB"
        component={ExhibitionB}
        options={{
          title: "슬기로운 기획전",
        }}
      /> */}
    </TopTab.Navigator>
  );
};

export default HomeTopNav;
