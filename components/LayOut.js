import React from "react";
import styled, { css } from "styled-components/native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { screenSize } from "../constants";

const Container = styled.View`
  flex: 1;
  background-color: ${(p) =>
    p.backgroundColor ? p.backgroundColor : "#fafbfc"};
  ${(p) =>
    p.horizontalZero
      ? css`
          padding: 0;
        `
      : css`
          padding: 0 24px;
        `}
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop + "px" : 0)};
  ${(p) =>
    p.heightFull &&
    css`
      height: ${screenSize.height + "px"};
    `}
`;

const LayOut = ({
  paddingTop,
  children,
  horizontalZero,
  backgroundColor,
  heightFull,
}) => {
  return (
    <Container
      paddingTop={paddingTop}
      horizontalZero={horizontalZero}
      backgroundColor={backgroundColor}
      heightFull={heightFull}
    >
      {children}
    </Container>
  );
};

export default LayOut;
