import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Footer } from '../interface/Footer';
import { Header } from '../interface/Header';
import { Loader } from '../interface/Loader';
import { Road } from '../routes/Road';

const Wrapper = styled.div`
	height: calc(100vh - 4rem);
	max-width: 192rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	@media screen and (max-width: 1100px) {
		margin-bottom: 4rem;
		height: auto;
		overflow: hidden;
	}
`;

const Block = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		border-bottom: unset;
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		width: 100%;
	}
`;

const Group = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	height: calc(100% - 4.6rem);
	@media screen and (max-width: 1100px) {
		width: 100%;
		height: calc(100% - 9.2rem);
		margin-left: 0;
	}
	@media screen and (max-width: 850px) {
		height: 100%;
	}
`;

export const Home = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 3000);
	});

	return (
		<>
			<AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
			<Wrapper>
				<Block>
					<Right>
						<Header />
						<Group>
							<Road />
						</Group>
					</Right>
				</Block>
				<Footer />
			</Wrapper>
		</>
	);
};
