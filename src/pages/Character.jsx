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
`;

const Block = styled.div`
	display: flex;
	height: 100%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
`;

const Aside = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	margin-top: 0.9rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
`;

const AsideText = styled.div`
	font-weight: 300;
	font-size: 1.3rem;
	color: ${props => props.theme.colorGray};
	transform: rotate(-180deg);
	writing-mode: vertical-lr;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	&:last-child {
		position: relative;
		&::after {
			position: absolute;
			left: 0;
			bottom: -4.5rem;
			content: '';
			background: ${props => props.theme.colorGray};
			width: 100%;
			height: 1px;
		}
	}
`;

const AsideTop = styled.div`
	height: 5rem;
	width: 100%;
	border-top: 1px solid ${props => props.theme.colorBorder};
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	margin-top: 3.7rem;
`;

const AsideMiddle = styled.div`
	height: 7.8rem;
	width: 100%;
	border-top: 1px solid ${props => props.theme.colorBorder};
	font-weight: 400;
	font-size: 1.4rem;
	line-height: 1.8rem;
	color: #878787;
	transform: rotate(-180deg);
	writing-mode: vertical-lr;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AsideBottom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: calc(100% - 18rem);
	padding: 3.3rem 0;
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 4.5rem);
	height: 100%;
`;

const Group = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
`;

export const Character = () => {
	const [activeType, setActiveType] = useState(2);
	const [activeItem, setActiveItem] = useState(1);
	const [itemType, setItemType] = useState('armor');

	return (
		<Wrapper>
			<Block>
				<Aside>
					<AsideTop />
					<AsideMiddle>HEAD</AsideMiddle>
					<AsideBottom>
						<AsideText>TXT</AsideText>
						<AsideText>FILTER / MENU</AsideText>
						<AsideText>FIRST EXPANSION</AsideText>
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
							activeType={activeType}
							setActiveType={setActiveType}
						/>
						<Hero
							setItemType={setItemType}
							activeType={activeType}
							setActiveType={setActiveType}
						/>
						<Gear
							itemType={itemType}
							activeItem={activeItem}
							setActiveItem={setActiveItem}
						/>
						<Appearance activeItem={activeItem} />
						<Window activeItem={activeItem} />
						<Socials />
					</Group>
				</Right>
			</Block>
			<Footer />
		</Wrapper>
	);
};
