import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import corp from '../assets/corp.svg';
import arrowMob from '../assets/arrow-mob.svg';
import { linksTerms, contactTerms, socialLinksTab } from '../data';

const Wrapper = styled.div`
	position: absolute;
	left: 50%;
	bottom: 0;
	width: 100%;
	transform: translateX(-50%);
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding: 0 4rem;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Middle = styled.div`
	clip-path: polygon(2% 0, 98% 0, 100% 100%, 0% 100%);
	max-width: 133.5rem;
	width: 100%;
	height: 1.5rem;
	background: ${props => props.theme.colorMain};
`;

const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.4rem;
	max-width: 24.5rem;
	width: 100%;
	& > img {
		max-width: 2.3rem;
	}

	& > span {
		text-align: right;
		font-weight: 400;
		font-size: 0.9rem;
		line-height: 1.1rem;
		color: ${props => props.theme.colorGray};
	}
`;

const Left = styled.div`
	margin-bottom: 1rem;
	max-width: 16rem;
	width: 100%;
	& > span {
		font-weight: 400;
		font-size: 0.9rem;
		line-height: 1.1rem;
		color: ${props => props.theme.colorGray};
	}
`;

const Image = styled.img``;

const ArrowBlock = styled.div`
	position: absolute;
	left: 0;
	bottom: 98%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	width: 100%;
	background: ${props => (props.click ? 'transparent' : '#CECECE')};
	height: 5.2rem;
	transition: all 0.2s ease;
	@media screen and (max-width: 567px) {
		height: 5.5rem;
	}
`;

const ArrowWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 53rem;
	height: 3.8rem;
	clip-path: polygon(8% 0, 92% 0, 100% 100%, 0% 100%);
	background: ${props => props.theme.colorMain};
	padding: 0.8rem 0 1.5rem;
	cursor: pointer;
	@media screen and (max-width: 567px) {
		clip-path: polygon(5% 0, 95% 0, 100% 100%, 0% 100%);
		height: 4.2rem;
		padding: 1rem 0 1.7rem;
	}
`;

const WrapperContent = styled.div`
	position: relative;
	width: 100%;
	height: 38.9rem;
	background: ${props => props.theme.colorMain};
	padding: 5.6rem 4rem 4rem;
`;

const WrapperCover = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 1rem;
`;

const WrapperTab = styled.div`
	display: none;
	@media screen and (max-width: 1100px) {
		display: block;
		position: fixed;
		left: 0;
		bottom: ${props => (props.click ? '-2px' : '-38.9rem')};
		z-index: 10;
		width: 100%;
		transition: all 0.2s ease;
	}
`;

const Arrow = styled.svg`
	transform: ${props => (props.click ? 'rotate(180deg)' : 'rotate(0deg)')};
	width: 2.2rem;
	height: 1.4rem;
	fill: none;
	transition: all 0.2s ease;
	& > path {
		fill: #adadad;
	}
	@media screen and (max-width: 567px) {
		display: none;
	}
`;

const WrapperMobLeft = styled.div`
	& > svg {
		width: 3.4rem;
		height: 4.2rem;
		fill: none;
		& > path {
			fill: #adadad;
		}
	}
	& > div {
		font-weight: 300;
		font-size: 0.9rem;
		color: #adadad;
		margin-top: 0.4rem;
		&:nth-of-type(1) {
			margin-top: 1.4rem;
		}
	}
`;

const WrapperMobCenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
	transform: translateX(-1rem);

	& > a {
		font-weight: 300;
		font-size: ${props => props.theme.fontnm};
		color: #adadad;
		text-transform: uppercase;
		transition: all 0.2s ease;
	}
`;

const WrapperMobRight = styled.div`
	display: flex;
	align-items: center;
	gap: 3.4rem;
	& > a {
		width: 2.2rem;
		height: 3.7rem;
		fill: none;
		&:first-child {
			width: 3.7rem;
			height: 3.7rem;
		}
		&:last-child {
			width: 4.3rem;
			height: 3.7rem;
		}
		& > svg {
			width: 100%;
			height: 100%;
			& > path {
				fill: #adadad;
			}
		}
	}
`;

const ArrowImage = styled.img`
	display: none;
	@media screen and (max-width: 567px) {
		display: block;
		max-width: 3rem;
		transform: ${props => (props.click ? 'rotate(180deg)' : 'rotate(0deg)')};
		transition: all 0.2s ease;
	}
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 6.4rem;
	margin-bottom: 3.9rem;
`;

const Button = styled.button`
	width: 30%;
	height: 100%;
	background: #9b9b9b;
	border: none;
	outline: none;
	padding: 0.7rem 0 0.6rem;
	cursor: pointer;
	& > span {
		font-weight: 450;
		font-size: 1.9rem;
		line-height: 2.5rem;
		color: ${props => props.theme.colorMain};
		text-transform: uppercase;
	}
	@media screen and (max-width: 567px) {
		& > span {
			font-size: 1.7rem;
		}
	}
`;

const InputWrapper = styled.div`
	width: 70%;
	height: 100%;
	position: relative;
