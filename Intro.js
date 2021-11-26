import React from "react";
import styled from "styled-components/native";
import AppIntroSlider from "react-native-app-intro-slider";
import { screenSize } from "./constants";
import { SliderLeftIcon, SliderRightIcon } from "./components/Icons";
import Slider4 from "./assets/Slider/Slider4";
import Slider1 from "./assets/Slider/Slider1";
import Slider2 from "./assets/Slider/Slider2";
import Slider3 from "./assets/Slider/Slider3";
import { colors } from "./colors";
import { SafeAreaView, StatusBar } from "react-native";

const Container = styled.View`
  width: ${screenSize.width + "px"};
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.slider};
`;

const DoneBtn = styled.TouchableOpacity`
  width: ${screenSize.width - 96 + "px"};
  height: 48px;
  background-color: #e5ebfb;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  bottom: 7%;
  right: 10px;
`;

const DoneBtnText = styled.Text``;

const slides = [
  {
    key: "1",
    image: Slider1,
  },
  {
    key: "2",
    image: Slider2,
  },
  {
    key: "3",
    image: Slider3,
  },
  {
    key: "4",
    image: Slider4,
  },
];

const RenderItem = ({ item, onDone }) => {
  return (
    <Container>
      <item.image onDone={onDone} />
    </Container>
  );
};

const Intro = ({ onDone }) => {
  return (
    <>
      <StatusBar />
      <AppIntroSlider
        data={slides}
        key={(item) => item.id}
        renderItem={(item) => <RenderItem {...item} onDone={onDone} />}
        dotStyle={{ display: "none" }}
        activeDotStyle={{ display: "none" }}
        nextLabel={false}
        dotClickEnabled={false}
        showDoneButton={true}
        showPrevButton={true}
        renderPrevButton={() => <SliderLeftIcon />}
        renderNextButton={() => <SliderRightIcon />}
        renderDoneButton={() => (
          <DoneBtn onPress={() => onDone()}>
            <DoneBtnText>쇼핑하기</DoneBtnText>
          </DoneBtn>
        )}
      />
      <SafeAreaView style={{ marginBottom: 0 }} />
    </>
  );
};

export default Intro;
