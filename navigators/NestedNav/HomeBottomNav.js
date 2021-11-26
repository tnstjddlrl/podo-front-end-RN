import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "../../screens/Menu";
import Search from "../../screens/Search/Search";
import HomeTopNav from "./HomeTopNav";
import PocketNav from "./PoketNav";
import SearchHeader from "../../components/replaceHeader/SearchHeader";
import MyPageNav from "./MyPageNav";
import { screenSize } from "../../constants";
import MenuHeader from "../../components/replaceHeader/MenuHeader";
import { colors } from "../../colors";
import styled from "styled-components";
import {
  NavHome,
  NavMenu,
  NavMypage,
  NavPocket,
  NavSearch,
} from "../../components/Icons";

const Indicator = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${colors.purple};
  position: absolute;
  top: 0;
`;

const Tab = createBottomTabNavigator();

const BorderTop = styled.View`
  border-top-width: 3px;
  border-color: ${(p) => (p.focused ? colors.purple : colors.border)};
`;

const HomeBottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTopNav"
      lastRouteName="HomeTopNav"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitle: (props) => <MenuHeader {...props} />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarStyle: {
            position: "absolute",
            bottom: -screenSize.height,
          },
          tabBarIcon: () => {
            return <NavMenu />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: (props) => <SearchHeader {...props} home={false} />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused && <Indicator />}
                <NavSearch active={focused} />
              </>
            );
          },
          headerShadowVisible: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="HomeTopNav"
        component={HomeTopNav}
        options={{
          headerTitle: (props) => <SearchHeader {...props} home={true} />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused && <Indicator />}
                <NavHome active={focused} />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={PocketNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused && <Indicator />}
                <NavPocket active={focused} />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyPageNav"
        component={MyPageNav}
        options={{
          headerShown: false,
          tabBarIconStyle: { margin: 0 },
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused && <Indicator />}
                <NavMypage active={focused} />
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomNav;
