import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import LayOut from "../../components/LayOut";

const TermsText = styled.Text`
  font-size: 14px;
`;

const TermsTextContent = `제 1 조           (목적)

이 약관은 주식회사(이하 “회사”)가 운영하는 사이버몰에서 제공하는 서비스와 이를 이용하는 회원의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.

제 2 조           (용어의 정의)

이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 그리고 여기에서 정의되지 않은 이 약관상의 용어의 의미는 일반적인 거래관행에 따릅니다.

1.      “사이버몰”이란 회사가 상품 또는 용역 등(일정한 시설을 이용하거나 용역을 제공받을 수 있는 권리를 포함하며, 이하 “상품 등”)을 회원에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 상품 등을 거래할 수 있도록 설정한 가상의 영업장(http://www.coupang.com 등 회사가 운영하는 웹사이트 및 모바일 웹, 앱 등을 모두 포함)을 의미합니다.

2.      “회원”이라 함은 사이버몰에 회원등록을 한 자로서, 계속적으로 사이버몰에서 제공하는 서비스를 이용할 수 있는 자를 말합니다.

3.      “아이디(ID)”라 함은 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하여 등록된 전자우편주소를 말합니다.

4.      “비밀번호(Password)”라 함은 회원의 동일성 확인과 회원의 권익 및 비밀보호를 위하여 회원 스스로가 설정하여 사이버몰에 등록한 문자와 숫자 등의 조합을 말합니다.`;

const TermsAndPolicy = ({ route }) => {
  const type = route.params.type;
  return (
    <LayOut backgroundColor={"#fff"}>
      <ScrollView>
        <TermsText>
          {type === "Terms" ? TermsTextContent : TermsTextContent}
        </TermsText>
      </ScrollView>
    </LayOut>
  );
};

export default TermsAndPolicy;
