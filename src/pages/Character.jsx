import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Appearance } from '../components/characterComponent/Appearance';
import { AugmentationsMenu } from '../components/characterComponent/AugmentationsMenu';
import { Gear } from '../components/characterComponent/Gear';
import { Hero } from '../components/characterComponent/Hero';
import { Window } from '../components/characterComponent/Window';
import { Nav } from '../interface/Nav';
import { Socials } from '../interface/Socials';
import { asideText, dataHero } from '../data';
import { dataItems } from '../data';

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 1100px) and (orientation: portrait) {
		height: calc(100vh - 7rem);
	}
	@media screen and (max-width: 567px) {
		position: relative;
		height: 100%;
	}
`;

const Block = styled.div`
	display: flex;
	height: 100%;
	@media screen and (max-width: 1100px) {
		height: 100%;
	}
	@media screen and (max-width: 567px) {
		height: 100%;
		min-height: calc(100vh - 7rem);
	}
`;

const Aside = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	margin-top: -3.7rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		position: absolute;
		left: 0;
		top: 0;
		height: calc(100% - 13.5rem);
		width: 4rem;
		margin-top: 13.5rem;
		border-right: none;
		border-right: 1px solid ${props => props.theme.colorBorder};
	}
	@media screen and (max-width: 567px) {
		margin-top: 14.1rem;
		height: calc(100% - 14.1rem);
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
		& > span {
			font-size: 9px;
			position: fixed;
			left: 0.9rem;
			top: 50%;
			transform: rotate(-180deg) translateY(calc(-50% + 10rem));
		}
	}
`;

const AsideTop = styled.div`
	height: 5rem;
	width: 100%;
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
	height: calc(100% - 16.5rem);
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
	@media screen and (max-width: 567px) {
		height: auto;
	}
`;

const Group = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	@media screen and (max-width: 1100px) {
		margin-top: 6rem;
		border-top: 1px solid ${props => props.theme.colorBorder};
	}
	@media screen and (max-width: 567px) {
		align-items: unset;
		margin-top: 6.3rem;
	}
`;

export const Character = () => {
	const [activeelement, setActiveelement] = useState();
	const [activeitem, setActiveitem] = useState();
	const [itemType, setItemType] = useState('armor');
	const [showAllGear, setShowAllGear] = useState(false);

	useEffect(() => {
		const prodcutTypeArmor = dataHero.find(item => item.type === 'armor');
		prodcutTypeArmor && setActiveelement(prodcutTypeArmor.id);
		const prodcutModelArmor = dataItems.find(item => item.model === 'armor');
		prodcutModelArmor && setActiveitem(prodcutModelArmor.id);
	}, []);

	return (
		<Wrapper>
			<Block>
				<Aside>
					<AsideTop />
					<AsideMiddle>
						<span>HEAD</span>
					</AsideMiddle>
					<AsideBottom>
						{asideText.map((item, index) => (
							<AsideText key={index + item}>
								<span>{item.name}</span>
							</AsideText>
						))}
					</AsideBottom>
				</Aside>
				<Right>
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
							showAllGear={showAllGear}
							setShowAllGear={setShowAllGear}
						/>
						<Hero
							setItemType={setItemType}
							activeelement={activeelement}
							setActiveelement={setActiveelement}
							setShowAllGear={setShowAllGear}
						/>
						<Gear
							setShowAllGear={setShowAllGear}
							showAllGear={showAllGear}
							itemType={itemType}
							activeitem={activeitem}
							setActiveitem={setActiveitem}
							setActiveelement={setActiveelement}
						/>
						<Appearance
							activeitem={activeitem}
							showAllGear={showAllGear}
							setShowAllGear={setShowAllGear}
							setActiveelement={setActiveelement}
						/>
						<Window activeitem={activeitem} />
						<Socials />
					</Group>
				</Right>
			</Block>
		</Wrapper>
	);
};
