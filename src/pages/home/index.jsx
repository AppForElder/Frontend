import React, { useEffect } from 'react'
import styled from 'styled-components';
import { PageWrap, TextMiddle } from '../../Components/styled';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
//import { nameRecoilState } from "../../atoms/User";
import Header from '../../Components/header';


export default function HomePage() {
    // 외부 모듈
    const navigate = useNavigate();

    // Global State usseRecoilValue사용해보기

    return (
        <PageWrap>
          <Header page="home" />
          <Test><Link style={{ textDecoration: 'none', color: 'black' }} to="/test">test로 이동</Link></Test>
          <IndexText>메인 화면(로그인 상태)</IndexText>
        </PageWrap>
    );
}


const IndexText = styled(TextMiddle)`
  font-size: 30px;
  font-weight: 600;
`;

const Test = styled.div`
  //position: absolute;
  margin-top: 100px;
  align-items: center;
  display : flex;
  justify-content : center;
`;