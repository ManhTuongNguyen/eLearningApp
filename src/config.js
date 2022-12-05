export const BASE_URL = 'https://mtuongpk.pythonanywhere.com/';


export const api = {
    login: `${BASE_URL}api/login`,
    signUp: `${BASE_URL}api/sign-up`,
    updatePassword: `${BASE_URL}api/update-password`,
    forgetPassword: `${BASE_URL}api/forget-password`,
    getRandomWord: `${BASE_URL}api/random-word`,
    getWordDefinition: `${BASE_URL}api/word-definition`,
    getTheory: `${BASE_URL}api/get-theory`,
    getListQuestion: `${BASE_URL}api/get-set-question`,
    getListSetQuestion: `${BASE_URL}api/get-list-set-question`,
    updateScore: `${BASE_URL}api/update-score`,
}