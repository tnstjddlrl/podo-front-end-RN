import React from "react";
import dummyData from "../../assets/dummyData";
import {
  AllIcon,
  AppliancesDigitalIcon,
  BeutyIcon,
  BookIcon,
  CarIcon,
  ChildBirthIcon,
  FashionIcon,
  FoodIcon,
  HealthIcon,
  HobbyIcon,
  HomeDecoIcon,
  KitchenIcon,
  LifeIcon,
  OfficeIcon,
  PetIcon,
  SportIcon,
  TravelIcon,
} from "../Icons";

export const MainBannerData = [
  {
    id: 1,
    url: { uri: 'https://softer104.cafe24.com/assets/main_banner_01.png' },
  },
];

export const IconData = [
  {
    id: 1,
    name: "AllIcon",
    svg: ` <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} {...props}>
    <Path
      data-name="\uC0AC\uAC01\uD615 54"
      fill="none"
      opacity={0.01}
      d="M0 0h28v28H0z"
    />
    <Path
      data-name="\uD328\uC2A4 90"
      d="M6 10h4V6H6zm6 12h4v-4h-4zm-2 0H6v-4h4zm-4-6h4v-4H6zm10 0h-4v-4h4zm2-10v4h4V6zm-2 4h-4V6h4zm2 6h4v-4h-4zm4 6h-4v-4h4z"
      fill="#1c232d"
      fillRule="evenodd"
    />
  </Svg>`,
  },
  {
    id: 2,
    name: "FashionIcon",
    svg: `<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    {...props}
  >
    <G data-name="\uADF8\uB8F9 54">
      <Path
        data-name="\uC0AC\uAC01\uD615 53"
        fill="none"
        opacity={0.01}
        d="M0 0h28v28H0z"
      />
      <Path
        data-name="\uD328\uC2A4 89"
        d="M7.09 14.56a75.2 75.2 0 01.072 7.91H5.18v-9.88l.9-3.4q.609 2.664 1.01 5.37zm-.292-7.553l2.838-1.9-.8 2.96 3.014 2.328-1.174 1.942v11.71h-2.36a93.54 93.54 0 000-9.62q-.574-3.744-1.516-7.42zm6.833.45l-1.151 1.9-2.27-1.751.906-3.381zM12.42 3.95l1.875 2.407L15.75 3.95h-3.33zm.474 7.051l3.883-6.426.833 4.015zM11.88 24.05V12.871l7.09-3.641-.9-4.318 3.079 2.059a16.252 16.252 0 00-1.357 5.766v.013c-.02.47-.05.99-.13 1.68a93.54 93.54 0 000 9.62h-7.78zm9.13-11.19a12.522 12.522 0 01.809-4.048l1 3.778v9.88h-2.014a74.69 74.69 0 01.074-7.86 16.754 16.754 0 00.131-1.75zm3.01 10.81h-3.176c.014.42.026.731.032.887v.743l-.6-.05H7.09v-.63c0-.005 0-.05.005-.13l.029-.82H3.98L4 12.35l1.58-5.98 5.43-3.62H17l5.42 3.62 1.6 6.14zm-5.31-11.16h-2.88v1h2.88z"
        fill="#1c232d"
        fillRule="evenodd"
      />
    </G>
  </Svg>`,
  },
  {
    id: 3,
    name: "ChildBirthIcon",
    svg: `<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    {...props}
  >
    <Path
      data-name="\uC0AC\uAC01\uD615 69"
      fill="none"
      opacity={0.01}
      d="M0 0h28v28H0z"
    />
    <Path
      data-name="\uD328\uC2A4 105"
      d="M22.273 11.973l1.277 1.277-3.11 3.11-.98-.98-1.77 3.73-5.08 5.08H8.73l-4.92-4.92v-3.88l5.25-5.2 3.555-1.655-.975-.975 3.11-3.11 1.266 1.266A3.194 3.194 0 0117.64 5a2.43 2.43 0 011.58.42A3.161 3.161 0 0120.72 4a2.77 2.77 0 012.41.35l.12.1.36.38A2.74 2.74 0 0124 7.28a3.158 3.158 0 01-1.34 1.5 2.409 2.409 0 01.34 1.58 3.225 3.225 0 01-.727 1.613zm-.848-.848a2 2 0 00.425-.9 1.667 1.667 0 00-.6-1.23l-.68-.68.92-.32a2.337 2.337 0 001.34-1.14 1.58 1.58 0 00-.22-1.32l-.15-.15a1.537 1.537 0 00-1.32-.22A2.333 2.333 0 0020 6.515l-.32.9-.68-.67a1.649 1.649 0 00-1.25-.6 2 2 0 00-.884.416zm-11.765.1l3.858-1.792 5.044 5.044-1.792 3.858-4.66 4.65H9.22l-4.21-4.21v-2.89zm10.78 3.43l-7.1-7.1 1.41-1.41 7.1 7.1zm-7.131-2.219l-.848.848 2.248 2.249.848-.848zm-3.028 3.031l.849-.848 2.249 2.247-.848.849zM9.218 16.53l-.848.848 2.248 2.249.848-.848z"
      fill="#1c232d"
      fillRule="evenodd"
    />
  </Svg>`,
  },
  {
    id: 4,
    name: "KitchenIcon",
    svg: `<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    {...props}
  >
    <Path
      data-name="\uC0AC\uAC01\uD615 64"
      fill="none"
      opacity={0.01}
      d="M0 0h28v28H0z"
    />
    <Path
      data-name="\uD328\uC2A4 100"
      d="M7.406 16.78L5.22 14.85V5.31h16.76V6.9h2.67v4.99l-2.67 1.674v1.286l-2.186 1.93h5.016l-.74 3.05-3.76 1.131v2.129H6.88v-2.138L3.13 19.83l-.74-3.05zm14.574-4.637V8.1h1.47v3.12zM13.6 21.89h5.51v-.86H13.6l-5.51-.025v.885zm4.42-5.15l.036.04H9.145l.035-.04-2.76-2.44V6.51h14.36v7.79zm1.88 3.09H7.3l-3.17-.95-.21-.9h19.36l-.21.9zM8.28 12.47l2.11 2.11.85-.84-1.76-1.76V8.14h-1.2z"
      fill="#1c232d"
      fillRule="evenodd"
    />
  </Svg>`,
  },
  {
    id: 5,
    name: "HomeDecoIcon",
    svg: ` <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    {...props}
  >
    <Path
      data-name="\uC0AC\uAC01\uD615 63"
      fill="none"
      opacity={0.01}
      d="M0 0h28v28H0z"
    />
    <Path
      data-name="\uD328\uC2A4 99"
      d="M10.46 7.29a2.73 2.73 0 111.813-.689l1.52 3.147 1.86-2.3a2.731 2.731 0 11.9.8l-2.352 2.913v2.1l2.35-1.63 1.811-.574a2.45 2.45 0 11.537 1.1l-1.9.6-1.19.84h3.35l-1.72 3.56a3.59 3.59 0 012.14 2.54 3.157 3.157 0 01-.7 2.56 3.239 3.239 0 01-1.88 1v.1h2.61v2.82H7.47v-2.82h2.45v-.13a3.239 3.239 0 01-1.88-1 3.157 3.157 0 01-.7-2.56 3.59 3.59 0 012.14-2.54l-1.72-3.54h4.592l-1.332-1.22-1.915-.585a2.42 2.42 0 11.525-1.505 2.387 2.387 0 01-.033.4l2.033.621L13 12.551V10.87l-1.782-3.686a2.75 2.75 0 01-.758.106zm0-4.26a.638.638 0 100-.03zM6.067 9.752a1.23 1.23 0 11.26 1.344 1.229 1.229 0 01-.26-1.344zM13.6 23.34v-.01h-2.53v-1.28h-.6a2.16 2.16 0 01-1.58-.63 2 2 0 01-.4-1.63c.15-.95 1.49-1.62 2-1.8l.64-.22-1.46-3h3.65v.01h3.95l-1.46 3 .64.22c.51.18 1.85.85 1.95 1.8a2 2 0 01-.4 1.63 2.155 2.155 0 01-1.6.63h-.6v1.28zM8.67 25h9.74v-.43H8.67zm7.789-19.732a1.531 1.531 0 11.326 1.67 1.53 1.53 0 01-.326-1.67zm4.3 4.042a1.245 1.245 0 100-.01z"
      fill="#1c232d"
      fillRule="evenodd"
    />
  </Svg>`,
  },
  {
    id: 6,
    name: "BeutyIcon",
    svg: `<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    {...props}
  >
    <Path
      data-name="\uC0AC\uAC01\uD615 66"
      fill="none"
      opacity={0.01}
      d="M0 0h28v28H0z"
    />
    <Path
      data-name="\uD328\uC2A4 102"
      d="M3.324 12.853a8.61 8.61 0 008.006 7.59v2.1H8.28v1.2h7.29v-1.2h-3.04v-2.1a8.534 8.534 0 004.791-1.884l.5 2.934h-.227v3.27h5.72v-3.27h-.466l1.836-10.77v-2.16h-4.848a8.61 8.61 0 00-16.508 4.293zm18.8 9.837h-3.33v.87h3.33zm.011-4.16l1.161-6.85h-5.923l1.167 6.85zm-.2 1.2l-.3 1.76h-2.59l-.3-1.76zm-4.748-9.25h6.3v-.72h-6.3zm1.331-1.92a7.41 7.41 0 10-1.425 8.606l-1.106-6.546V8.56zm-6.681 8.72a5.44 5.44 0 01-5.43-5.43h1.2a4.24 4.24 0 004.23 4.23z"
      fill="#1c232d"
      fillRule="evenodd"
    />
  </Svg>`,
  },
];

