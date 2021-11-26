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
  margin-bottom: 16px;
  justify-content: space-between;
`;
const UserInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 9px;
`;
const StarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Text = styled.Text`
  ${(props) =>
    props.theme &&
    css`
      font-size: 20px;
      font-family: ${fonts.bold};
    `}

  ${(props) =>
    props.date &&
    css`
      font-size: 11px;
      color: ${colors.gray};
      font-family: ${fonts.bold};
    `}
    ${(props) =>
    props.payload &&
    css`
      font-size: 14px;
    `}
    ${(props) =>
    props.cancel &&
    css`
      font-size: 13px;
      color: ${colors.purple};
    `}
    ${(props) =>
    props.username &&
    css`
      font-size: 14px;
      font-family: ${fonts.medium};
    `}
`;

const MiniStar = [
  { id: 1, fill: true },
  { id: 2, fill: true },
  { id: 3, fill: true },
  { id: 4, fill: false },
  { id: 5, fill: false },
];

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

const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Review = ({ navigation }) => {
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
        <UserInfoWrapper>
          <Avatar source={require("../../../assets/noProfile.png")} />
          <View>
            <Text username>홍*동</Text>
            <StarWrapper>
              {MiniStar.map((item) =>
                item.fill ? (
                  <StarFiiledSmallIcon key={item.id} />
                ) : (
                  <StarOutLineSmallIcon key={item.id} />
                )
              )}

              <Text date style={{ marginLeft: 4 }}>
                2021.07.28
              </Text>
            </StarWrapper>
          </View>
        </UserInfoWrapper>
        <TouchableOpacity onPress={() => toggleCancel()}>
          <Text cancel>삭제하기</Text>
        </TouchableOpacity>
      </Container>
      <Text payload>정말 이뻐요 !! 정말 이뻐요!!</Text>
      {isCancel && (
        <PopupBackground>
          <PopupContainer>
            <Text theme>삭제하시겠습니까?</Text>
            <BtnWrapper>
              <CancelBtn
                height={"48px"}
                width={"48%"}
                marginTop={0}
                text="아니오"
                onPress={() => toggleCancel()}
              />
              <PurpleBtn
                height={"48px"}
                width={"48%"}
                marginTop={0}
                text="확인"
                onPress={() => onClickConfirm()}
              />
            </BtnWrapper>
          </PopupContainer>
        </PopupBackground>
      )}
      {isConfirm && (
        <PopupBackground>
          <PopupContainer>
            <Text theme>삭제되었습니다.</Text>
            <BtnWrapper>
              <PurpleBtn
                height={"48px"}
                width={"100%"}
                marginTop={0}
                text="확인"
                onPress={() => finish()}
              />
            </BtnWrapper>
          </PopupContainer>
        </PopupBackground>
      )}
    </LayOut>
  );
};

export default Review;
