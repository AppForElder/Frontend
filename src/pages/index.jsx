import React, { useEffect } from 'react'
import styled from 'styled-components';
import { PageWrap, TextMiddle } from '../Components/styled';
import Header from '../Components/header';
import { Link } from 'react-router-dom';


export default function IndexPage() {
  return (
    <PageWrap>
      <Header page="index" />
      <Test><Link style={{ textDecoration: 'none', color: 'black' }} to="/test">test로 이동</Link></Test>
      <IndexText>메인 화면(비로그인)</IndexText>
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
