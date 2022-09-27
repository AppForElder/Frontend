import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function header({ page }) {
    return (
		<Header>
      <Home>
        <a href='/'style={{ textDecoration: 'none', color: 'rgb(255, 255, 255)' }}><h1>홈</h1></a>
      </Home>
			<LoginBtn>

        {page == "index" && (
          <Link to="/login">
            <Button>로그인</Button>
          </Link>
        )}

        {page == "login" && (
          <Link to="/">
            <Button>뒤로가기</Button>
          </Link>
        )}

        {page == "home" && (
          <Link to="/">
            <Button>로그아웃</Button>
          </Link>
        )}

        {page == "register" && (
          <Link to="/login">
            <Button>뒤로가기</Button>
          </Link>
        )}
        
      </LoginBtn>
		</Header>
    
    );
}

const Button = styled.div`
  float: right;
  position: relative;
  
  
  top: 30%;
  transform: translate(0, -50%);

  width: 100px;
  padding: 10px 0px;

  border-radius: 8px;

  background-color: rgb(68, 149, 255);

  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

const Home = styled.div`
  float: left;
  margin-left: 40px;
  
`;

const Header = styled.div`

  border: 1px solid black;
  background-color: rgb(43, 43, 43);
  h2{
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
  &:after{
    clear: both; display: block; content: '';
  };
  &:link{
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
  &:visited{
    color: rgb(255, 255, 255);
    text-decoration: none;
  };
  &:hover{
    color: rgb(255, 255, 255);
    text-decoration: underline;
  };
  &:active{
    color: rgb(255, 255, 255);
    text-decoration: none;
  };
`;

const LoginBtn = styled.div`
  display:flex;
  float: right;
  margin-right: 50px;
  margin-top:30px;
`;