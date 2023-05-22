import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CorporationDetail } from '../components/corporationComponent/CorporationDetail';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Socials } from '../components/Socials';

const Wrapper = styled.div`
	height: calc(100vh - 4rem);
	max-width: 192rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	@media screen and (max-width: 1100px) {
		height: auto;
	}
`;

const Block = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	margin-bottom: 7rem;
`;

const Aside = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	margin-top: 0.9rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const AsideTop = styled.div`
	height: 5rem;
	width: 100%;
	margin-top: 3.7rem;
`;

const AsideMiddle = styled.div`
	height: calc(100% - 10.3rem);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	& > span {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: #878787;
		transform: rotate(-180deg);
		writing-mode: vertical-lr;
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 4.5rem);
	height: 100%;
	@media screen and (max-width: 1100px) {
		width: 100%;
	}
`;

const GearPreview = styled.div`
	position: absolute;
	left: 4.5rem;
	top: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	height: calc(100% - 0.9rem);
	margin-top: 0.9rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	${AsideTop} {
		border-top: none;
		border-bottom: none;
	}
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Group = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	padding-left: 4.5rem;
	@media screen and (max-width: 1100px) {
		padding-left: 0;
	}
`;

const ScrollArrow = styled.div`
	display: none;
	@media screen and (max-width: 1100px) {
		position: fixed;
		right: 3rem;
		bottom: 10rem;
		z-index: 10;
		background: ${props => props.theme.colorMain};
		width: 8rem;
		height: 8rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.2s ease;

		& > svg {
			transform: translate(-0.2rem, -0.2rem);
			width: 50%;
			height: 50%;
			fill: none;
			& > path {
				fill: #adadad;
				transition: all 0.2s ease;
			}
		}
		&:hover {
			path {
				fill: #fff;
			}
		}
	}
`;

export const Corporation = () => {
	const [isVisible, setIsVisible] = useState(false);
	const divRef = useRef(null);

	useEffect(() => {
		divRef.current.scrollIntoView({ behavior: 'smooth' });

		window.addEventListener('scroll', listenToScroll);
		return () => window.removeEventListener('scroll', listenToScroll);
	});

	const listenToScroll = () => {
		let heightToHideFrom = 100;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		if (winScroll > heightToHideFrom) {
			!isVisible && setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const handleClick = () => {
		divRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Wrapper ref={divRef}>
			<Block>
				<Aside>
					<AsideTop />
					<AsideMiddle>
						<span>CORPORATION</span>
					</AsideMiddle>
				</Aside>
				<GearPreview>
					<AsideTop />
				</GearPreview>
				<Right>
					<Header />
					<Nav>
						<Link to='/'>Main</Link>
						<span>&gt;</span>
						<Link to='/corporation'>CORPORATION</Link>
					</Nav>
					<Group>
						{isVisible && (
							<ScrollArrow onClick={() => handleClick()} isVisible={isVisible}>
								<svg viewBox='0 0 12 7'>
									<path d='M3.28009 5.02002H1.8501V6.44995H3.28009V5.02002Z' />
									<path d='M4.70979 3.58997H3.27979V5.02002H4.70979V3.58997Z' />
									<path d='M6.13995 2.16003H4.70996V3.58997H6.13995V2.16003Z' />
									<path d='M7.55988 0.72998H6.12988V2.16003H7.55988V0.72998Z' />
									<path d='M8.99007 2.16003H7.56006V3.58997H8.99007V2.16003Z' />
									<path d='M10.4202 3.58997H8.99023V5.02002H10.4202V3.58997Z' />
									<path d='M11.8499 5.02002H10.4199V6.44995H11.8499V5.02002Z' />
								</svg>
							</ScrollArrow>
						)}
						<CorporationDetail />
						<Socials />
					</Group>
				</Right>
			</Block>
			<Footer />
		</Wrapper>
	);
};