`;

const Input = styled.input`
	border: 1px solid #9b9b9b;
	border-radius: 0;
	background: transparent;
	outline: none;
	width: 100%;
	font-size: 16px;
	color: #9b9b9b;
	height: 100%;
`;

const InputPlaceHolder = styled.span`
	position: absolute;
	background: ${props => props.theme.colorMain};
	padding: 0 1rem;
	left: 6.8rem;
	top: -0.7rem;
	font-weight: 300;
	font-size: ${props => props.theme.fontnm};
	line-height: 1.6rem;
	color: #9b9b9b;
	text-transform: uppercase;
	transition: all 0.2s ease;
`;

export const Footer = () => {
	const [click, setClick] = useState(false);
	const [links, setLinks] = useState([]);

	useEffect(() => {
		setLinks(linksTerms.concat(contactTerms));
	}, []);

	const handleClick = () => {
		setClick(false);
	};

	return (
		<>
			<Wrapper>
				<Left>
					<span>/COMMAND PROTOCOL ATHINA</span>
				</Left>
				<Middle></Middle>
				<Right>
					<span>
						NERV CORPORATION <br />
						ALL RIGHTS RESERVER VER
					</span>
					<Image src={corp} />
				</Right>
			</Wrapper>
			<WrapperTab click={click}>
				<WrapperContent>
					<Content>
						<InputWrapper>
							<Input type='email' name='email' />
							<InputPlaceHolder>Email</InputPlaceHolder>
						</InputWrapper>
						<Button>
							<span>SUBSCRIBE</span>
						</Button>
					</Content>
					<WrapperCover>
						<ArrowBlock onClick={() => setClick(!click)} click={click}>
							<ArrowWrapper>
								<Arrow
									click={click}
									width='22'
									height='14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M3.32977 10.01H0.279785V13.0601H3.32977V10.01Z' />
									<path d='M6.36981 6.96997H3.31982V10.02H6.36981V6.96997Z' />
									<path d='M9.42014 3.91992H6.37012V6.96991H9.42014V3.91992Z' />
									<path d='M12.4699 0.870117H9.41992V3.9201H12.4699V0.870117Z' />
									<path d='M15.5202 3.91992H12.4702V6.96991H15.5202V3.91992Z' />
									<path d='M18.5598 6.96997H15.5098V10.02H18.5598V6.96997Z' />
									<path d='M21.61 10.01H18.5601V13.0601H21.61V10.01Z' />
								</Arrow>
								<ArrowImage click={click} src={arrowMob} alt='nerv' />
							</ArrowWrapper>
						</ArrowBlock>
						<WrapperMobLeft>
							<svg viewBox='0 0 34 42'>
								<path d='M23.68 0H0.459961V41.5699H33.24V9.08997L23.68 0ZM24.68 29.77L21.58 30.03L20.92 30.72L20.5 30.65C20.26 30.8167 20.01 30.9767 19.75 31.13C18.2199 31.9576 16.4324 32.1721 14.75 31.73L14.45 31.64L14.06 31.86L13.2 31.46L10.2 32.3L8.68996 30.67L9.88996 27.88L9.61996 27.0699L9.91996 26.72H9.99996C9.82 25.7174 9.89566 24.6856 10.22 23.72L10.33 23.4301L12.56 24.3C12.216 25.2413 12.2378 26.2772 12.6211 27.2031C13.0044 28.129 13.7213 28.8774 14.63 29.3C15.6358 29.771 16.7841 29.8374 17.8375 29.4856C18.8909 29.1338 19.7689 28.3908 20.29 27.41C20.5407 26.9357 20.6913 26.4148 20.7326 25.8799C20.7739 25.3449 20.7049 24.8073 20.53 24.3C20.3538 23.7921 20.0771 23.3248 19.7162 22.9261C19.3554 22.5275 18.918 22.2057 18.43 21.98C18.0416 21.7937 17.6266 21.6689 17.2 21.61C16.95 21.44 16.79 21.33 16.51 21.16L14.92 21.46L14.44 22.13C13.7294 22.5352 13.1499 23.1356 12.77 23.86L12.69 24.01L10.46 23.14C10.9216 22.133 11.6387 21.2642 12.54 20.62V20.2L13.31 19.77L14.5 17L16.68 16.75L18.5 19.26L19.4 19.5699L19.45 19.9399V20.04C20.6769 20.6132 21.6892 21.5624 22.34 22.75C22.6352 23.2945 22.8443 23.8815 22.96 24.49L23.36 24.72V25.5699L25.46 27.76L24.68 29.77Z' />
							</svg>
							<div>NERV CORPORATION ALL RIGHTS RESERVED </div>
							<div>SYSTEM VER 1.0.1</div>
						</WrapperMobLeft>
						<WrapperMobCenter>
							{links.map(item => (
								<Link key={item.id} onClick={handleClick} to={item.href}>
									{item.name}
								</Link>
							))}
						</WrapperMobCenter>
						<WrapperMobRight>
							{socialLinksTab.map(item => (
								<Link key={item.name} to={item.link} target='_blank'>
									{item.svg}
								</Link>
							))}
						</WrapperMobRight>
					</WrapperCover>
				</WrapperContent>
			</WrapperTab>
		</>
	);
};