export const AlarmData = [
  {
    id: 1,
    date: "2021.07.24",
    title: "Event Title A",
    discription: "Discription",
    // status: "reward",
    statusTitle: "리워드",
    type: "marketing",
  },
  {
    id: 2,
    date: "2021.07.24",
    title: "Event Title B",
    discription: "Discription",
    // status: "apply",
    statusTitle: "신청중",
    type: "marketing",
  },
  {
    id: 3,
    date: "2021.07.24",
    title: "Event Title C",
    discription: "Discription",
    // status: "proceeding",
    statusTitle: "스테이킹처리중",
    type: "marketing",
  },
  {
    id: 4,
    date: "2021.07.24",
    title: "Event Title D",
    discription: "Discription",
    status: "reward",
    statusTitle: "리워드",
    type: "reward",
  },
  {
    id: 5,
    date: "2021.07.24",
    title: "Event Title E",
    discription: "Discription",
    status: "reward",
    statusTitle: "리워드",
    type: "reward",
  },
  {
    id: 6,
    date: "2021.07.24",
    title: "Event Title F",
    discription: "Discription",
    status: "reward",
    statusTitle: "리워드",
    type: "reward",
  },
  {
    id: 7,
    date: "2021.07.24",
    title: "Event Title G",
    discription: "Discription",
    status: "completed",
    statusTitle: "출금완료",
    type: "withdraw",
  },
  {
    id: 8,
    date: "2021.07.24",
    title: "Event Title H",
    discription: "Discription",
    status: "proceeding",
    statusTitle: "출금 처리중",
    type: "withdraw",
  },
  {
    id: 9,
    date: "2021.07.24",
    title: "Event Title I",
    discription: "Discription",
    status: "apply",
    statusTitle: "출금 신청",
    type: "withdraw",
  },
];

