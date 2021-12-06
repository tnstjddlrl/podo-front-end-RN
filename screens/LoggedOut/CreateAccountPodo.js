import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { colors } from "../../colors";
import LayOut from "../../components/LayOut";
import CheckRow from "../../components/Auth/CheckRow";
import { Alert, Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TextPopup } from "../../components/Auth/Terms";
import FormBox from "../../components/Auth/FormBox";
import { Input } from "../../components/share";


import axios from 'axios';

import { fonts } from "../../fonts";
import { ScrollView } from "react-native-gesture-handler";
import { Center } from "native-base";

const AgreeBox = styled.View`
  width: 100%;
  padding: 20px;
  border: 1px solid ${colors.border};
`;

const AgreeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Bio = styled.Text`
  font-size: 14px;
  color: ${colors.gray};
  text-decoration: underline;
`;

const Title = styled.Text`
  font-size: 13px;
  font-family: ${fonts.bold};
  margin-bottom: 4px;
`;

const FormBoxText = styled.Text`
  margin-top: ${(props) => (props.textTopMargin ? props.textTopMargin : "6px")};
  font-family: ${fonts.medium};
  font-size: 12px;
  color: ${colors.gray};
  margin-left: 4px;
`;


const CreateAccountPodo = ({ Navigation }) => {

  useEffect(() => {
    policyLoadAxios()
  }, [])

  const [policyText, setPolicyText] = useState('')
  const [termText, setTermText] = useState('')

  const [authClicked, setAuthClicked] = useState(false)

  function policyLoadAxios(params) {
    axios.post('https://softer104.cafe24.com/Open/Term/Call', {}).then((res) => {
      if (res.data.msg == 'success') {
        console.log(res.data[0]);
        setPolicyText(res.data[0].privacy_policy)
        setTermText(res.data[0].terms)
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data.error);
        Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }


  //회원가입 초안
  function PhoneAuthAxios(phone) {
    axios.post('https://softer104.cafe24.com/Open/Auth/PhoneAuth', {
      type: 'email',
      mb_email: 'test1@test.com',
      mb_phone: '01022272013',
      mb_password: 'asdf1234!',
      mb_password_check: 'asdf1234!',
      mb_agree_email: 'Y'
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === 'success') {
        console.log('회원가입 성공');
        Navigation.navigate('test');
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data.error);
        Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }

  //회원가입 초안
  function EmailCodeSendAxios() {
    axios.post('https://softer104.cafe24.com/Open/Join/AuthEmailSend', {
      to: mb_email,
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === 'success') {
        console.log('발송 성공!');
      }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.data.error);
        Alert.alert(error.response.data.error);
      } else if (error.request) {
        console.log(error.request);
      }
    })
  }

  const [mb_email, setMb_email] = useState('')
  const [mb_phone, setMb_phone] = useState('')

  const [isTerm, setIsTerm] = useState(false);
  const [isPolicy, setIsPolicy] = useState(false);
  const onClickTerm = () => {
    setIsTerm(true);
  };
  const onClickPolicy = () => {
    setIsPolicy(true);
  };
  const onClickConfirm = () => {
    if (isTerm) {
      setIsTerm(false);
    }
    if (isPolicy) {
      setIsPolicy(false);
    }
  };
  const [isSelected, setIsSelected] = useState({
    all: false,
    terms: false,
    policy: false,
    age: false,
    email: false,
  });
  const onClickSelect = (name) => {
    if (name === "all") {
      setIsSelected({
        all: true,
        terms: true,
        policy: true,
        age: true,
        email: true,
      });
    } else {
      setIsSelected({
        ...isSelected,
        ...{ all: false, [name]: !isSelected[name] },
      });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 10, flex: 1 }} >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <TextInputProp
          width={'70%'}
          title="이메일"
          placeholder="이메일"
          bottomtxt="이메일 주소를 입력해주세요."
          onChangeText={setMb_email}
          onPress={() => {
            console.log('클릭됨')
            setAuthClicked(true)
            EmailCodeSendAxios()
          }}
          onPresstxt={'인증하기'}
        />

        <View style={{ marginBottom: 20 }}></View>

        {authClicked &&
          <>
            <TextInputProp
              title={'인증번호'}
              placeholder={`인증번호를 입력해주세요`}
              width={"70%"}
              onChangeText={setMb_phone}
              isppp={true}
            // onPress={() => { console.log('클릭됨'); }}
            // onPresstxt={'인증'}
            />
            <View style={{ marginBottom: 20 }}></View>
          </>
        }

        {/* FormBox 를 나눈것! */}
        <TextInputProp
          width={'100%'}
          title={'휴대전화 번호'}
          placeholder={`"-" 없이 숫자만 입력해주세요.`}
          bottomtxt={'휴대전화 번호를 입력해주세요.'}
          onChangeText={setMb_phone} />

        {/* 간격 조정 */}
        <View style={{ marginBottom: 20 }}></View>

        {/* FormBox 를 나눈것! */}
        <TextInputProp
          width={'100%'}
          title={'비밀번호'}
          placeholder={'비밀번호를 입력해주세요.'} />

        {/* 간격 조정 */}
        <View style={{ marginBottom: 20 }}></View>

        {/* FormBox 를 나눈것! */}
        <TextInputProp
          width={'100%'}
          title={'비밀번호 확인'}
          placeholder={'비밀번호를 확인해주세요.'} />

        {/* 간격 조정 */}
        <View style={{ marginBottom: 20 }}></View>

        <AgreeBox>
          <CheckRow
            name="all"
            text="PODO 가입 전체 약관에 동의"
            bold={true}
            onClickSelect={onClickSelect}
            isSelected={isSelected}
          />
          <AgreeWrapper>
            <CheckRow
              name="terms"
              text="서비스 이용약관 (필수)"
              onClickSelect={onClickSelect}
              isSelected={isSelected}
            />
            <TouchableOpacity onPress={() => onClickTerm()}>
              <Bio>내용</Bio>
            </TouchableOpacity>
          </AgreeWrapper>
          <AgreeWrapper>
            <CheckRow
              name="policy"
              text="개인정보 취급방침 (필수)"
              onClickSelect={onClickSelect}
              isSelected={isSelected}
            />
            <TouchableOpacity onPress={() => onClickPolicy()}>
              <Bio>내용</Bio>
            </TouchableOpacity>
          </AgreeWrapper>
          <CheckRow
            name="age"
            text="만 14세 이상 여부 확인 (필수)"
            onClickSelect={onClickSelect}
            isSelected={isSelected}
          />
          <CheckRow
            name="email"
            text="이메일 SMS수신 (선택)"
            onClickSelect={onClickSelect}
            isSelected={isSelected}
          />
        </AgreeBox>
        {isTerm && <TextPopup onPress={onClickConfirm} txt={termText} />}
        {isPolicy && <TextPopup onPress={onClickConfirm} txt={policyText} />}

      </ScrollView>
      <View style={{ width: '100%', height: 52, borderRadius: 12, backgroundColor: '#553AED', marginTop: 10, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: 'white', fontFamily: fonts.bold, fontSize: 16 }}>PODO 신규 가입하기</Text>
      </View>
    </SafeAreaView>
  );
};


