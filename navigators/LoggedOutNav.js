import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "../screens/LoggedOut/CreateAccount";
import Login from "../screens/LoggedOut/Login";
import CreateAccountPodo from "../screens/LoggedOut/CreateAccountPodo";
import LoginPodo from "../screens/LoggedOut/LoginPodo";
import LoginAlarm from "../screens/LoginAlarm";
import HomeBottomNav from "./NestedNav/HomeBottomNav";
import FindAccountNav from "./NestedNav/FindAccountNav";
import { fonts } from "../fonts";
import Alarm from "../screens/LoggedOut/Alarm";
import PocketWithDrawal from "../screens/LoggedOut/PocketWithDrawal";
import CancelWithdraw from "../screens/LoggedOut/CancelWithdraw";
import StackingWithdrawal from "../screens/LoggedOut/StackingWithdrawal";
import StackingEnd from "../screens/LoggedOut/StackingEnd";
import UnStackingWithdrawal from "../screens/LoggedOut/UnStackingWithdrawal";
import CancelStacking from "../screens/LoggedOut/CancelStacking";
import CancelUnStacking from "../screens/LoggedOut/CancelUnStacking";
import SetAutoLogin from "../screens/MyPage/SetAutoLogin";
import Shipping from "../screens/MyPage/Shipping";
import Notice from "../screens/MyPage/Notice";
import General from "../screens/MyPage/General";
import Qna from "../screens/MyPage/Qna";
import ManToMan from "../screens/MyPage/ManToMan";
import Guide from "../screens/MyPage/Guide";
import DetailPage from "../screens/LoggedOut/DetailPageScreen/DetailPage";
import TermsAndPolicy from "../screens/LoggedOut/TermsAndPolicy";
import PersonalSetting from "../screens/MyPage/PersonalSetting";
import ReviewListS from "../screens/LoggedOut/DetailPageScreen/ReviewListS";
import Review from "../screens/LoggedOut/DetailPageScreen/Review";
import InquiryListS from "../screens/LoggedOut/DetailPageScreen/InquiryListS";
import InquiryS from "../screens/LoggedOut/DetailPageScreen/InquiryS";
import LinkingPage from "../screens/MyPage/LinkingPage";
import SearchFilter from "../components/SearchFilter";
import SearchResult from "../screens/Search/SearchResult";
import { CardStyleInterpolators } from "@react-navigation/stack";
import DetailPageLink from "../screens/LoggedOut/DetailPageScreen/DetailPageLink";

const Stack = createNativeStackNavigator();

import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}


const LoggedOutNav = () => {
  useEffect(() => {
    requestUserPermission()
  }, [])
  //fcm ?????? ???????????????

  return (
    <Stack.Navigator
      initialRouteName="HomeNav"
      screenOptions={{
        headerTitleStyle: { fontFamily: fonts.bold },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="HomeNav"
        component={HomeBottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "?????????" }}
      />
      <Stack.Screen
        name="LoginPodo"
        component={LoginPodo}
        options={{ title: "?????????" }}
      />
      <Stack.Screen
        name="FindNav"
        component={FindAccountNav}
        options={{ title: "?????????/???????????? ??????" }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          title: "????????????",
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="CreateAccountPodo"
        component={CreateAccountPodo}
        options={{ title: "????????????" }}
      />
      <Stack.Screen
        name="Alarm"
        component={Alarm}
        style={{ shadowColor: "transparent" }}
        options={{
          title: "?????????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="LoginAlarm"
        component={LoginAlarm}
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="PocketWithDrawal"
        component={PocketWithDrawal}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CancelWithdraw"
        component={CancelWithdraw}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StackingWithdrawal"
        component={StackingWithdrawal}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StackingEnd"
        component={StackingEnd}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UnStackingWithdrawal"
        component={UnStackingWithdrawal}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CancelStacking"
        component={CancelStacking}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CancelUnStacking"
        component={CancelUnStacking}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SetAutoLogin"
        component={SetAutoLogin}
        options={{
          headerTitle: "????????? ????????? ??????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="LinkingPage"
        component={LinkingPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Shipping"
        component={Shipping}
        options={{
          headerTitle: "?????? ??????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Notice"
        component={Notice}
        options={{
          headerTitle: "????????????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="General"
        component={General}
        options={{
          headerTitle: "??????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Qna"
        component={Qna}
        options={{
          headerTitle: "?????? ?????? ??????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ManToMan"
        component={ManToMan}
        options={{
          headerTitle: "1:1 ??????/??????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="TermsAndPolicy"
        component={TermsAndPolicy}
        options={{
          headerTitle: "????????????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Guide"
        component={Guide}
        options={{
          headerTitle: "???????????????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="PersonalSetting"
        component={PersonalSetting}
        options={{
          headerTitle: "???????????? ??????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailPageLink"
        component={DetailPageLink}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReviewListS"
        component={ReviewListS}
        options={{
          headerTitle: "?????? ??????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{
          headerTitle: "?????? ??????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="InquiryListS"
        component={InquiryListS}
        options={{
          headerTitle: "?????? ??????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="InquiryS"
        component={InquiryS}
        options={{
          headerTitle: "?????? ??????",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="SearchFilter"
        component={SearchFilter}
        options={{
          headerShown: false,
          headerShadowVisible: false,
          presentation: "transparentModal",
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoggedOutNav;