export const AlarmTabList = [
  { id: 1, name: "marketing", title: "마케팅 알림" },
  { id: 2, name: "reward", title: "리워드 적립" },
  { id: 3, name: "withdraw", title: "출금 내역" },
];

export const SearchTabList = [
  { id: 1, name: "recentSearches", title: "최근 검색어" },
  { id: 2, name: "seenProducts", title: "내가 본 상품" },
];

export const SearchResultTabList = [
  {
    id: 0,
    name: "all",
    title: "전체",
    icon: AllIcon,
    data: dummyData.all.slice(0, 10),
  },
  { id: 1, name: "fashion", title: "패션/잡화", icon: FashionIcon },
  { id: 2, name: "childBirth", title: "출산/유아동", icon: ChildBirthIcon },
  { id: 3, name: "kitchen", title: "주방용품", icon: KitchenIcon },
  { id: 4, name: "homeDeco", title: "홈인테리어", icon: HomeDecoIcon },
  { id: 5, name: "sport", title: "스포츠/레저", icon: SportIcon },
  { id: 6, name: "book", title: "도서/음반/DVD", icon: BookIcon },
  { id: 7, name: "health", title: "헬스/건강식품", icon: HealthIcon },
  { id: 8, name: "beauty", title: "뷰티", icon: BeutyIcon },
  { id: 9, name: "food", title: "식품", icon: FoodIcon },
  { id: 10, name: "life", title: "생활용품", icon: LifeIcon },
  {
    id: 11,
    name: "appliancesDigital",
    title: "가전디지털",
    icon: AppliancesDigitalIcon,
  },
];

