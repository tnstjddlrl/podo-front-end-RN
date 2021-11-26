import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const screenSize = { width, height };

export const randomValue = (valueList) =>
  Math.floor(Math.random() * valueList.length);

export const randomName = () => {
  let result = "";
  for (let i = 0; i < 10; i++) {
    if (i > 5) {
      result += String.fromCharCode(Math.floor(Math.random() * (57 - 48) + 48));
    } else {
      result += String.fromCharCode(
        Math.floor(Math.random() * (122 - 97) + 97)
      );
    }
  }
  return result;
};
