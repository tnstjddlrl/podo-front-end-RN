// import { fontWeights } from "./Components/Styles/constants";

const fontWeights = {
  thin: "SpoqaHanSansNeo-Thin",
  light: "SpoqaHanSansNeo-Light",
  regular: "SpoqaHanSansNeo-Regular",
  medium: "SpoqaHanSansNeo-Medium",
  bold: "SpoqaHanSansNeo-Bold",
};

const localFonts = {
  [fontWeights.thin]: require("./SpoqaHanSansNeo-Thin.otf"),
  [fontWeights.light]: require("./SpoqaHanSansNeo-Light.otf"),
  [fontWeights.regular]: require("./SpoqaHanSansNeo-Regular.otf"),
  [fontWeights.medium]: require("./SpoqaHanSansNeo-Medium.otf"),
  [fontWeights.bold]: require("./SpoqaHanSansNeo-Bold.otf"),
};
export default localFonts;
