import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { screenSize } from "../../constants";
import { RewardMark } from "../Mark";

const Container = styled.View`
  height: ${(props) => (props.detail ? "260px" : "160px")};
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.View`
  margin: 0px 8px;
  background-color: ${(props) => (props.focused ? "#553AED" : "#A4A5A7")};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 12px;
`;

const PageItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const DataImage = styled.Image`
  width: ${screenSize.width + "px"};
  height: 100%;
`;

const Carousel = ({ data, pageWidth, gap, detail, rewardPercent }) => {
  const [page, setPage] = useState(0);

  const Page = ({ item }) => {
    return (
      <PageItem>
        <DataImage source={item.url} resizeMode="cover" />
      </PageItem>
    );
  };

  const renderItem = ({ item }) => {
    return <Page item={item} style={{ width: pageWidth }} />;
  };

  const onScroll = (e) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap)
    );
    setPage(newPage);
  };

  return (
    <Container detail={detail}>
      <FlatList
        data={data}
        decelerationRate="normal"
        horizontal
        keyExtractor={(item) => `page__${item.id}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorWrapper>
        {Array.from({ length: data.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
      {rewardPercent && <RewardMark rewardPercent={rewardPercent} />}
    </Container>
  );
};

export default Carousel;
