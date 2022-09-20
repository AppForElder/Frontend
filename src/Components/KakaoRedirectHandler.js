import React from "react";
import { useSetRecoilState } from 'recoil';


const OAuth2RedirectHandler = (props) => {

    // 인가코드
    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        //await dispatch(userActions.kakaoLogin(code));
    }, []);

    return(
        '로딩중..'
    );
}

export default OAuth2RedirectHandler;