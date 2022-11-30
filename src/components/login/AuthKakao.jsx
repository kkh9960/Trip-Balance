const CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const REDIRECT = process.env.REDIRECT_URL;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=e56432cb13a86e4426fd84894a269152&redirect_uri=http://localhost:3000/tb/ouath/kakao&response_type=code`;
