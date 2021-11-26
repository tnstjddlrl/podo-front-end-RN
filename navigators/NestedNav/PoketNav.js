import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wallet from "../../screens/Wallet";
import PocketNormal from "../../screens/Pocket/Pocket.normal";
import PocketStacking from "../../screens/Pocket/Pocket.stacking";
import { fonts } from "../../fonts";

const Stack = createNativeStackNavigator();

const PocketNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="PocketMain"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: fonts.bold,
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="PocketMain"
        component={Wallet}
        options={{
          headerTitle: "내 포켓",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="PocketNormal"
        component={PocketNormal}
        options={{
          headerTitle: "WBTC Pocket",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="PocketStacking"
        component={PocketStacking}
        options={{
          headerTitle: "POD Coin Pocket",
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PocketNav;