function TextInputProp({ title, placeholder, bottomtxt, onChangeText, width, onPress, onPresstxt, isppp }) {

  const [isFocus, setIsFocus] = useState(false)

  return (
    <View style={{ width: '100%' }}>
      {title && <Title>{title}</Title>}
      <View style={{ width: '100%', height: 48, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: (onPress || isppp) ? width : '100%', height: 48, borderRadius: 10, borderWidth: 1, borderColor: isFocus ? '#553AED' : '#DAE3EF', }}>
          <TextInput style={{ flex: 1, marginLeft: 13 }} placeholder={`${placeholder}`} onChangeText={onChangeText} onFocus={() => { setIsFocus(true) }} onBlur={() => { setIsFocus(false) }} />
        </View>

        {onPress &&
          <TouchableOpacity onPress={onPress} style={{ flex: 1, marginRight: 10 }}>
            <View style={{ borderRadius: 12, backgroundColor: '#553AED', flex: 1, height: 48, marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: 'white', fontSize: 14, fontFamily: fonts.bold }}>{onPresstxt}</Text>
            </View>
          </TouchableOpacity>
        }
      </View>
      {bottomtxt && <FormBoxText>{bottomtxt}</FormBoxText>}
    </View>
  )
}

export default CreateAccountPodo;
