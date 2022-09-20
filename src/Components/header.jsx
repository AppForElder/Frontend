import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./header.css";

export default function header({ page }) {
    return (
		<div className='header'>
      <div className='home'>
        <Link to="/"><h1>홈</h1></Link>
      </div>
			<div className='loginButton'>

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
        
      </div>
		</div>
    );
}

const Button = styled.div`
  position: relative;
  top: 30%;
  transform: translate(0, -50%);

  width: 100px;
  padding: 10px 0px;

  border-radius: 6px;

  background-color: rgb(68, 149, 255);

  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: center;

  cursor: pointer;
`;