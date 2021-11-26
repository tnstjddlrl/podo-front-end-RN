import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { colors } from "../../colors";
import { screenSize } from "../../constants";
import { fonts } from "../../fonts";
import { CancelBtn, PurpleBtn } from "../share";

const Background = styled.View`
  width: ${screenSize.width + "px"};
  height: ${screenSize.height + "px"};
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark};
  position: absolute;
`;

const Container = styled.View`
  width: 80%;
  height: 30%;
  padding: 24px;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 20px;
  font-family: ${fonts.bold};
  margin-bottom: 4px;
`;

const TextBox = styled.View``;

const Contents = styled.Text`
  font-size: 15px;
`;

const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const WalletPopup = ({ onPress, status, onPressCancel }) => {
  return (
    <Background>
      <Container>
        {status !== "cancel" && (
          <View>
            <Title>
              {status === "success" && "출금 신청 완료"}
              {(status === "failure" || status === "stackingNoData") &&
                "출금 신청 불가"}
              {status === "stacking" && "스테이킹 신청 완료"}
              {status === "unstackingSuccess" && "언스테이킹 신청 완료"}
              {(status === "unstackingFailure" ||
                status === "unstackingNoData") &&
                "언스테이킹 신청 불가"}
            </Title>
            <TextBox>
              <Contents>
                {status === "success" &&
                  `출금 신청이 정상적으로 완료되었습니다. 처리에는 다소간의 시간차가 발생할 수 있습니다.`}
                {status === "failure" &&
                  `출금 신청 할 수 없습니다. WBTC가 0.000000X 이상 일때만 출금 가능합니다. 적립된 리워드를 확인해주세요.`}
                {status === "stacking" &&
                  `스테이킹 신청이 정상적으로 완료되었습니다. 처리에는 다소간의 시간차가 발생할 수 있습니다.`}
                {status === "unstackingSuccess" &&
                  `언스테이킹 신청이 정상적으로 완료되었습니다. 처리에는 다소간의 시간차가 발생할 수 있습니다.`}
                {status === "unstackingFailure" &&
                  `언스테이킹 신청 할 수 없습니다. 스테이킹하신 코인은 XXXXX 입니다. 언스테이킹 하실 코인을 다시 확인해주세요.`}
                {status === "unstackingNoData" &&
                  `언스테이킹 신청 할 수 없습니다. 스테이킹 이력이 없습니다.`}
              </Contents>
            </TextBox>
          </View>
        )}
        {status === "cancel" && (
          <View>
            <Title>취소</Title>
            <TextBox>
              <Contents>
                지금 취소하시면 작성하신 정보는 저장되지 않습니다. 지금
                취소하시겠습니까?
              </Contents>
            </TextBox>
          </View>
        )}
        <BtnWrapper>
          {status !== "cancel" && (
            <PurpleBtn
              height={"48px"}
              width={"100%"}
              marginTop={0}
              text="확인"
              onPress={onPress}
            />
          )}
          {status === "cancel" && (
            <>
              <CancelBtn
                height={"48px"}
                width={"48%"}
                marginTop={0}
                text={"취소"}
                onPress={onPressCancel}
              />
              <PurpleBtn
                height={"48px"}
                width={"48%"}
                marginTop={0}
                text={"확인"}
                onPress={onPress}
              />
            </>
          )}
        </BtnWrapper>
      </Container>
    </Background>
  );
};

export default WalletPopup;
