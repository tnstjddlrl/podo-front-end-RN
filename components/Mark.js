import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { fonts } from "../fonts";

const RewardMarkContainer = styled.View`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.orange};
  border-radius: 13px;
`;
const RewardMarkTitle = styled.Text`
  font-size: 11px;
  font-family: ${fonts.bold};
  color: ${colors.white};
`;

export const RewardMark = ({ rewardPercent }) => {
  return (
    <RewardMarkContainer>
      <RewardMarkTitle>리워드 {rewardPercent}</RewardMarkTitle>
    </RewardMarkContainer>
  );
};

const OptionMarkContainer = styled.View`
  width: 100px;
  height: 26px;
  padding: 5px 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.border};
  border-radius: 2px;
  flex-direction: row;
`;

const OptionMarkText = styled.Text`
  font-size: 11px;
  color: ${colors.caption};
`;

export const OptionMark = ({ option }) => {
  return (
    <OptionMarkContainer>
      <OptionMarkText>{option ? option : "옵션(있을경우)"}</OptionMarkText>
    </OptionMarkContainer>
  );
};

const PurpleMarkContainer = styled.View`
  width: 50px;
  height: 20px;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: ${colors.purple};
`;
const PurpleMarkText = styled.Text`
  font-size: 9px;
  color: ${colors.white};
`;

export const PurpleMark = () => {
  return (
    <PurpleMarkContainer>
      <PurpleMarkText>무료배송</PurpleMarkText>
    </PurpleMarkContainer>
  );
};
