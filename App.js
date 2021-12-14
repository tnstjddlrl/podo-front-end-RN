import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

import localFonts from "./assets/Fonts/localFonts";
import LoggedOutNav from "./navigators/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";
import { setCustomText } from "react-native-global-props";
import Intro from "./Intro";
import { StatusBar } from "expo-status-bar";
import DoubleTapToClose from "./utils/DoubleBack";
import { storeData } from "./storage";
import { randomName } from "./constants";

import {
  RecoilRoot,
} from 'recoil';

import { AsyncgetIsFirst, AsyncsetIsFirst } from "./atom/atom";

const isCurrentScreenInitialOne = (state) => {
  const route = state.routes[state.index];
  if (route.state) {
    // Dive into nested navigators
    return isCurrentScreenInitialOne(route.state);
  }
  return state.index === 0;
};

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



export default function App() {
  const [isInitialScreen, setIsInitialScreen] = useState(true);

  const [loading, setLoading] = useState(true);
  const [intro, setIntro] = useState(AsyncgetIsFirst().then((res) => {
    setIntro(res)
  }));
  const onFinish = () => setLoading(false);

  const [fontsLoaded] = Font.useFonts({
    ...localFonts,
  });

  if (!fontsLoaded) {
    return null;
  }
  const preloadAssets = () => {
    const imagesToLoad = [
      require("./assets/ic_facebook.png"),
      require("./assets/ic_kakao.png"),
    ];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));

    // 더미 닉네임 저장
    const name = randomName();
    const randomNamePromise = storeData("randomName", name);
    return Promise.all([...imagePromises, randomNamePromise]);
  };

  useEffect(() => {
    requestUserPermission()
  }, [])

  if (loading) {
    return (
      <AppLoading
        startAsync={preloadAssets}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }
  const customTextProps = {
    style: {
      fontFamily: "SpoqaHanSansNeo-Medium",
    },
  };
  setCustomText(customTextProps);
  const darkMode = false;

  const done = () => {
    setIntro(false);
    AsyncsetIsFirst('notFirst')
  };

  return (
    <>
      <RecoilRoot>
        {intro ? (
          <Intro onDone={done} />
        ) : (
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            {isInitialScreen && (
              <DoubleTapToClose message="'뒤로' 버튼을 한번 더 누르시면 종료됩니다." />
            )}
            <NavigationContainer
              onStateChange={(state) => {
                setIsInitialScreen(isCurrentScreenInitialOne(state));
              }}
            >
              <StatusBar />
              <LoggedOutNav />
            </NavigationContainer>
          </ThemeProvider>
        )}
      </RecoilRoot>
    </>
  );
}
