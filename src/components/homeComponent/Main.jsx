import React, { useEffect, useState } from 'react';
import bgImg from '../../assets/main-bg.png';
import bgImgMob from '../../assets/main-bg-mob.png';
import charackters from '../../assets/charackters.png';
import charackterMob from '../../assets/charackter.svg';
import styled from 'styled-components';
import { Status } from '../Status';
import { Modal } from './Modal';
import { Link } from 'react-router-dom';
import { Nav } from '../Nav';
import { Socials } from '../Socials';
import { TypeAnimationDesktop } from '../../interface/TypeAnimationDesktop';
import { TypeAnimationMob } from '../../interface/TypeAnimationMob';
import { TypeAnimationMobSecond } from '../../interface/TypeAnimationMobSecond';
import apiCallsService from '../../services/apiCalls.service';

const TopCorner = styled.div`
	position: absolute;
	top: 7.7rem;
	left: 14rem;

	& > div {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.5rem;
		color: #adadad;
	}
	@media screen and (max-width: 1100px) {
		left: 6.5rem;
		top: 9.8rem;
	}
	@media screen and (max-width: 567px) {
		margin-bottom: 0.2rem;
	}
`;

const Banner = styled.div`
	margin: 1.6rem 0 2.6rem;
	color: ${props => props.theme.colorMain} !important;
`;

const TopCornerMargin = styled.div`
	margin-bottom: 1.2rem;
`;

const Block = styled.div`
	position: relative;
	background-image: url(${bgImg});
	background-size: 66%;
	background-repeat: no-repeat;
	background-position: 50% 44%;
	width: calc(100% - 15rem);
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 8rem;
	@media screen and (max-width: 1100px) {
		width: 100%;
		background: unset;
	}
	@media screen and (max-width: 567px) {
		background-image: url(${bgImgMob});
		background-size: 13%;
		background-repeat: no-repeat;
		background-position: 68% 50%;
	}
	@media screen and (max-width: 380px) {
		background-size: 10%;
	}
	@media screen and (max-width: 325px) {
		background-size: 9%;
	}
`;

const Image = styled.img`
	object-fit: contain;
	max-width: 100%;
	height: 100%;
	object-position: center;
	@media screen and (max-width: 1100px) {
		transform: translateX(2rem);
	}
	@media screen and (max-width: 567px) {
		display: none;
	}
`;

const ImageMob = styled.img`
	object-fit: contain;
	max-width: 100%;
	height: 100%;
	object-position: center;
	display: none;
	@media screen and (max-width: 567px) {
		display: block;
		height: 100%;
	}
`;

const Expansion = styled.div`
	position: relative;
	border-left: 1px solid ${props => props.theme.colorBorder};
	width: 7.5rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Info = styled.div`
	transform: rotate(-180deg);
	font-weight: 700;
	font-size: 1.2rem;
	line-height: 1.8rem;
	color: ${props => props.theme.colorMain};
	writing-mode: vertical-lr;
`;

const Corner = styled.div`
	width: 7.5rem;
	position: absolute;
	right: 4.7rem;
	top: 4.2rem;
	transform: rotate(-180deg);
	& > span {
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
		width: 100%;
		color: ${props => props.theme.colorGray};
		writing-mode: vertical-lr;
	}
`;

const BottomCorner = styled.div`
	position: absolute;
	left: 12.5rem;
	bottom: 0;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const BottomCornerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	width: 26rem;
	height: 3rem;
`;

const Circle = styled.div`
	width: 9px;
	height: 9px;
	border-radius: 50%;
	border: 1px solid ${props => props.theme.colorBorder};
`;

const BorderBlock = styled.div`
	position: relative;
	border-left: 1px solid ${props => props.theme.colorBorder};
	border-right: 1px solid ${props => props.theme.colorBorder};
	max-width: 23.5rem;
	width: 100%;
	height: 100%;
	&::after {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		content: '';
		max-width: 13.7rem;
		width: 100%;
		height: 1px;
		background: ${props => props.theme.colorBorder};
	}
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Aside = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	/* height: calc(100% - 1rem); */
	/* transform: translateY(1rem); */
	height: calc(100% + 3.7rem);
	transform: translateY(-3.7rem);
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

const ChooseBtn = styled.div`
	position: absolute;
	left: 5.5rem;
	top: -4.7rem;
	z-index: 5;
	width: 5rem;
	height: calc(100% + 4.7rem);
	/* height: 100%; */
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
			font-weight: 700;
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
		height: calc(100% + 1.6rem);
	}
	@media screen and (max-width: 567px) {
		bottom: -3.4rem;
		height: calc(100% + 5.6rem);
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
	width: calc(100% - 4.5rem);
	height: calc(100% - 5rem);
	@media screen and (max-width: 1100px) and (orientation: portrait) {
		width: 100%;
		height: calc(100svh - 7rem);
	}
`;

const MainBlock = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 567px) and (orientation: portrait) {
		height: calc(100svh - 14rem);
	}
`;
export const Main = () => {
	const [closeModal, setCloseModal] = useState(false);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await apiCallsService.getProductsRequest();
	// 		console.log(response);
	// 	};

	// 	fetchData();
	// }, []);
	return (
		<>
			<Aside>
				<Top />
				<AsideText>
					<span>FIRST EXPANSION</span>
				</AsideText>
			</Aside>
			<Group>
				<Nav />
				<MainBlock>
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
					</ChooseBtn>
					<TopCorner>
						<TypeAnimationDesktop />
						<TypeAnimationMob />
					</TopCorner>
					<TypeAnimationMobSecond />
					<BottomCorner>
						<BottomCornerWrapper>
							<Circle />
							<BorderBlock />
						</BottomCornerWrapper>
					</BottomCorner>
					<Block>
						<Status status='online' color='#00c70a' />
						<Image src={charackters} alt='Nerv' />
						<ImageMob src={charackterMob} alt='Nerv' />
						<Modal closeModal={closeModal} setCloseModal={setCloseModal} />
					</Block>
					<Expansion>
						<Corner>
							<span>LATEST EXSPANTION</span>
						</Corner>
						<Info>[ VIGILANTE ]</Info>
					</Expansion>
					<Socials />
				</MainBlock>
			</Group>
		</>
	);
};
