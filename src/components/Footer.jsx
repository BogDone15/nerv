import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import corp from '../assets/corp.svg';

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
	clip-path: polygon(5% 0, 95% 0, 100% 100%, 0% 100%);
	max-width: 133.5rem;
	width: 100%;
	height: 1.5rem;
	background: ${props => props.theme.colorMain};
`;

const Right = styled.div`
	display: flex;
	align-items: center;
	gap: 1.4rem;
	margin-bottom: 0rem;
	max-width: 24.5rem;
	width: 100%;
	& > img {
		max-width: 2.3rem;
	}

	& > span {
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

const WrapperMob = styled.div`
	display: none;
	@media screen and (max-width: 1100px) {
		position: relative;
		clip-path: polygon(
			28% 0%,
			72% 0%,
			76% 12%,
			100% 12%,
			100% 100%,
			0 100%,
			0 12%,
			24% 12%
		);
		margin-top: 2.3rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem;
		padding: 8rem 4rem 4rem;
		background: ${props => props.theme.colorMain};
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
	transform: translateX(-2rem);
`;

const Item = styled.div`
	position: relative;
	transition: all 0.2s ease;
	overflow: hidden;
	&:before {
		content: '';
		position: absolute;
		z-index: 1;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background: ${props => props.theme.colorMain};
		transform: translateX(-101%);
		backface-visibility: hidden;
		transform-origin: left;
		transition: all 0.2s ease;
	}
	&:hover {
		opacity: 0.7;

		&:before {
			transform: translateX(101%);
		}
	}
	& > a {
		font-weight: 300;
		font-size: ${props => props.theme.fontnm};
		color: #adadad;
	}
`;

const WrapperMobRight = styled.div`
	display: flex;
	align-items: center;
	gap: 3.4rem;
`;

const Instagram = styled.svg`
	width: 3.7rem;
	height: 3.7rem;
	fill: none;
	& > path {
		fill: #adadad;
	}
`;

const Facebook = styled.svg`
	width: 2.2rem;
	height: 3.7rem;
	fill: none;
	& > path {
		fill: #adadad;
	}
`;

const Telegram = styled.svg`
	width: 4.3rem;
	height: 3.7rem;
	fill: none;
	& > path {
		fill: #adadad;
	}
`;

const Arrow = styled.svg`
	position: absolute;
	left: 50%;
	top: 1.5rem;
	transform: translateX(-50%);
	width: 2.2rem;
	height: 1.4rem;
	fill: none;
	& > path {
		fill: #adadad;
	}
`;

export const Footer = () => {
	return (
		<>
			<Wrapper>
				<Left>
					<span>/COMMAND PROTOCOL ATHINA</span>
				</Left>
				<Middle></Middle>
				<Right>
					<Image src={corp} />
					<span>
						NERV CORPORATION <br />
						ALL RIGHTS RESERVER VER 1.0.1
					</span>
				</Right>
			</Wrapper>
			<WrapperMob>
				<Arrow
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

				<WrapperMobLeft>
					<svg viewBox='0 0 34 42'>
						<path d='M23.68 0H0.459961V41.5699H33.24V9.08997L23.68 0ZM24.68 29.77L21.58 30.03L20.92 30.72L20.5 30.65C20.26 30.8167 20.01 30.9767 19.75 31.13C18.2199 31.9576 16.4324 32.1721 14.75 31.73L14.45 31.64L14.06 31.86L13.2 31.46L10.2 32.3L8.68996 30.67L9.88996 27.88L9.61996 27.0699L9.91996 26.72H9.99996C9.82 25.7174 9.89566 24.6856 10.22 23.72L10.33 23.4301L12.56 24.3C12.216 25.2413 12.2378 26.2772 12.6211 27.2031C13.0044 28.129 13.7213 28.8774 14.63 29.3C15.6358 29.771 16.7841 29.8374 17.8375 29.4856C18.8909 29.1338 19.7689 28.3908 20.29 27.41C20.5407 26.9357 20.6913 26.4148 20.7326 25.8799C20.7739 25.3449 20.7049 24.8073 20.53 24.3C20.3538 23.7921 20.0771 23.3248 19.7162 22.9261C19.3554 22.5275 18.918 22.2057 18.43 21.98C18.0416 21.7937 17.6266 21.6689 17.2 21.61C16.95 21.44 16.79 21.33 16.51 21.16L14.92 21.46L14.44 22.13C13.7294 22.5352 13.1499 23.1356 12.77 23.86L12.69 24.01L10.46 23.14C10.9216 22.133 11.6387 21.2642 12.54 20.62V20.2L13.31 19.77L14.5 17L16.68 16.75L18.5 19.26L19.4 19.5699L19.45 19.9399V20.04C20.6769 20.6132 21.6892 21.5624 22.34 22.75C22.6352 23.2945 22.8443 23.8815 22.96 24.49L23.36 24.72V25.5699L25.46 27.76L24.68 29.77Z' />
					</svg>
					<div>NERV CORPORATION ALL RIGHTS RESERVED </div>
					<div>SYSTEM VER 1.0.1</div>
				</WrapperMobLeft>
				<WrapperMobCenter>
					<Item>
						<Link to='/terms'>TERMS OF CONDITION</Link>
					</Item>
					<Item>
						<Link to='/terms'>PRIVATE POLICY </Link>
					</Item>
					<Item>
						<Link to='/terms'>SHIPPING</Link>
					</Item>
					<Item>
						<Link to='/terms'>RETURN</Link>
					</Item>
					<Item>
						<Link to='/corporation'>CORPORATION</Link>
					</Item>
					<Item>
						<Link to='/corporation'>CONTACTS</Link>
					</Item>
				</WrapperMobCenter>
				<WrapperMobRight>
					<Instagram viewBox='0 0 37 37'>
						<path d='M36.6199 6.44983V5.28992H35.2899V4.11987H34.1599V2.99988H33.1599V1.82983H31.9299V0.669922H4.99988V1.82983H3.85986V2.99988H2.71985V4.15991H1.5899V5.32983H0.359863V6.32983V28.8198V29.2299V32.3298V33.0099H1.48987V34.0099H2.62988V35.0099H3.7699V35.9598H4.8999V36.9598H32.0799V35.7999H33.2099V34.7999H34.3499V33.9999H35.4799V32.2899V32.9698H36.6199V10.4698V6.46985V6.44983ZM13.2299 10.5199V9.35986H23.4599V11.6799H25.7299V13.9999H27.9999V24.4698H25.7299V26.7999H23.4599V29.1299H13.2299V26.7999H10.9999V24.4698H8.72986V13.9999H10.9999V11.6699H13.2699L13.2299 10.5199ZM30.2299 8.18982V10.5199H26.8199V6.99988H30.2299V8.18982Z' />
						<path d='M13.2299 14.0101H12.0999H10.96V15.1702V16.3401V17.5001V18.6702V19.8301V20.9901V22.1602V23.3201V24.4801H12.0999H13.2299V25.6501V26.8102H14.3699H15.5099H16.64H17.78H18.9099H20.0499H21.1899H22.3199H23.46V25.6501V24.4801H24.5999H25.7299V23.3201V22.1602V20.9901V19.8301V18.6702V17.5001V16.3401V15.1702V14.0101H24.5999H23.46V12.8501V11.6802H22.3199H21.1899H20.0499H18.9099H17.78H16.64H15.5099H14.3699H13.2299V12.8501V14.0101Z' />
					</Instagram>
					<Facebook viewBox='0 0 22 37'>
						<path d='M20.8502 0.629883H19.7703H18.6802H17.6002H16.5103H15.4302H14.3403H13.2603H12.1702H11.0903H10.0002V1.66992H8.92023V2.69983H7.83026V3.73987H6.75024V4.77991H5.66022V5.80994H4.58026V6.84985V7.87988V8.91992V9.95984V10.9899V12.0299V13.0599H3.49023H2.41022H1.33026H0.240234V14.0999V15.1399V16.1699V17.2098V18.2399V19.2799V20.3198V21.3499H1.33026H2.41022H3.49023H4.58026V22.3899V23.4199V24.4598V25.4999V26.5299V27.5698V28.6099V29.6399V30.6799V31.7098V32.7499V33.7899V34.8198V35.8599V36.8899H5.66022H6.75024H7.83026H8.92023H10.0002H11.0903H12.1702H13.2603H14.3403V35.8599V34.8198V33.7899V32.7499V31.7098V30.6799V29.6399V28.6099V27.5698V26.5299V25.4999V24.4598V23.4199V22.3899V21.3499H15.4302H16.5103H17.6002H18.6802V20.3198V19.2799V18.2399V17.2098V16.1699V15.1399V14.0999V13.0599H17.6002H16.5103H15.4302H14.3403V12.0299V10.9899V9.95984H15.4302H16.5103H17.6002H18.6802H19.7703H20.8502H21.9402V8.91992V7.87988V6.84985V5.80994V4.77991V3.73987V2.69983V1.66992V0.629883H20.8502Z' />
					</Facebook>
					<Telegram viewBox='0 0 43 37'>
						<path d='M41.17 1.84985V0.629883H39.9601H38.7601H37.55H36.35V1.84985H35.1501H33.9401V3.06982H32.7401H31.5301H30.3301V4.28992H29.1301H27.92V5.50989H26.72H25.5101H24.3101V6.72986H23.3201H23.22H22.23H22.1201H21.0301V7.94983H19.8201H18.6201V9.05994H17.41H16.2101H15.0001V10.2799H13.8H12.6H11.3901V11.2799H10.1901H8.98004V12.4999H7.78009H6.58008H5.37006V13.6099H4.17004H2.96008V14.8298H1.76007V16.0499H0.560059V17.2699V18.4799V19.6998H1.76007H2.96008V20.9199H4.17004H5.37006H6.58008H7.78009V22.1399H8.98004H10.1901H11.3901H12.6V23.1399H13.8V24.3599V25.5798H15.0001V26.7999V28.0199V29.2399V30.4598H16.2101V31.6799V34.4498H17.41V35.6699V36.8899H18.6201V35.6699V34.4498H19.8201V31.6799V30.4598V29.2399V28.0199V25.5798H20.7001V24.3599V23.1399V21.9199V20.6998V19.6998V19.4799V18.4799H21.9001V17.2699H23.11H24.3101V16.0499H25.5101V14.8298H26.72V13.6099H27.92V12.3899H29.1301V11.1699H30.3301V9.94983H31.5301H32.7401V11.0599H31.5301V12.2799V13.4899H30.3301V14.5999V14.7098V15.7098V15.8198V16.8198H29.1301V18.0399H27.92V19.2599V20.4799H26.72V21.6998H25.5101V22.8099H24.3101V24.0299H23.3201V25.2499V26.4698V27.6898V28.9099H24.5301V29.9099H25.6201H25.73H26.72V31.1299H27.92V32.3499H29.1301V33.5698H30.3301V34.7899H31.5301V36.0099H32.7401H33.9401H35.1501H36.35V34.7899H37.55V33.5698V32.3499V31.1299V29.9099H38.7601V28.6898V27.4698V26.2499V25.0299V23.8099V22.5898V21.3699V20.1499V18.9299H39.9601V17.7098V16.4899V15.2699V14.0499V12.8298H41.17V11.6099V10.3899V9.16992V7.94983H42.3701V6.72986V5.50989V4.28992V3.06982V1.84985H41.17Z' />
					</Telegram>
				</WrapperMobRight>
			</WrapperMob>
		</>
	);
};