// export const GridData = [
//   {
//     id: 1,
//     title: "여성 패션 셔츠",
//     freeShipping: true,
//     isFavorite: false,
//     url: require("../../assets/itemImage1.png"),
//     price: "100,000",
//     rewardPercent: "30%",
//     count: "xx,xxx",
//     isViewed: true,
//   },
//   {
//     id: 2,
//     title: "남성 패션 티셔츠",
//     freeShipping: true,
//     isFavorite: true,
//     url: require("../../assets/itemImage2.png"),
//     price: "100,000",
//     rewardPercent: "30%",
//     count: "xx,xxx",
//     isViewed: true,
//   },
//   {
//     id: 3,
//     title: "남성 패션 티셔츠",
//     freeShipping: true,
//     isFavorite: true,
//     url: require("../../assets/itemImage3.png"),
//     price: "100,000",
//     rewardPercent: "30%",
//     count: "xx,xxx",
//     isViewed: true,
//   },
//   {
//     id: 4,
//     title: "남성 패션 티셔츠",
//     freeShipping: false,
//     isFavorite: false,
//     url: require("../../assets/itemImage4.png"),
//     price: "100,000",
//     rewardPercent: "30%",
//     count: "xx,xxx",
//     isViewed: true,
//   },
//   {
//     id: 5,
//     title: "남성 패션 티셔츠",
//     freeShipping: true,
//     isFavorite: true,
//     url: require("../../assets/itemImage3.png"),
//     price: "100,000",
//     rewardPercent: "30%",
//     count: "xx,xxx",
//     isViewed: true,
//   },
//   {
//     id: 6,
//     title: "남성 패션 티셔츠",
//     freeShipping: false,
//     isFavorite: false,
//     url: require("../../assets/itemImage4.png"),
//     price: "100,000",
//     rewardPercent: "30%",
//     count: "xx,xxx",
//     isViewed: true,
//   },
// ];

export const PostData = {
  id: 1,
  brand: "와이즈블록",
  title: "포도",
  option: "",
  disCountPercent: "20%",
  prevPrice: "10,000",
  price: "8,000",
  reward: "100원",
  freeShipping: true,
  shippingInfo: "내일(화) 새벽 7시 전에 도착",
  isFavorite: false,
  url: require("../../assets/itemImage1.png"),
  price: "100,000",
  rewardPercent: "30%",
  count: "xx,xxx",
  colorSeries: "블랙계열",
  use: "패션",
  fullImg: { id: 1, url: require("../../assets/postDetailImg.png") },
  bannerImage: [
    {
      id: 1,
      url: require("../../assets/postBannerImg.png"),
    },
    {
      id: 2,
      url: require("../../assets/postBannerImg.png"),
    },
    {
      id: 3,
      url: require("../../assets/postBannerImg.png"),
    },
  ],
};

export const RecentSearchesData = [
  {
    id: 1,
    search: "최근 검색어1",
  },
  {
    id: 2,
    search: "최근 검색어2",
  },
  {
    id: 3,
    search: "최근 검색어3",
  },
  {
    id: 4,
    search: "최근 검색어4",
  },
  {
    id: 5,
    search: "최근 검색어5",
  },
];
