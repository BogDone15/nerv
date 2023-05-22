import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import heroBg from '../../assets/hero-bg.svg';
import heroBgTab from '../../assets/hero-bg-tab.svg';
import augmenBgFirst from '../../assets/augmen-bg2.svg';
import { dataHero } from '../../data';
import { useEffect } from 'react';

const HeroWrapper = styled.div`
	border-left: 1px solid ${props => props.theme.colorBorder};
	max-width: 8.5rem;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		margin-left: 4rem;
		max-width: 100%;
		width: 13%;
		border-left: unset;
	}
	@media screen and (max-width: 567px) {
		width: 25%;
		border-right: 1px solid ${props => props.theme.colorBorder};
		height: auto;
	}
`;

const HeroTop = styled.div`
	height: 7.8rem;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Image = styled.img`
	max-width: 100%;
	object-fit: contain;
	object-position: center;
	height: 100%;
`;

const HeroItemsContent = styled.div`
	position: relative;
	background-image: url(${heroBg});
	background-size: contain;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 5.1rem;
	height: 5.1rem;
	@media screen and (max-width: 1100px) {
		background-image: url(${heroBgTab});
		background-size: contain;
		background-repeat: no-repeat;
		width: 6rem;
		height: 6rem;
	}
	@media screen and (max-width: 567px) {
		width: 7.5rem;
		height: 7.5rem;
	}
`;

const HeroBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	overflow-y: auto;
	padding: 2.1rem 0 0;
	gap: 0.6rem;
	margin: 0 0.2rem;
	&::-webkit-scrollbar {
		width: 0.3rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1700px) {
		gap: 1.2rem;
	}
	@media screen and (max-width: 1100px) {
		gap: 1rem;

		& > div {
			&:last-child {
				${Image} {
					max-width: 1.2rem;
				}
				${HeroItemsContent} {
					background-image: url(${augmenBgFirst});
					height: 12.5rem;
				}
			}
		}
	}
	@media screen and (max-width: 567px) {
		gap: 1.5rem;
		& > div {
			&:last-child {
				${Image} {
					max-width: 1.5rem;
				}
				${HeroItemsContent} {
					height: 16.5rem;
				}
			}
		}
	}
`;

const HeroMain = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100% - 7.8rem);
	padding: 1.7rem 0rem 1rem;
	@media screen and (max-width: 1100px) {
		height: 100%;
		padding-top: 0.6rem;
	}
	@media screen and (max-width: 567px) {
		padding-top: 0;
	}
`;

const HeromainView = styled.div`
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.8rem;
	text-align: center;
	text-transform: uppercase;
	@media screen and (max-width: 1100px) {
		font-size: 1.3rem;
	}

	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		text-align: left;
		padding-top: 0.9rem;
		padding-left: 3.2rem;
	}
`;

const GearLine = styled.div`
	position: absolute;
	left: 3px;
	top: -1.2px;
	background: ${props => props.theme.colorMain};
	height: 3px;
	max-width: 2rem;
	width: 100%;
	transition: all 0.2s ease;
	opacity: ${props => (props.activeelement ? '0' : '1')};
`;

const HeroItemsAside = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.3rem;
	margin-right: 0.2rem;
	transition: all 0.2s ease;
	transform: ${props =>
		props.activeelement ? 'translateX(-0.4rem)' : 'unset'};

	& > span {
		transform: rotate(-180deg);
		writing-mode: vertical-lr;
		color: ${props => props.theme.colorMain};
		font-size: 6px;
		text-transform: uppercase;
		@media screen and (max-width: 1100px) {
			font-size: 8px;
		}
		@media screen and (max-width: 567px) {
			font-size: 6px;
		}
	}
`;

const HeroAsideLine = styled.div`
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

const HeroItems = styled(motion.div)`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	transition: all 0.2s ease;
	opacity: ${props => (props.activeelement ? '1' : '0.5')};
`;

const Lock = styled.svg`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(calc(-50% + 0.6rem), -50%);
	width: 1.2rem;
	height: 1.7rem;
	z-index: 3;
	& > rect {
		transform: translateY(5px);
		width: 1.2rem;
		height: 1.7rem;
	}
	& + ${HeroItems} {
		opacity: 0.15;
	}
	@media screen and (max-width: 1100px) {
		transform: translate(calc(-50% + 0.6rem), -50%);
	}
	@media screen and (max-width: 567px) {
		width: 2rem;
		height: 2.5rem;
		& > rect {
			width: 1.5rem;
			height: 1.3rem;
		}
	}
