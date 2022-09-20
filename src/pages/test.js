import React from 'react';
import { PageWrap } from '../Components/styled';
import styled from 'styled-components';
import Header from '../Components/header';

export default function Test() {
	return (
		<PageWrap>
			<Header page="login" />
			<h3>테스트 페이지</h3>
		</PageWrap>
	);
};
