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

//아이디,비밀번호 및 로그인 여부 가져오기////////////////////////////////
export const AsyncgetUserId = async () => {
    try {
        const value = await AsyncStorage.getItem('@user_id')
        console.log(value)

        if (value == null) {
            console.log('false')
            return null
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

export const AsyncgetUserPWD = async () => {
    try {
        const value = await AsyncStorage.getItem('@user_PWD')
        console.log(value)

        if (value == null) {
            console.log('false')
            return ''
        } else {
            console.log('true')
            return value
        }
    } catch (e) {
        console.log(e)
    }
}

export const AsyncsetUserPWD = async (value) => {
    try {
        await AsyncStorage.setItem('@user_PWD', value)
    } catch (e) {
        console.log(e)
    }
}

export const AtomUserPWD = atom({
    key: 'AtomUserPWD',
    default: AsyncgetUserPWD(),
});
/////////////////////////////////////////////////////////////////

//로그인 토큰 값 저장 및 불러오기/////////////////////////////////
export const AsyncgetUserToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@user_token')
        console.log(value)

        if (value == null) {
            console.log('false')
            return ''
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

//카테고리 /////////////////////////////////////////////////////////
export const AtomCategoryArray = atom({
    key: 'AtomCategoryArray',
    default: [],
});

///////////////////////////////////////////////////////////////////

//유저 개인 정보 ////////////////////////////////////////////////////////
export const AtomUserLevel = atom({
    key: 'AtomUserLevel',
    default: '',
});

export const AtomUserPodo = atom({
    key: 'AtomUserPodo',
    default: 0,
}); //포도 개수

export const AtomUserPodo_kr = atom({
    key: 'AtomUserPodo_kr',
    default: 0,
});

export const AtomUserWbtc = atom({
    key: 'AtomUserWbtc',
    default: 0,
}); //wbtc 개수

export const AtomUserWbtc_kr = atom({
    key: 'AtomUserWbtc_kr',
    default: 0,
});




