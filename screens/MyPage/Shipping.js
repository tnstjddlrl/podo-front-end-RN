import React, { useEffect, useState } from "react";
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
import { useRecoilState } from "recoil";
import { AtomUserId, AtomUserToken } from "../../atom/atom";
import axios from "axios";

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
    label: "???????????????",
    value: "koreanPost",
  },
  {
    label: "????????????",
    value: "daehanLogis",
  },
  {
    label: "????????????",
    value: "lotteLogis",
  },
  {
    label: "????????????",
    value: "hanjinLogis",
  },
];

const shippingStatus = [
  { text: "??????", icon: ShippingFirstIcon },
  { text: "?????????", icon: ShippingSecondIcon },
  { text: "?????????", icon: ShippingThirdIcon },
  { text: "?????????", icon: ShippingFourthIcon },
  { text: "??????", icon: ShippingFifthIcon },
];

const sampleShippingData = {
  company: "????????? ??????",
  trackingNumber: "XXXXXXXXXXXXXXXX",
  status: "?????????",
  history: [
    {
      date: {
        date: "2021.06.04",
        time: "11:13:11",
      },
      currentLocation: "?????????????????????",
      status: "????????????",
    },
    {
      date: {
        date: "2021.06.04",
        time: "11:11:14",
      },
      currentLocation: "?????????????????????",
      status: "????????????",
    },
    {
      date: {
        date: "2021.06.04",
        time: "11:11:11",
      },
      currentLocation: "?????????????????????",
      status: "??????",
    },
  ],
};

const Shipping = () => {
  const [pickerValue, setPickerValue] = useState();
  const [shipData, setShipData] = useState();
  const onClickSetData = () => {
    setShipData(sampleShippingData);
    postSearchAxios()
  };

  const [atUserId, setAtUserId] = useRecoilState(AtomUserId)  //???????????????
  const [atUserToken, setAtUserToken] = useRecoilState(AtomUserToken) //?????? ??????

  const [postNumber, setPostNumber] = useState('')

  function postSearchAxios(params) {
    axios.get('https://softer104.cafe24.com/V1/Member/DeliveryTracking', {
      headers: {
        Authorization: `Bearer ${atUserToken}`
      },
      invoiceNumber: postNumber,
    }).then((res) => {
      console.log(res.data);
      var data = res.data.data

    }).catch((error) => {
      console.log(error);
    })
  }

  // useEffect(() => {
  //   postSearchAxios()
  // }, [])


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
          <ListItemText bold={item.status.includes("????????????")}>
            {item.status}
          </ListItemText>
        </ListStatusWrap>
      </ListItem>
    );
  };
  return (
    <LayOut backgroundColor={"#fff"}>
      <TopInfoText>?????? ????????? ????????????</TopInfoText>
      {!shipData && (
        <TopInfoText noData>?????? ????????? ??????????????? ????????????.</TopInfoText>
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
            label: "????????? ??????",
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
        <Input width={"75%"} placeholder={"????????? ?????? -?????? ??????"} onChangeText={setPostNumber} />
        <PurpleBtn text={"??????"} width={"66px"} onPress={onClickSetData} />
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
                <ListHeaderText>????????????</ListHeaderText>
                <ListHeaderText isLocation>????????????</ListHeaderText>
                <ListHeaderText>????????????</ListHeaderText>
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
