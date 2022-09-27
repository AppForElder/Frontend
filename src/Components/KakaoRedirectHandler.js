import React, { useState, useEffect } from "react";
import { useSetRecoilState } from 'recoil';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const OAuth2RedirectHandler = (props) => {
    const navigate = useNavigate();
    // 인가코드 받는 부분
    let code = new URL(window.location.href).searchParams.get("code");

    {/*useEffect(async () => {
        //await dispatch(userActions.kakaoLogin(code));
        console.log({code});
        
    }, []);*/}

    useEffect(() => {
		getKakaoJwt();

        //atoms/user.js 불러오기 필요
	}, []);


    const getKakaoJwt = async () => {
        
		console.log(code);
        navigate ("../home" , { replace: true});
		// 우리 서버 API 
        
        {/*try{
            await axios({
                method: "GET",
                url: `http://3.36.116.200/auth/kakao/callback?code=${code}`,
            })
            .then((response) => {
                console.log("응답 확인", response);
            });
        } catch (e) {
            console.log(e);
        }*/}
        //서버에 인가코드 넘기기
        
        
        
        
		//const url = `/auth/kakao-login?code=${code}`;
		//const data = await customApiClient('get', url);

		// 기타 로직....
	};

    return(
        <p>로그인 중..</p>
    );
}

export default OAuth2RedirectHandler;