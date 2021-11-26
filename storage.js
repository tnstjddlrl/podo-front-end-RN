import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    console.log("async storage Store Data Error");
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
    console.log("async storage Reading Data Error");
  }
};
