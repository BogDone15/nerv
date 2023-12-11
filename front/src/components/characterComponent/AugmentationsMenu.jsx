import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import augmenBgFirst from '../../assets/augmen-bg1.svg';
import augmenBgSecond from '../../assets/augmen-bg2.svg';
import augmenBgThird from '../../assets/augmen-bg3.png';
import itemFirst from '../../assets/items/item1.svg';
import { ShuffleLetters } from '../../interface/ShuffleLetters';
import { useSelector } from 'react-redux';

const Menu = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 14.8rem;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const MenuTop = styled.div`
	height: 7.8rem;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.8rem;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	padding-left: 2rem;
	color: #000000;
`;

const MenuMain = styled.div`
	height: calc(100% - 7.8rem);
	padding: 1.7rem 1rem 1rem;
`;

const MenuMainView = styled.div`
	font-weight: ${props => (props.showAllGear ? '900' : '600')};
	font-size: 1.2rem;
	line-height: 1.8rem;
	text-align: center;
	margin-bottom: 2rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		font-weight: 900;
	}
`;

const MenuItem = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	transition: all 0.2s ease;
	opacity: ${props => (props.activeelement ? '1' : '0.5')};
`;

const MenuItemsAside = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.3rem;
	margin-right: 0.2rem;
	transform: ${props =>
		props.activeelement ? 'translateX(-0.4rem)' : 'unset'};
	transition: all 0.2s ease;

	& > span {
		transform: rotate(-180deg);
		writing-mode: vertical-lr;
		color: ${props => props.theme.colorMain};
		font-size: 6px;
		text-transform: uppercase;
	}
`;

const Icon = styled.svg`
	width: 6px;
	height: 7px;
	fill: none;
`;

const MenuItemsContent = styled.div`
	position: relative;
	background-image: url(${augmenBgFirst});
	background-size: 11.1rem 4.7rem;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 11.1rem;
	height: 4.7rem;
`;

const MenuItemsContentSecond = styled.div`
	position: relative;
	background-image: url(${augmenBgSecond});
	background-size: 4.8rem 9.7rem;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 4.8rem;
	height: 9.7rem;
`;

const MenuItemsContentLast = styled.div`
	position: relative;
	background-image: url(${augmenBgThird});
	background-size: 5.5rem 4.7rem;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 5.5rem;
	height: 4.7rem;
	opacity: 0.5;
	pointer-events: none;
`;

const Image = styled.img`
	max-width: 100%;
	object-fit: contain;
	object-position: center;
	height: 100%;
`;

const MenuAsideLine = styled.div`
	position: absolute;
	left: -0.4rem;
	top: 0%;
	content: '';
	width: 0.8rem;
	height: 100%;
	background: ${props => props.theme.colorMain};
	transition: all 0.2s ease;
	opacity: ${props => (props.activeelement ? '1' : '0')};
`;

const GearLine = styled.div`
	position: absolute;
	left: 3px;
	top: -1.2px;
	background: ${props => props.theme.colorMain};
	height: 3px;
	max-width: 2.8rem;
	width: 100%;
	opacity: ${props => (props.activeelement ? '0' : '1')};
	transition: all 0.2s ease;
`;

const Lock = styled.svg`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 1.2rem;
	height: 1.7rem;
	& > rect {
		transform: translateY(5px);
		width: 1.2rem;
		height: 1.7rem;
	}
	& + ${MenuItem} {
		opacity: 0.15;
	}
`;

const MenuCover = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.9rem;
	margin-top: 1.1rem;
`;

const MenuGroup = styled.div`
	position: relative;
	pointer-events: ${props => (props.lock ? 'none' : 'auto')};
	cursor: pointer;
	&:hover ${MenuItem} {
		opacity: 1;
	}
	&:hover ${GearLine} {
		opacity: 0;
	}
	&:hover ${MenuAsideLine} {
		opacity: 1;
	}
	&:hover ${MenuItemsAside} {
		transform: translateX(-0.4rem);
	}
`;

const MenuCoverLeft = styled.div`
	${Lock} {
		left: 60%;
	}
