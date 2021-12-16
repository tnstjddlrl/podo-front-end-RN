import React from "react";
import { Dimensions, View } from "react-native";
import styled from "styled-components";
import { colors } from "../../colors";
import { screenSize } from "../../constants";
import { fonts } from "../../fonts";
import { CancelBtn, PurpleBtn } from "../share";

const Background = styled.View`
  width: ${screenSize.width + "px"};
  height: ${screenSize.height + "px"};
  align-items: center;
  background-color: ${colors.dark};
  position: absolute;
`;

const Container = styled.View`
  width: 80%;
  padding: 24px;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  top: 20%;
`;

const Title = styled.Text`
  font-size: 20px;
  font-family: ${fonts.bold};
  margin-bottom: 4px;
`;

const TextBox = styled.View``;

const Contents = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
`;

const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SnsConnectPopup = ({ onPress, app, goHome }) => {
  return (
    <Background>
      <Container>
        <View>
          <Title>SNS 연동</Title>
          <TextBox>
            <Contents>
              PODO가 ‘{app}.com’을 (를) 사용하여 로그인하려고 합니다. 사용자에
              관한 정보를 앱 및 웹사이트가 공유하게 됩니다.
            </Contents>
          </TextBox>
        </View>
        <BtnWrapper>
          <CancelBtn
            height={"48px"}
            width={"48%"}
            marginTop={0}
            text="취소"
            onPress={onPress}
          />
          <PurpleBtn
            height={"48px"}
            width={"48%"}
            marginTop={0}
            text="확인"
            onPress={goHome}
          />
        </BtnWrapper>
      </Container>
    </Background>
  );
};

// export const LoginFalsePopup = () => {
//   return (
//     <Background>
//       <Container>
//         <TextBox>
//           <Contents>
//             PODO가 ‘facebook.com’을 (를) 사용하여 로그인하려고 합니다. 사용자에
//             관한 정보를 앱 및 웹사이트가 공유하게 됩니다.
//           </Contents>
//         </TextBox>
//         <BtnWrapper>
//           <PurpleBtn height={"48px"} width={"100%"} marginTop={0} text="확인" />
//         </BtnWrapper>
//       </Container>
//     </Background>
//   );
// };
