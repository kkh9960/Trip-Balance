export const CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
export const REDIRECT = process.env.REACT_APP_REDIRECT_URL;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT}&response_type=code`;