`;

const HeroGroup = styled.div`
	position: relative;
	pointer-events: ${props => (props.lock ? 'none' : 'auto')};
	cursor: pointer;
	&:hover ${HeroItems} {
		opacity: 1;
	}
	&:hover ${GearLine} {
		opacity: 0;
	}
	&:hover ${HeroAsideLine} {
		opacity: 1;
	}
	&:hover ${HeroItemsAside} {
		transform: translateX(-0.4rem);
	}
`;

const Icon = styled.svg`
	width: 6px;
	height: 7px;
	fill: none;
`;

export const Hero = ({
	setItemType,
	activeelement,
	setActiveelement,
	setShowAllGear,
}) => {
	const handleClick = (id, type) => {
		setActiveelement(id);
		setItemType(type);
		setShowAllGear(false);
	};

	const useViewport = () => {
		const [width, setWidth] = useState(window.innerWidth);

		useEffect(() => {
			const handleWindowResize = () => {
				setWidth(window.innerWidth);
			};

			window.addEventListener('resize', handleWindowResize);
			return () => window.removeEventListener('resize', handleWindowResize);
		}, []);

		return { width };
	};

	const DesktopComponent = () => {
		const [filterProduct, setFilterProduct] = useState([]);

		useEffect(() => {
			const result = dataHero.filter(item => !item.mobile);
			setFilterProduct(result);
		}, []);

		return (
			<HeroBlock>
				{filterProduct.map(item => (
					<HeroGroup
						key={item.id}
						lock={item.lock}
						onClick={() => handleClick(item.id, item.type)}
					>
						{item.lock && (
							<Lock viewBox='0 0 8.56 12.11'>
								<rect />
								<polygon points='8.56 3.74 6.69 3.74 6.69 1.84 1.87 1.84 1.87 3.74 0 3.74 0 0 8.56 0 8.56 3.74' />
							</Lock>
						)}
						<HeroItems
							activeelement={item.id === activeelement ? activeelement : null}
						>
							<HeroItemsAside
								activeelement={item.id === activeelement ? activeelement : null}
							>
								<Icon viewBox='0 0 3 4'>
									<path
										d='M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z'
										fill='#191919'
									/>
								</Icon>
								<span>{item.type}</span>
							</HeroItemsAside>
							<HeroItemsContent>
								<HeroAsideLine
									activeelement={
										item.id === activeelement ? activeelement : null
									}
								/>
								<GearLine
									activeelement={
										item.id === activeelement ? activeelement : null
									}
								/>
								<Image src={item.img} alt='nerv' />
							</HeroItemsContent>
						</HeroItems>
					</HeroGroup>
				))}
			</HeroBlock>
		);
	};

	const MobileComponent = () => {
		const [filterProduct, setFilterProduct] = useState([]);

		useEffect(() => {
			setFilterProduct(dataHero);
		}, []);

		return (
			<HeroBlock>
				{filterProduct.map(item => (
					<HeroGroup
						key={item.id}
						lock={item.lock}
						onClick={() => handleClick(item.id, item.type)}
					>
						{item.lock && (
							<Lock viewBox='0 0 8.56 12.11'>
								<rect />
								<polygon points='8.56 3.74 6.69 3.74 6.69 1.84 1.87 1.84 1.87 3.74 0 3.74 0 0 8.56 0 8.56 3.74' />
							</Lock>
						)}
						<HeroItems
							activeelement={item.id === activeelement ? activeelement : null}
						>
							<HeroItemsAside
								activeelement={item.id === activeelement ? activeelement : null}
							>
								<Icon viewBox='0 0 3 4'>
									<path
										d='M1.71001 3.22H0V0.440002H2.78999V2.17999L1.71001 3.22Z'
										fill='#191919'
									/>
								</Icon>
								<span>{item.type}</span>
							</HeroItemsAside>
							<HeroItemsContent>
								<HeroAsideLine
									activeelement={
										item.id === activeelement ? activeelement : null
									}
								/>
								<GearLine
									activeelement={
										item.id === activeelement ? activeelement : null
									}
								/>
								<Image src={item.img} alt='nerv' />
							</HeroItemsContent>
						</HeroItems>
					</HeroGroup>
				))}
			</HeroBlock>
		);
	};

	const MyComponent = () => {
		const { width } = useViewport();
		const breakpoint = 1100;

		return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
	};

	return (
		<HeroWrapper>
			<HeroTop />
			<HeroMain>
				<HeromainView>Hero</HeromainView>
				<MyComponent />
			</HeroMain>
		</HeroWrapper>
	);
};
