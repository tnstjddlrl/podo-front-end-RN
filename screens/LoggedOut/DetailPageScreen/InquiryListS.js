import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";
import { colors } from "../../../colors";
import { RightArrowIcon } from "../../../components/Icons";
import LayOut from "../../../components/LayOut";
import { PurpleLineBtn } from "../../../components/share";
import { fonts } from "../../../fonts";

const NoticeWrapper = styled.View`
  width: 100%;
  height: 32px;
  background-color: ${colors.paleBlue};
  padding: 8px 12px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const Text = styled.Text`
  font-size: 13px;
  color: ${(props) => (props.click ? colors.purple : colors.darkBlack)};
  flex-direction: row;
  align-items: center;
`;

const InquiryBox = styled.View`
  width: 100%;
  padding: 16px 12px 16px 16px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const InfoWrapper = styled.View``;

const InfoText = styled.Text`
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
`;

const NContainer = styled.View`
  margin-top: 60%;
  align-items: center;
`;

const NText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
`;

const InquiryListS = ({ navigation }) => {
  const [noData, setNoData] = useState(false);
  const goBack = () => navigation.goBack();
  const goInquiryS = () => navigation.navigate("InquiryS");
  return (
    <LayOut backgroundColor={"#fff"}>
      {noData ? (
        <NContainer>
          <NText>아직 문의가 없습니다.</NText>
          <PurpleLineBtn
            text="문의하기"
            marginTop={"16px"}
            height={"44px"}
            width={"50%"}
            onPress={goBack}
          />
        </NContainer>
      ) : (
        <>
          <NoticeWrapper>
            <Text>
              문의하기 (내 상품문의
              <Text click>1개</Text>)
            </Text>
          </NoticeWrapper>
          <InquiryBox>
            <InfoWrapper>
              <InfoText title>Q. 사이즈 문의 드립니다.</InfoText>
              <InfoText payload>아직 답변이 없습니다.</InfoText>
            </InfoWrapper>
            <TouchableOpacity onPress={() => goInquiryS()}>
              <RightArrowIcon color={colors.gray} />
            </TouchableOpacity>
          </InquiryBox>
        </>
      )}
    </LayOut>
  );
};

export default InquiryListS;
