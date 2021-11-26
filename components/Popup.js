import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { colors } from "../colors";
import { CancelBtn, PurpleBtn } from "./share";
import { screenSize } from "../constants";
import { fonts } from "../fonts";

const Background = styled.View`
  width: ${screenSize.width + "px"};
  height: ${screenSize.height + "px"};
  align-items: center;
  background-color: ${colors.dark};
  position: absolute;
`;

const Container = styled.View`
  position: absolute;
  top: 30%;
  width: 80%;
  padding: 24px;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 20px;
  font-family: ${fonts.bold};
  margin-bottom: 6px;
`;

const Contents = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
`;

const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Popup = ({ title, contents, double, closePopup, yesFunc }) => {
  return (
    <Background>
      <Container>
        <Title>{title}</Title>

        <Contents>{contents}</Contents>

        <BtnWrapper>
          {double && (
            <CancelBtn
              height={"48px"}
              width={"48%"}
              marginTop={0}
              text="아니오"
              onPress={closePopup}
            />
          )}

          <PurpleBtn
            height={"48px"}
            width={"48%"}
            marginTop={0}
            text="확인"
            onPress={yesFunc}
          />
        </BtnWrapper>
      </Container>
    </Background>
  );
};

export default Popup;
