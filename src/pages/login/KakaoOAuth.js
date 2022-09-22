const CLIENT_ID = "e289eaea04d1431421f1a03e9525d022";
const REDIRECT_URI =  "http://3.36.116.200/auth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
