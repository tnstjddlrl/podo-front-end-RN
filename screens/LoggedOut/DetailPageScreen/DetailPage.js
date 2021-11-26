import React, { useState } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { colors } from "../../../colors";
import Infomation from "../../../components/DetailPage/Infomation";
import Navigation from "../../../components/DetailPage/Navigation";
import ReviewBox from "../../../components/DetailPage/ReviewBox";
import SimilarProducts from "../../../components/DetailPage/SimilarProducts";
import Summary from "../../../components/DetailPage/Summary";
import Carousel from "../../../components/Home/Carousel";
import { PostData } from "../../../components/Home/SampleData";
import { screenSize } from "../../../constants";
import Popup from "../../../components/Popup";

const DetailPage = ({ navigation, route }) => {
  //   const {
  //     params: { id },
  //   } = route;
  const [isPopup, setIsPopup] = useState(false);
  const onClickInquiry = () => {
    return setIsPopup(true);
  };
  const closePopup = () => {
    return setIsPopup(false);
  };
  const postBannerData = PostData.bannerImage;
  const [isSelected, setIsSelected] = useState({
    inquiry: false,
    review: true,
  });
  const onClickSelect = (name) => {
    if (isSelected[name] !== true) {
      setIsSelected({
        ...{ [name]: !isSelected[name] },
      });
    }
  };

  return (
    <SafeAreaView style={{ paddingTop: "9%", backgroundColor: colors.white }}>
      <ScrollView style={{ backgroundColor: colors.darkBackground }}>
        <Carousel
          gap={0}
          data={postBannerData}
          pageWidth={screenSize.width}
          detail={true}
          rewardPercent={PostData.rewardPercent}
        />
        <Summary {...PostData} />
        <Infomation {...PostData} />
        <ReviewBox
          {...PostData}
          onClickSelect={onClickSelect}
          isSelected={isSelected}
          navigation={navigation}
          onClickInquiry={onClickInquiry}
        />
        <SimilarProducts navigation={navigation} />
      </ScrollView>
      <Navigation {...PostData} navigation={navigation} />
      {isPopup && (
        <Popup
          title="상품관련 문의가 접수되었습니다."
          contents="문의하신 내용은 상품평 > 이 상품의 문의 내역보기에서 확인하실 수 있습니다."
          double={true}
          closePopup={closePopup}
          yesFunc={closePopup}
        />
      )}
    </SafeAreaView>
  );
};

export default DetailPage;
