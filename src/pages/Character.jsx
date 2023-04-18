import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Appearance } from '../components/characterComponent/Appearance';
import { AugmentationsMenu } from '../components/characterComponent/AugmentationsMenu';
import { Gear } from '../components/characterComponent/Gear';
import { Hero } from '../components/characterComponent/Hero';
import { Window } from '../components/characterComponent/Window';
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
	@media screen and (max-width: 567px) {
		position: relative;
		min-height: 100vh;
	}
`;

const Block = styled.div`
	display: flex;
	height: 100%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		height: calc(100vh - 7rem);
	}
`;

const Aside = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	margin-top: 0.9rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		position: absolute;
		left: 0;
		top: 0;
		height: calc(100% - 20.8rem);
		width: 4rem;
		margin-top: 14.7rem;
		border-right: none;
	}
	@media screen and (max-width: 567px) {
		margin-top: 17.1rem;
		height: calc(100% - 23.3rem);
	}
`;

const AsideText = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	& > span {
		font-weight: 300;
		font-size: 1.2rem;
		color: ${props => props.theme.colorGray};
		transform: rotate(-180deg);
		writing-mode: vertical-lr;
	}
	&:last-child {
		position: relative;
		&::after {
			position: absolute;
			left: 0;
			top: -4.5rem;
			content: '';
			background: ${props => props.theme.colorGray};
			width: 100%;
			height: 1px;
		}
	}
	@media screen and (max-width: 1100px) {
		height: 100%;
		&:first-child,
		&:last-child {
			display: none;
		}
	}
	@media screen and (max-width: 567px) {
		height: 100%;
		font-size: 9px;
	}
`;

const AsideTop = styled.div`
	height: 5rem;
	width: 100%;
	/* border-top: 1px solid ${props => props.theme.colorBorder};
	border-bottom: 1px solid ${props => props.theme.colorBorder}; */
	margin-top: 3.7rem;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const AsideMiddle = styled.div`
	height: 7.8rem;
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
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
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const AsideBottom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: calc(100% - 16.3rem);
	padding: 3.3rem 0;
	@media screen and (max-width: 1100px) {
		height: 100%;
		padding: 0;
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 4.5rem);
	height: 100%;
	@media screen and (max-width: 1100px) {
		width: 100%;
		height: 100%;
	}
`;

const Group = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	@media screen and (max-width: 1100px) {
		margin-top: 4.4rem;
		border-top: 1px solid ${props => props.theme.colorBorder};
	}
	@media screen and (max-width: 567px) {
		margin-top: 6.3rem;
	}
`;

export const Character = () => {
	const [activeelement, setActiveelement] = useState(2);
	const [activeitem, setActiveitem] = useState(1);
	const [itemType, setItemType] = useState('armor');

	return (
		<Wrapper>
			<Block>
				<Aside>
					<AsideTop />
					<AsideMiddle>
						<span>HEAD</span>
					</AsideMiddle>
					<AsideBottom>
						<AsideText>
							<span>TXT</span>
						</AsideText>
						<AsideText>
							<span>FILTER / MENU</span>
						</AsideText>
						<AsideText>
							<span>FIRST EXPANSION</span>
						</AsideText>
					</AsideBottom>
				</Aside>
				<Right>
					<Header />
					<Nav>
						<Link to='/'>Main</Link>
						<span>&gt;</span>
						<Link to='/character'>CHARACTER INTERFACE</Link>
					</Nav>
					<Group>
						<AugmentationsMenu
							setItemType={setItemType}
							activeelement={activeelement}
							setActiveelement={setActiveelement}
						/>
						<Hero
							setItemType={setItemType}
							activeelement={activeelement}
							setActiveelement={setActiveelement}
						/>
						<Gear
							itemType={itemType}
							activeitem={activeitem}
							setActiveitem={setActiveitem}
						/>
						<Appearance activeitem={activeitem} />
						<Window activeitem={activeitem} />
						<Socials />
					</Group>
				</Right>
			</Block>
			<Footer />
		</Wrapper>
	);
};
