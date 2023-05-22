import React, { useState } from 'react';
import bgImg from '../../assets/main-bg.png';
import bgImgMob from '../../assets/main-bg-mob.png';
import charackters from '../../assets/charackters.png';
import charackterMob from '../../assets/charackter.svg';
import styled from 'styled-components';
import { Status } from '../Status';
import { Modal } from './Modal';

const TopCorner = styled.div`
	position: absolute;
	top: 2.7rem;
	left: 4.5rem;

	& > div {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.5rem;
		color: #adadad;
	}
	@media screen and (max-width: 1100px) {
		left: 6.5rem;
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
	font-weight: 300;
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
	left: 3rem;
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

const Desktop = styled.div`
	@media screen and (max-width: 567px) {
		display: none;
	}
`;

const Mob = styled.div`
	display: none;
	@media screen and (max-width: 567px) {
		display: block;
		margin-top: 4rem;
		& > div {
			font-weight: 400;
			font-size: 1.2rem;
			line-height: 1.5rem;
			color: #adadad;
			margin-bottom: 0.2rem;
			&:last-child {
				color: ${props => props.theme.colorMain} !important;
				margin-bottom: 0;
			}
		}
	}
`;

const BottomCornerMob = styled.div`
	display: none;
	@media screen and (max-width: 567px) {
		display: block;
		position: absolute;
		right: 2rem;
		bottom: 7rem;
		& > div {
			font-weight: 400;
			font-size: 1.2rem;
			line-height: 1.5rem;
			color: #adadad;
		}
	}
`;

export const Main = () => {
	const [closeModal, setCloseModal] = useState(false);
	return (
		<>
			<TopCorner>
				<div>/ dev</div>
				<div>/ start</div>
				<Desktop>
					<Banner>/img [ BANNER ]</Banner>
					<TopCornerMargin>/add</TopCornerMargin>
					<TopCornerMargin>[transformation]</TopCornerMargin>
					<TopCornerMargin>/ main hero </TopCornerMargin>
					<div>UTRA BOOST</div>
					<div>YOUR SYSTEM</div>
					<div>IN COMPLETE</div>
					<div>FULL SET</div>
				</Desktop>
				<Mob>
					<div>/ text </div>
					<div>LATEST EXSPANTION</div>
					<div>[ VIGILANTE ]</div>
				</Mob>
			</TopCorner>
			<BottomCornerMob>
				<TopCornerMargin>/add</TopCornerMargin>
				<TopCornerMargin>[transformation]</TopCornerMargin>
				<TopCornerMargin>/ main hero </TopCornerMargin>
				<div>UTRA BOOST</div>
				<div>YOUR SYSTEM</div>
				<div>IN COMPLETE</div>
				<div>FULL SET</div>
			</BottomCornerMob>
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
		</>
	);
};
