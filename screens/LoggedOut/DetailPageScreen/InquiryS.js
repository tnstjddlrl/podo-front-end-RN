import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";
import { colors } from "../../../colors";
import {
  StarFiiledSmallIcon,
  StarOutLineSmallIcon,
} from "../../../components/Icons";
import LayOut from "../../../components/LayOut";
import { CancelBtn, PurpleBtn } from "../../../components/share";
import { screenSize } from "../../../constants";
import { fonts } from "../../../fonts";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.Text`
  ${(props) =>
    props.title &&
    css`
      font-size: 14px;
      font-family: ${fonts.bold};
      margin-bottom: 8px;
    `}

  ${(props) =>
    props.payload &&
    css`
      font-size: 13px;
      color: ${colors.gray};
    `}
    ${(props) =>
    props.cancel &&
    css`
      font-size: 13px;
      color: ${colors.purple};
    `}
`;

const PopupBackground = styled.View`
  width: ${screenSize.width + "px"};
  height: ${screenSize.height + "px"};
  position: absolute;
  background-color: ${colors.dark};
  padding: 0 20px;
`;

const PopupContainer = styled.View`
  width: 100%;
  height: 190px;
  background-color: ${colors.white};
  margin-top: 50%;
  padding: 24px;
  border-radius: 20px;
  justify-content: space-between;
`;

const PopupText = styled.Text`
  font-size: 20px;
  font-family: ${fonts.bold};
`;

const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const InquiryS = ({ navigation }) => {
  const [isCancel, setIsCancel] = useState(false);
  const toggleCancel = () => setIsCancel(!isCancel);
  const [isConfirm, setIsConfirm] = useState(false);
  const onClickConfirm = () => {
    setIsCancel(false);
    setIsConfirm(true);
  };
  const finish = () => {
    setIsConfirm(false);
    navigation.goBack();
  };
  return (
    <LayOut backgroundColor={"#fff"} paddingTop={8}>
      <Container>
        <View>
          <Text title>Q. ????????? ?????? ????????????.</Text>
          <Text payload>?????? ????????? ????????????.</Text>
        </View>
        <TouchableOpacity onPress={() => toggleCancel()}>
          <Text cancel>????????????</Text>
        </TouchableOpacity>
      </Container>

      {isCancel && (
        <PopupBackground>
          <PopupContainer>
            <PopupText>?????????????????????????</PopupText>
            <BtnWrapper>
              <CancelBtn
                height={"48px"}
                width={"48%"}
                marginTop={0}
                text="?????????"
                onPress={() => toggleCancel()}
              />
              <PurpleBtn
                height={"48px"}
                width={"48%"}
                marginTop={0}
                text="??????"
                onPress={() => onClickConfirm()}
              />
            </BtnWrapper>
          </PopupContainer>
        </PopupBackground>
      )}
      {isConfirm && (
        <PopupBackground>
          <PopupContainer>
            <PopupText>?????????????????????.</PopupText>
            <BtnWrapper>
              <PurpleBtn
                height={"48px"}
                width={"100%"}
                marginTop={0}
                text="??????"
                onPress={() => finish()}
              />
            </BtnWrapper>
          </PopupContainer>
        </PopupBackground>
      )}
    </LayOut>
  );
};

export default InquiryS;
