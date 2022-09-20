import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
//import { nameRecoilState } from "../../atoms/User";
import Header from '../../Components/header';
import { PageWrap } from '../../Components/styled';
import { KAKAO_AUTH_URL } from './KakaoOAuth';
import kakao from '../../img/kakao_login_medium_wide.png';
const kakao_img = <img src={kakao} width= '100%' height='100%'/>;


export default function LoginPage() {
    return (
        <PageWrap>
            <Header page="login" />
            <div>
                <p>카카오 소셜 로그인</p>
                <br/>
                <KaKaoBtn>
                    {<a href={KAKAO_AUTH_URL}>{kakao_img}</a>}
                </KaKaoBtn>
		    </div>
        </PageWrap>
    );
}


const KaKaoBtn = styled.div`
  //position: absolute;
  margin-top: 50px;
  align-items: center;
  display : flex;
  justify-content : center;
`;