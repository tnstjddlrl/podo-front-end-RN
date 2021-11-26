import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    atom,
} from 'recoil';
// import { useRecoilState } from 'recoil';


//최초 진입 확인/////////////////////////////////////////////
export const AsyncgetIsFirst = async () => {
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

export const AsyncsetIsFirst = async (value) => {
    try {
        await AsyncStorage.setItem('@is_first', value)
    } catch (e) {
        console.log(e)
    }
}
/////////////////////////////////////////////////////////////

//아이디 및 로그인 여부 가져오기////////////////////////////////
export const AsyncgetUserId = async () => {
    try {
        const value = await AsyncStorage.getItem('@user_id')
        console.log(value)

        if (value !== null) {
            console.log('false')
            return 'guest'
        } else {
            console.log('true')
            return value
        }
    } catch (e) {
        console.log(e)
    }
}

export const AsyncsetUserId = async (value) => {
    try {
        await AsyncStorage.setItem('@user_id', value)
    } catch (e) {
        console.log(e)
    }
}

export const AtomUserId = atom({
    key: 'AtomUserId',
    default: AsyncgetUserId(),
});
/////////////////////////////////////////////////////////////////

//로그인 토큰 값 저장 및 불러오기/////////////////////////////////
export const AsyncgetUserToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@user_token')
        console.log(value)

        if (value !== null) {
            console.log('false')
            return 'guestToken'
        } else {
            console.log('true')
            return value
        }
    } catch (e) {
        console.log(e)
    }
}

export const AsyncsetUserToken = async (value) => {
    try {
        await AsyncStorage.setItem('@user_token', value)
    } catch (e) {
        console.log(e)
    }
}

export const AtomUserToken = atom({
    key: 'AtomUserToken',
    default: AsyncgetUserToken(),
});
///////////////////////////////////////////////////////////////////