`;

const MenuCoverRight = styled.div``;

const Text = styled.p`
	font-weight: 700;
	font-size: 0.4rem;
	width: 100%;
	text-align: center;
	letter-spacing: 0.18px;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
`;

export const AugmentationsMenu = ({
	setItemType,
	activeelement,
	setActiveelement,
	showAllGear,
	setShowAllGear,
}) => {
	const [product, setProduct] = useState([]);
	const category = useSelector(state => state.category);

	useEffect(() => {
		const result = category?.filter(
			item => item.type === 'spec armr' || item.type === 'items'
		);
		setProduct(result);
	}, [category]);

	const handleClick = (id, type) => {
		setActiveelement(id);
		setItemType(type);
		setShowAllGear(false);
	};

	const viewAllGear = () => {
		setShowAllGear(true);
		setActiveelement();
	};

	return (
		<Menu>
			<MenuTop>
				AUGMENTATIONS <br />
				MENU
			</MenuTop>
			<MenuMain>
				<MenuMainView onClick={() => viewAllGear()} showAllGear={showAllGear}>
					<ShuffleLetters text='VIEW ALL GEAR' />
				</MenuMainView>
				<MenuGroup
					lock={product[1]?.lock}
					onClick={() => handleClick(product[1]?.id, product[1]?.type)}
				>
					{product[1]?.lock && (
						<Lock viewBox='0 0 8.56 12.11'>
							<rect />
							<polygon points='8.56 3.74 6.69 3.74 6.69 1.84 1.87 1.84 1.87 3.74 0 3.74 0 0 8.56 0 8.56 3.74' />
						</Lock>
					)}
					<MenuItem
						activeelement={
							product[1]?.id === activeelement ? activeelement : null
						}
					>
						<MenuItemsAside
							activeelement={
								product[1]?.id === activeelement ? activeelement : null
							}
						>
							<Icon viewBox='0 0 3 4'>
								<path
									d='M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z'
									fill='#191919'
								/>
							</Icon>
							<span>{product[1]?.type}</span>
						</MenuItemsAside>
						<MenuItemsContent>
							<MenuAsideLine
								activeelement={
									product[1]?.id === activeelement ? activeelement : null
								}
							/>
							<GearLine />
							<Image src={product[1]?.img?.replace('http:', 'https:')} alt='nerv' />
						</MenuItemsContent>
					</MenuItem>
				</MenuGroup>
				<MenuCover>
					<MenuCoverLeft>
						<MenuGroup
							lock={product[0]?.lock}
							onClick={() => handleClick(product[0]?.id, product[0]?.type)}
						>
							{product[0]?.lock && (
								<Lock viewBox='0 0 8.56 12.11'>
									<rect />
									<polygon points='8.56 3.74 6.69 3.74 6.69 1.84 1.87 1.84 1.87 3.74 0 3.74 0 0 8.56 0 8.56 3.74' />
								</Lock>
							)}
							<MenuItem
								activeelement={
									product[0]?.id === activeelement ? activeelement : null
								}
							>
								<MenuItemsAside
									activeelement={
										product[0]?.id === activeelement ? activeelement : null
									}
								>
									<Icon viewBox='0 0 3 4'>
										<path
											d='M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z'
											fill='#191919'
										/>
									</Icon>
									<span>{product[0]?.type}</span>
								</MenuItemsAside>
								<MenuItemsContentSecond>
									<MenuAsideLine
										activeelement={
											product[0]?.id === activeelement ? activeelement : null
										}
									/>
									<GearLine
										activeelement={
											product[0]?.id === activeelement ? activeelement : null
										}
									/>
									<Image src={product[0]?.img?.replace('http:', 'https:')} alt='nerv' />
								</MenuItemsContentSecond>
							</MenuItem>
						</MenuGroup>
					</MenuCoverLeft>
					<MenuCoverRight>
						<MenuItemsContentLast>
							<GearLine />
							<Text>&gt; Classified &lt;</Text>
						</MenuItemsContentLast>
					</MenuCoverRight>
				</MenuCover>
			</MenuMain>
		</Menu>
	);
};
