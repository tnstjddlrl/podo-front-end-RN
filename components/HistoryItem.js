import React from "react";
import styled, { css } from "styled-components/native";
import { colors } from "../colors";
import { fonts } from "../fonts";

const Container = styled.View`
  width: 100%;
  padding: 16px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
`;

const HistoryText = styled.Text`
  ${(p) =>
    p.date &&
    css`
      font-size: 12px;
      color: ${colors.gray};
      margin-bottom: 6px;
    `}
  ${(p) =>
    p.title &&
    css`
      font-family: ${fonts.bold};
      font-size: 16px;
      color: ${colors.darkBlack};
      margin-bottom: 4px;
    `}
  ${(p) =>
    p.discription &&
    css`
      font-size: 12px;
      color: ${colors.gray};
    `}
`;

const StatusBox = styled.View`
  height: 20px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  background-color: ${(p) =>
    (p.status === "reward" && colors.purple) ||
    (p.status === "apply" && colors.green) ||
    (p.status === "proceeding" && colors.red) ||
    (p.status === "completed" && colors.darkGray) ||
    "transparent"};
  position: absolute;
  top: 14px;
  right: 14px;
  border-radius: 3px;
`;

const StatusText = styled.Text`
  color: #fff;
  font-size: 10px;
`;

const HistoryItem = ({ date, title, discription, status, statusTitle }) => {
  return (
    <Container>
      <HistoryText date>{date}</HistoryText>
      <HistoryText title>{title}</HistoryText>
      <HistoryText discription>{discription}</HistoryText>
      {status !== "" && (
        <StatusBox status={status}>
          <StatusText>{statusTitle}</StatusText>
        </StatusBox>
      )}
    </Container>
  );
};

export default HistoryItem;
