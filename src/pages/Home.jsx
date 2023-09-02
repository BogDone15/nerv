import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/homeComponent/Main';
import { Loader } from '../components/Loader';
import { Nav } from '../components/Nav';
import { Socials } from '../components/Socials';
import { Road } from '../routes/Road';

const Wrapper = styled.div`
	height: calc(100vh - 4rem);
	max-width: 192rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	@media screen and (max-width: 1100px) {
		/* height: calc(100vh - 22rem); */
		/* margin-bottom: 7rem; */
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

const Aside = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	height: calc(100% - 1rem);
	transform: translateY(1rem);
	border-right: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const AsideText = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	height: calc(100% - 8.9rem);
	padding-bottom: 3rem;

	& > span {
		font-weight: 300;
		font-size: 1.2rem;
		color: #878787;
		color: ${props => props.theme.colorGray};
		transform: rotate(-180deg);
		writing-mode: vertical-lr;
	}
`;

const Top = styled.div`
	height: 5rem;
	width: 100%;
	margin-top: 3.6rem;
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	/* width: calc(100% - 4.5rem); */
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		width: 100%;
	}
`;

const ChooseBtn = styled.div`
	position: absolute;
	left: 5.5rem;
	top: 0;
	z-index: 5;
	width: 5rem;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	a {
		position: relative;
		z-index: 3;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100%;
		width: 1.6rem;
		transition: all 0.2s ease;
		& > span {
			font-weight: 600;
			font-size: 1.2rem;
			color: ${props => props.theme.colorMain};
			transform: rotate(-180deg) translateY(-4.4rem);
			writing-mode: vertical-lr;
			width: 100%;
		}
		@media screen and (max-width: 1100px) {
			& > span {
				font-size: 1.2rem;
				transform: rotate(-180deg) translate(-0.2rem, -4.1rem);
			}
		}
	}
	&:hover {
		a {
			opacity: 0.7;
		}
	}
	@media screen and (max-width: 1100px) {
		top: unset;
		bottom: 0;
		left: 0;
		height: 100%;
	}
	@media screen and (max-width: 567px) {
		height: 100%;
	}
`;

const CHooseBtnGroup = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Line = styled.svg`
	position: absolute;
	right: -2rem;
	bottom: 0;
	z-index: 2;
	pointer-events: none;
	width: 100%;
	height: calc(100% - 1rem);
	fill: none;
	@media screen and (max-width: 1100px) {
		height: 100%;
	}
`;

const Group = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	/* width: calc(100% - 5rem); */
	/* height: calc(100% - 9.6rem); */
	height: calc(100% - 4.6rem);
	/* margin-left: 5rem; */
	@media screen and (max-width: 1100px) {
		width: 100%;
		height: calc(100% - 9.2rem);
		margin-left: 0;
	}
	@media screen and (max-width: 850px) {
		height: 100%;
	}
	@media screen and (max-width: 567px) {
		/* height: calc(100% - 5.6rem); */
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
			{/* <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence> */}
			<Wrapper>
				<Block>
					{/* <Aside>
						<Top />
						<AsideText>
							<span>FIRST EXPANSION</span>
						</AsideText>
					</Aside>
					<ChooseBtn>
						<CHooseBtnGroup>
							<Link to='/character'>
								<span>CHOOSE YOUR APPEARANCE</span>
							</Link>
							<Line viewBox='0 0 20 990'>
								<path
									opacity='0.2'
									d='M0.920044 0.5V409.95L18.72 440.01V629.69L0.920044 655.67V989.5'
									stroke='#191919'
									strokeMiterlimit='10'
								/>
							</Line>
						</CHooseBtnGroup>
					</ChooseBtn> */}
					<Right>
						<Header />
						{/* <Nav /> */}
						<Group>
							<Road />
							{/* <Main /> */}
							{/* <Socials /> */}
						</Group>
					</Right>
				</Block>
				<Footer />
			</Wrapper>
		</>
	);
};
