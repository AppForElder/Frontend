import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
//import { nameRecoilState } from "../../atoms/User";
import Header from '../../Components/header';
import { PageWrap } from '../../Components/styled';
import kakao from '../../img/kakao_login_medium_wide.png';
const kakao_img = <img src={kakao} width= '30%' height='30%'/>;


export default function LoginPage() {
    return (
        <PageWrap>
            <Header page="login" />
            <div>
                <p>카카오 소셜 로그인</p>
                <br/>
                <div className="KaKaoBtn">
                    {/*<a href={KAKAO_AUTH_URI}>{kakao_img}</a>*/}
                </div>
		    </div>
        </PageWrap>
    );
}
