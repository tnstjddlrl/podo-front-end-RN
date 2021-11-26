import * as React from "react";
import styled from "styled-components/native";
import { screenSize } from "../../constants";

const Container = styled.View`
  width: ${screenSize.width + "px"};
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// const DoneBtn = styled.TouchableOpacity`
//   width: 80%;
//   height: 56px;
//   background-color: #e5ebfb;
//   justify-content: center;
//   align-items: center;
//   border-radius: 12px;
//   position: absolute;
//   bottom: 2%;
//   left: 16%;
//   z-index: 999;
// `;

// const DoneBtnText = styled.Text``;

const Img = styled.Image`
  width: 100%;
  height: 100%;
`;

function Slider4({ onDone }) {
  return (
    <Container>
      <Img source={require("./Slider4.png")} resizeMode="cover" />
      {/* <DoneBtn onPress={() => onDone()}>
        <DoneBtnText>쇼핑하기</DoneBtnText>
      </DoneBtn> */}
    </Container>
  );
}
export default Slider4;
