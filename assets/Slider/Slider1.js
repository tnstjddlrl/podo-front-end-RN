import * as React from "react";
import styled from "styled-components/native";
import { screenSize } from "../../constants";

const Container = styled.View`
  width: ${screenSize.width + "px"};
  height: 100%;
`;
const Img = styled.Image`
  width: 100%;
  height: 100%;
`;
const Slider1 = (props) => {
  return (
    <Container>
      <Img source={{ uri: 'https://softer104.cafe24.com/assets/Slider/Slider1.png' }} resizeMode="cover" />
    </Container>
  );
};
export default Slider1;
