import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import jacketPreview from '../../assets/jacket-preview.svg';
import previewBg from '../../assets/preview-bg.svg';
// import video from '../../assets/video/video.mp4';

import { dataItems } from '../../data';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 46.9rem;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const WrapperMain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	gap: 1.6rem;
	padding: 2rem 1.5rem 2rem 4.3rem;
`;

const WrapperContent = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
`;
const WrapperMainTop = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	&:after {
		position: absolute;
		left: -0.4rem;
		top: 50%;
		transform: translateY(-50%);
		content: '';
		width: 0.4rem;
		height: 30rem;
		background: ${props => props.theme.colorMain};
		clip-path: polygon(0 1%, 100% 0, 100% 100%, 0 99%);
	}
`;

const WrapperMainCover = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

const WrapperMainLeft = styled.div`
	position: absolute;
	left: -3rem;
	bottom: 0;
	transform: rotate(-180deg);
	writing-mode: vertical-lr;
	& > span {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorGray};
		width: 100%;
	}
`;

const WrapperMainMiddle = styled.div`
	position: relative;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	border-left: 1px solid rgba(0, 0, 0, 0.3);
	background: url(${previewBg}) 50% 0 no-repeat;
	background-size: contain;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 51rem;
	padding: 4rem 1rem;
`;

const WrapperMainBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	& > a {
		position: relative;
		padding: 1.5rem 0 1.2rem;
		height: 4.6rem;
		background: ${props => props.theme.colorMain};
		cursor: pointer;
	}
`;

const EmptyButton = styled.div`
	position: relative;
	padding: 1.4rem 0;
	height: 4.6rem;
	background: ${props => props.theme.colorMain};
	text-align: center;
	& > span {
		font-weight: 450;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #adadad;
		text-transform: uppercase;
	}
`;

const LinkGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 5.7rem;
	padding-left: 1.6rem;

	& > span {
		font-weight: 450;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #adadad;
		text-transform: uppercase;
	}
`;

const Button = styled.button`
	position: relative;
	padding: 1.4rem 0;
	cursor: pointer;
	user-select: none;
	& > span {
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: #adadad;
		text-transform: uppercase;
	}
`;

const Scan = styled.p`
	position: absolute;
	top: 1.5rem;
	right: 0.9rem;
	font-weight: 700;
	font-size: 1.3rem;
	line-height: 1.6rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
`;

const Image = styled.img`
	/* max-height: 38vh;
	width: auto; */
	max-width: 100%;
`;

const WrapperMainRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0.2rem;
	width: 4.7rem;
	height: 100%;
	border: 1px solid ${props => props.theme.colorMain};
	border-bottom: none;
`;

const IconArrow = styled.svg`
	position: absolute;
	right: 1.3rem;
	top: 50%;
	transform: translateY(-50%);
	width: 1.2rem;
	height: 2.1rem;
	fill: none;
	& > path {
		fill: #adadad;
		transition: all 0.2s ease;
	}
`;

const Lock = styled.svg`
	width: 1.4rem;
	height: 2.2rem;
`;

const WrapperMainBottom = styled.div`
	position: relative;
	border: 1px solid ${props => props.theme.colorMain};
	padding: 1.8rem 1.5rem;
`;

const WrapperMainBottomAside = styled.div`
	position: absolute;
	left: -3rem;
	bottom: 1rem;
	transform: rotate(-180deg);
	writing-mode: vertical-lr;
	& > span {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorGray};
		width: 100%;
	}
`;

const WrapperMainBottomBlock = styled.div`
	height: 16.2rem;
`;

const Text = styled.p`
	font-weight: 300;
	font-size: 1.2rem;
	line-height: 1.8rem;
	text-align: center;
	color: #000000;
	max-width: 30rem;
	width: 100%;
	margin: auto;
`;

const Input = styled.input`
	border: 1px solid ${props => props.theme.colorBorder};
	background: transparent;
	outline: none;
	width: 100%;
	height: 4.3rem;
`;

const InputWrapper = styled.div`
	position: relative;
	margin: 1.6rem 0;
`;

const InputPlaceHolder = styled.span`
	position: absolute;
	background: #cecece;
	padding: 0 0.8rem;
	left: 2rem;
	top: -0.8rem;
	font-weight: 300;
	font-size: 1.2rem;
	line-height: 1.7rem;
	color: #000000;
	text-transform: uppercase;
	transition: all 0.2s ease;
`;

const Plus = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	& > span {
		width: 3rem;
		height: 1px;
		background: ${props => props.theme.colorMain};
		transform: translateX(1.5rem);

		&:last-child {
			transform: translateX(-1.4rem) rotate(90deg);
		}
	}
`;

// const Video = styled.video`
//   width: 100%;
//   height: 100%;
//   pointer-events: none;
// `;

const Unlock = styled.svg`
	width: 2.4rem;
	height: 2rem;
	fill: none;
	& > path {
		fill: ${props => props.theme.colorMain};
	}
`;

