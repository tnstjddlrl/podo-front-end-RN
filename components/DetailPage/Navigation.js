import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../colors";
import { screenSize } from "../../constants";
import {
  FavoriteFilledIcon,
  FavoriteIcon,
  LeftGrayArrowIcon,
  ReloadIcon,
  RightGrayArrowIcon,
} from "../Icons";
import { PurpleBtn } from "../share";

const Container = styled.View`
  flex: 1;
  width: ${screenSize.width + "px"};
  position: absolute;
  bottom: 0;
  background-color: ${colors.white};
`;

const TopSection = styled.View`
  height: 56px;
  flex-direction: row;
  padding: 8px 20px 8px 20px;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.TouchableOpacity`
  margin-right: 18px;
`;

const BottomSection = styled.View`
  height: 48px;
  flex-direction: row;
  padding: 8px 20px 8px 20px;
  align-items: center;
  justify-content: space-between;
`;

const SomeView = styled.View`
  flex-direction: row;
`;

const ArrowWrapper = styled.TouchableOpacity`
  margin-right: 20px;
`;
const Navigation = ({ isFavorite, navigation }) => {
  const [isLike, setIsLike] = useState(isFavorite);
  const onClickLike = () => {
    setIsLike(!isLike);
  };
  const goBack = () => navigation.goBack();
  const reload = () => navigation.replace("DetailPage");
  return (
    <Container>
      <TopSection>
        <Wrapper onPress={() => onClickLike()}>
          {isLike ? <FavoriteFilledIcon /> : <FavoriteIcon />}
        </Wrapper>
        <PurpleBtn width={"70%"} height={"40px"} text="구매하기" />
      </TopSection>
      <BottomSection>
        <SomeView>
          <ArrowWrapper onPress={() => goBack()}>
            <LeftGrayArrowIcon />
          </ArrowWrapper>
        </SomeView>
        <TouchableOpacity onPress={() => reload()}>
          <ReloadIcon />
        </TouchableOpacity>
      </BottomSection>
    </Container>
  );
};

export default Navigation;
