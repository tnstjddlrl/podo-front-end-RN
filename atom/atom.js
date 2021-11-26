import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    atom,
} from 'recoil';

export const getIsFirst = async () => {
    try {
        const value = await AsyncStorage.getItem('@is_first')
        console.log(value)

        if (value !== null) {
            console.log('false')
            return false
        } else {
            console.log('true')
            return true
        }
    } catch (e) {
        console.log(e)
    }
}

export const setIsFirst = async (value) => {
    try {
        await AsyncStorage.setItem('@is_first', value)
    } catch (e) {
        console.log(e)
    }
}

export const AtomUserId = atom({
    key: 'AtomUserId', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});