export const Window = ({ activeitem }) => {
	const [currentItem, setCurrentItem] = useState([]);
	const [path, setPath] = useState('');

	useEffect(() => {
		const result = dataItems.find(item => item.id === activeitem);
		setCurrentItem(result);
		setPath(result.name.replace(/ /gi, '-').toLowerCase());

		const jquery = document.createElement('script');
		jquery.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
		jquery.async = true;
		const script = document.createElement('script');
		script.src =
			'https://samples.yaknekruty.com.ua/orbitvu/orbitvu12/orbitvu.js';
		script.async = true;
		const scriptSecond = document.createElement('script');
		scriptSecond.src = 'test.js';
		scriptSecond.async = true;
		// document.body.appendChild(jquery);
		// document.body.appendChild(script);
		// document.body.appendChild(scriptSecond);
	}, [activeitem, currentItem.name]);

	const RotatePhoto = () => {
		// $(function () {
		// 	inject_orbitvu('presentation1-container', 'public/files/', '', {
		// 		ovus_folder: 'public/files/',
		// 		content2: 'yes',
		// 		width: '100%',
		// 		height: '100%',
		// 	});
		// });

		return <div id='presentation1-container'></div>;
	};

	return (
		<Wrapper>
			<WrapperMain>
				<WrapperContent>
					<WrapperMainLeft>
						<span>CLICK FOR DETAILS</span>
					</WrapperMainLeft>
					<WrapperMainBlock>
						<WrapperMainTop>
							<WrapperMainCover>
								<WrapperMainMiddle>
									<Scan>Scn</Scan>
									<RotatePhoto />
									{/* <Image src={currentItem.imgMain} alt='Nerv' /> */}
									{/* <Video
                    autoPlay
                    muted
                    playsInline
                    controls
                    loop
                    src={video}
                  ></Video> */}
								</WrapperMainMiddle>
								<WrapperMainRight>
									{currentItem.availability === 'new' ||
									currentItem.availability === '' ? (
										<Unlock viewBox='0 0 25 21'>
											<path d='M14.17 8.48999H0.449951V20.18H14.17V8.48999Z' />
											<path d='M24.6899 6.29996H21.65V3.14996H13.77V6.29996H10.72V0.0999756H24.6899V6.29996Z' />
										</Unlock>
									) : (
										<Lock viewBox='0 0 8.56 12.11'>
											<rect y='5.06' width='8.56' height='7.05' />
											<polygon points='8.56 3.74 6.69 3.74 6.69 1.84 1.87 1.84 1.87 3.74 0 3.74 0 0 8.56 0 8.56 3.74' />
										</Lock>
									)}
								</WrapperMainRight>
							</WrapperMainCover>
						</WrapperMainTop>
						{currentItem.availability === 'new' ||
						currentItem.availability === '' ? (
							<Link to={`/character/${path}`}>
								<LinkGroup>
									<span>{currentItem.name}</span>
									<span>{currentItem.price}.00 EUR</span>
								</LinkGroup>
								<IconArrow viewBox='0 0 12 21'>
									<path d='M3.5 0.75H0.689941V3.56H3.5V0.75Z' />
									<path d='M6.31006 3.56006H3.5V6.37006H6.31006V3.56006Z' />
									<path d='M9.12988 6.38H6.31982V9.19H9.12988V6.38Z' />
									<path d='M11.9398 9.18994H9.12988V11.9999H11.9398V9.18994Z' />
									<path d='M9.12988 12H6.31982V14.81H9.12988V12Z' />
									<path d='M6.31006 14.8101H3.5V17.6201H6.31006V14.8101Z' />
									<path d='M3.5 17.63H0.689941V20.44H3.5V17.63Z' />
								</IconArrow>
							</Link>
						) : (
							<EmptyButton>
								<span>
									{currentItem.availability === ''
										? currentItem.name
										: currentItem.availability}
								</span>
							</EmptyButton>
						)}
					</WrapperMainBlock>
				</WrapperContent>
				<WrapperMainBottom>
					<WrapperMainBottomAside>
						<span>EXTRA CONTENT</span>
					</WrapperMainBottomAside>
					<WrapperMainBottomBlock>
						{currentItem.availability === 'new' ||
						currentItem.availability === '' ? (
							<Plus>
								<span></span>
								<span></span>
							</Plus>
						) : (
							<>
								<Text>
									ATHINA WILL SEND YOU NOTIFICATION WHEN THIS PRODUCT BECOME
									ALAILIBLE
								</Text>
								<InputWrapper>
									<Input type='email' />
									<InputPlaceHolder>Email</InputPlaceHolder>
								</InputWrapper>
								<Button>
									<span>I AGREE</span>
								</Button>
							</>
						)}
					</WrapperMainBottomBlock>
				</WrapperMainBottom>
			</WrapperMain>
		</Wrapper>
	);
};
