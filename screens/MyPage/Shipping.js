import React, { useState } from "react";
import styled, { css } from "styled-components/native";
import { colors } from "../../colors";
import LayOut from "../../components/LayOut";
import { Input, PurpleBtn } from "../../components/share";
import { screenSize } from "../../constants";
import { fonts } from "../../fonts";
import {
  CancelIcon,
  ShippingFifthIcon,
  ShippingFirstIcon,
  ShippingFourthIcon,
  ShippingSecondIcon,
  ShippingThirdIcon,
} from "../../components/Icons";
import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const TopInfoText = styled.Text`
  font-size: 13px;
  color: ${colors.darkBlack};
  margin-top: 8px;
  ${(p) =>
    p.noData &&
    css`
      color: ${colors.gray};
      margin-top: 6px;
    `}
  ${(p) =>
    p.number &&
    css`
      color: ${colors.darkBlack};
      font-size: 14px;
      margin-top: 0;
    `}
`;

const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 11px;
`;

const CancelBtn = styled.TouchableOpacity``;

const DropdownWrap = styled.View`
  width: 100%;
  height: 48px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  position: relative;
  z-index: 10;
  justify-content: center;
`;

const InputBtnWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ShippingStatusBox = styled.View`
  width: ${screenSize.width + "px"};
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: #dae3efbf;
  left: -24px;
  margin-top: 20px;
`;

const ShippingIcon = styled.View`
  align-items: center;
`;

const IconBg = styled.View`
  width: 44px;
  aspect-ratio: 1;
  border-radius: 12px;
  background: ${(p) => (p.current ? colors.purple : colors.border)};
  justify-content: center;
  align-items: center;
`;

const ShippingIconText = styled.Text`
  font-size: 11px;
  color: ${colors.gray};
  margin-top: 6px;
`;

const StatusList = styled.FlatList`
  width: ${screenSize.width + "px"};
  left: -24px;
`;

const ListHeader = styled.View`
  flex-direction: row;
  padding: 8px 24px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colors.border};
  justify-content: space-between;
`;

const ListHeaderText = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
  width: ${(p) => (p.isLocation ? "40%" : "25%")};
`;

const ListItem = styled.View`
  width: 100%;
  padding: 8px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${colors.border};
`;

const ListItemText = styled.Text`
  font-size: 12px;
  font-family: ${(p) => (p.bold ? fonts.bold : fonts.medium)};
`;

const ListDateWrap = styled.View`
  width: 25%;
  justify-content: center;
`;

const ListLocationWrap = styled.View`
  width: 40%;
  justify-content: center;
`;

const ListStatusWrap = styled.View`
  width: 25%;
  justify-content: center;
`;

const companyListSample = [
  {
    label: "우체국택배",
    value: "koreanPost",
  },
  {
    label: "대한통운",
    value: "daehanLogis",
  },
  {
    label: "롯데택배",
    value: "lotteLogis",
  },
  {
    label: "한진택배",
    value: "hanjinLogis",
  },
];

const shippingStatus = [
  { text: "인수", icon: ShippingFirstIcon },
  { text: "이동중", icon: ShippingSecondIcon },
  { text: "배달지", icon: ShippingThirdIcon },
  { text: "배달중", icon: ShippingFourthIcon },
  { text: "완료", icon: ShippingFifthIcon },
];

const sampleShippingData = {
  company: "우체국 택배",
  trackingNumber: "XXXXXXXXXXXXXXXX",
  status: "배달지",
  history: [
    {
      date: {
        date: "2021.06.04",
        time: "11:13:11",
      },
      currentLocation: "서울강서우체국",
      status: "배달완료",
    },
    {
      date: {
        date: "2021.06.04",
        time: "11:11:14",
      },
      currentLocation: "서울강서우체국",
      status: "배달준비",
    },
    {
      date: {
        date: "2021.06.04",
        time: "11:11:11",
      },
      currentLocation: "서울강서우체국",
      status: "도착",
    },
  ],
};

const Shipping = () => {
  const [pickerValue, setPickerValue] = useState();
  const [shipData, setShipData] = useState();
  const onClickSetData = () => {
    setShipData(sampleShippingData);
  };

  const onClickRemoveData = () => {
    setShipData();
  };

  const renderItem = ({ item }) => {
    return (
      <ListItem>
        <ListDateWrap>
          <ListItemText>{item.date.date}</ListItemText>
          <ListItemText>{item.date.time}</ListItemText>
        </ListDateWrap>
        <ListLocationWrap>
          <ListItemText>{item.currentLocation}</ListItemText>
        </ListLocationWrap>
        <ListStatusWrap>
          <ListItemText bold={item.status.includes("배달완료")}>
            {item.status}
          </ListItemText>
        </ListStatusWrap>
      </ListItem>
    );
  };
  return (
    <LayOut backgroundColor={"#fff"}>
      <TopInfoText>최근 조회한 송장번호</TopInfoText>
      {!shipData && (
        <TopInfoText noData>최근 조회한 송장번호가 없습니다.</TopInfoText>
      )}
      {shipData && (
        <TextWrapper>
          <TopInfoText number>
            {sampleShippingData.company} {sampleShippingData.trackingNumber}
          </TopInfoText>
          <CancelBtn onPress={onClickRemoveData}>
            <CancelIcon />
          </CancelBtn>
        </TextWrapper>
      )}
      <DropdownWrap>
        <RNPickerSelect
          placeholder={{
            label: "택배사 선택",
            value: null,
            color: colors.gray,
          }}
          value={pickerValue}
          onValueChange={(value) => setPickerValue(value)}
          items={companyListSample}
          style={{
            ...pickerSelectStyles,
          }}
        />
      </DropdownWrap>
      <InputBtnWrap>
        <Input width={"75%"} placeholder={"운송장 번호 -없이 입력"} />
        <PurpleBtn text={"검색"} width={"66px"} onPress={onClickSetData} />
      </InputBtnWrap>
      {shipData && (
        <>
          <ShippingStatusBox>
            {shippingStatus.map((item, index) => {
              return (
                <ShippingIcon key={index}>
                  <IconBg current={item.text === sampleShippingData.status}>
                    <item.icon
                      colored={item.text === sampleShippingData.status}
                    />
                  </IconBg>
                  <ShippingIconText>{item.text}</ShippingIconText>
                </ShippingIcon>
              );
            })}
          </ShippingStatusBox>
          <StatusList
            ListHeaderComponent={
              <ListHeader>
                <ListHeaderText>배송시간</ListHeaderText>
                <ListHeaderText isLocation>현재위치</ListHeaderText>
                <ListHeaderText>배송상태</ListHeaderText>
              </ListHeader>
            }
            data={sampleShippingData.history}
            renderItem={renderItem}
            keyExtractor={(item) => "" + item.status}
          />
        </>
      )}
    </LayOut>
  );
};

export default Shipping;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: colors.gray,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: colors.gray,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
