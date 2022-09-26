import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
//import { nameRecoilState } from "../../atoms/User";
import Header from '../../Components/header';
import { PageWrap } from '../../Components/styled';
import { KAKAO_AUTH_URL } from './KakaoOAuth';
import '../../Components/login.css';
import kakao from '../../img/kakao_login_medium_wide.png';
const kakao_img = <img src={kakao} width= '100%' height='100%' style={{boxShadow: '-5px -5px 10px #fff, 5px 5px 8px #babebc', borderRadius: '6px'}} />;


export default function LoginPage(props) {
    const [ID, setId] = useState("");
    const [Password, setPassword] = useState("");

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    };
    const onPasswordHanlder = (e) => {
        setPassword(e.currentTarget.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(ID, Password);
        //////////////////////////////////////////
        //POST로 로그인정보 넘기기 필요/////////////
    };


    return (
        <PageWrap>
            <Header page="login" />

            <CardLayout_container>
                <br/>
                <p style={{  alignItems: 'center', display: 'flex', marginLeft:30 }}>간편 로그인</p>
                <KaKaoBtn>
                    {<a href={KAKAO_AUTH_URL}>{kakao_img}</a>}
                </KaKaoBtn>
                <Line>
                    OR
                </Line>
                <p style={{  alignItems: 'center', display: 'flex', marginLeft:30 }}>ID 로그인</p>

                <div className="login-box">
                    <form onSubmit={onSubmitHandler}>
                    <div className="user-box">
                        <input type="text" name="" required="1"  value={ID} onChange={onIdHandler} />
                        <label>아이디</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="1"  value={Password} onChange={onPasswordHanlder} />
                        <label>비밀번호</label>
                        
                    </div>
                    <LoginBtn>
                        <button type="submit" >로그인</button>
                        {/*//////////////////로그인 후 Link구현 필요////////////////////*/}
                    </LoginBtn>
                    <FindPassword>
                        <a style={{  color: '#739fff', float: 'left' }} href=''>회원가입</a>
                        <a style={{  color: '#739fff', float: 'right' }} href=''>비밀번호를 잊으셨나요?</a>
                        {/*///////////////////회원가입, pw찾기 페이지 필요///////////////////*/}
                    </FindPassword>
                    </form>
                </div>

            </CardLayout_container>
        </PageWrap>
    );
}


const KaKaoBtn = styled.div`
  //position: absolute;
  //margin-top: 10px;
  align-items: center;
  display : flex;
  justify-content : center;
`;

const CardLayout_container = styled.div`
    position: relative;
    margin: 100px auto;
    padding: 20px 20px 10px 20px;
    width: 350px;
    min-height: 502px;
    background-color: #f3f3f3;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    
`;

const Line = styled.div`
    display:flex;
	flex-basis:100%;
	align-items:center;
	color:#c5cbd0;
	font-size:12px;
	margin:15px 0px 30px;

    &:before{
        content:"";
        flex-grow:1;
        margin:0px 16px;
        background: #c5cbd0;
        height:1px;
        font-size:0px;
        line-height: 0px;
    }
    &:after{
        content:"";
        flex-grow:1;
        margin:0px 16px;
        background:#c5cbd0;
        height:1px;
        font-size:0px;
        line-height: 0px;
    }
`;

const LoginBtn = styled.div`
    button{
        border: none;
        outline: none; 
        background: rgb(68, 149, 255);
        cursor: pointer;
        font-size: 15px;
        font-weight: bold;
        color: white;
        height: 45px;
        width: 100%;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 15px 45px;
        background: rgb(68, 149, 255);
        box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
        border-radius: 8px;
        cursor: pointer;
        align-items: center;
        display : flex;
        justify-content : center;
    };
    
`;

const FindPassword = styled.div`
    margin-top: 50px;
    
`;
