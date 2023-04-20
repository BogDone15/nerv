import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dataItems } from '../../data';
import { Link } from 'react-router-dom';
import { FetchingLoader } from '../FetchingLoader';

const GearWrapper = styled.div`
	position: relative;
	border-left: 1px solid ${props => props.theme.colorBorder};
	max-width: 40.9rem;
	width: 100%;
	height: 100%;
	&:after {
		position: absolute;
		content: '';
		right: 0.8rem;
		top: 0;
		width: 1px;
		height: 100%;
		background: ${props => props.theme.colorBorder};
		@media screen and (max-width: 1100px) {
			display: none;
		}
	}
	@media screen and (max-width: 1100px) {
		order: 4;
		max-width: 100%;
		width: 30%;
		border-left: unset;
	}
	@media screen and (max-width: 567px) {
		width: 100%;
	}
`;

const GearTop = styled.div`
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
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const GearMainViewApp = styled.span`
	display: none;
	@media screen and (max-width: 1100px) {
		display: inline;
	}
`;

const GearMainViewDesk = styled.span``;

const GearMainView = styled.span`
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.8rem;
	text-transform: uppercase;
	margin-bottom: 1rem;
	padding-left: 2.1rem;
	& > span {
		color: ${props => props.theme.colorGray};
	}

	@media screen and (max-width: 1100px) {
		border-bottom: 1px solid ${props => props.theme.colorBorder};
		font-size: 1.3rem;
		padding-bottom: 0.5rem;
		& > span {
			&:first-child {
				display: none;
			}
		}
	}
	@media screen and (max-width: 567px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		font-size: 1.4rem;
		padding: 0.9rem 2.5rem 0.6rem 2rem;
	}
`;
const GearMainViewType = styled.span`
	color: ${props => props.theme.colorBlack} !important;
`;
const GearMainViewMob = styled.span`
	display: none;
	@media screen and (max-width: 567px) {
		display: inline;
		color: ${props => props.theme.colorBlack} !important;
	}
`;

const GearMain = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.7rem 0 1rem 0;
	height: calc(100% - 7.8rem);
	@media screen and (max-width: 1100px) {
		height: 100%;
		padding-top: 0.6rem;
	}
	@media screen and (max-width: 567px) {
		padding-top: 0;
	}
`;

const GearBlock = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 1.8rem;
	padding: 1rem 1.7rem 0 2.1rem;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		gap: 2rem;
		padding: 1rem 1.5rem 0;
	}
	@media screen and (max-width: 567px) {
		padding-top: 3rem;
		gap: 4rem;
	}
`;

const GearCover = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.2rem 0.5rem 0.7rem;
	opacity: ${props => (props.activeitem ? '1' : ' 0.5')};
	width: 100%;
	height: 100%;
	transition: all 0.2s ease;
	@media screen and (max-width: 1100px) {
		max-width: 17.9rem;
		width: 100%;
		height: 17.9rem;
		margin: auto;
	}
	@media screen and (max-width: 567px) {
		height: 46rem;
		max-width: 42rem;
		padding: 2.5rem 0.5rem 1.7rem;
	}
`;

const Image = styled.img`
	/* max-width: 95%;
	padding-left: 0.6rem; */

	object-fit: contain;
	object-position: center;
	max-width: 100%;
	height: 100%;
`;

const GearStatus = styled.div`
	position: absolute;
	top: -0.65rem;
	right: 0.5rem;
	height: 1.4rem;
	width: 6.7rem;
	background: ${props => props.theme.colorMain};
	text-align: center;
	& > span {
		font-weight: 450;
		font-size: 1rem;
		line-height: 1.4rem;
		color: #adadad;
		text-transform: uppercase;
	}
	@media screen and (max-width: 1700px) {
		padding-top: 0.07rem;
	}
	@media screen and (max-width: 1100px) {
		padding-top: 0;
		& > span {
			line-height: 1.4rem;
		}
	}
	@media screen and (max-width: 567px) {
		top: -1.65rem;
		height: 3.4rem;
		width: 17.7rem;
		& > span {
			font-size: 2rem;
			line-height: 3.4rem;
		}
	}
`;

const GearAside = styled.div`
	position: absolute;
	left: -0.65rem;
	top: 0;
	width: 1.4rem;
	height: 100%;
	background: ${props => props.theme.colorMain};
	opacity: ${props => (props.activeitem ? '1' : ' 0')};
	transition: all 0.2s ease;
	@media screen and (max-width: 1100px) {
		height: 17.9rem;
		display: none;
	}
	@media screen and (max-width: 567px) {
		display: none;
	}
`;

const GearItem = styled.div`
	position: relative;
	background: ${props => props.theme.colorBorder};
	max-width: 17rem;
	width: 100%;
	height: 17rem;
	cursor: pointer;
	pointer-events: ${props => (props.absent ? 'none' : 'auto')};

	&:hover {
		${GearCover} {
			opacity: 1;
		}

		${GearAside} {
			opacity: 1;
		}
	}

	& > a {
		display: none;
	}

	@media (max-width: 1100px) {
		max-width: 100%;
		height: auto;
		& > a {
			position: relative;
			padding: 0.7rem 2.2rem 0.7rem 1rem;
			background: ${props => props.theme.colorMain};
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.3rem;

			& > span {
				width: 50%;
				font-weight: 450;
				font-size: 1rem;
				line-height: 1.4rem;
				color: #adadad;
				text-transform: uppercase;
				&:nth-child(2) {
					text-align: right;
				}
			}
		}
	}
	@media screen and (max-width: 567px) {
		& > a {
			padding: 2rem 6.6rem 2rem 4rem;
			& > span {
				font-size: 2rem;
				line-height: 2.2rem;
			}
			& > svg {
				right: 2rem;
				transform: translateY(-62%);
				width: 1.4rem;
				height: 2.3rem;
			}
		}
	}
`;

const IconArrow = styled.svg`
	position: absolute;
	right: 1rem;
	top: 50%;
	transform: translateY(-50%);
	width: 0.6rem;
	height: 1.5rem;
	fill: none;
	& > path {
		fill: #adadad;
		transition: all 0.2s ease;
	}
`;

export const Gear = ({ itemType, activeitem, setActiveitem }) => {
	const [filterItems, setFilterItems] = useState([]);

	useEffect(() => {
		const result = dataItems.filter(item => item.model === itemType);
		setFilterItems(result);
	}, [itemType]);

	const handleClick = id => {
		setActiveitem(id);
	};

	return (
		<GearWrapper>
			<GearTop>GEAR ENGINEERING</GearTop>
			<GearMain>
				<GearMainView>
					<GearMainViewDesk>
						<span>APPLICATION</span>{' '}
						<GearMainViewType>[ {itemType} ]</GearMainViewType>
					</GearMainViewDesk>
					<GearMainViewMob>VIEW ALL GEAR</GearMainViewMob>{' '}
					<GearMainViewApp>
						APPLICATION <GearMainViewType>[ {itemType} ]</GearMainViewType>{' '}
					</GearMainViewApp>
				</GearMainView>
				<GearBlock>
					{filterItems ? (
						filterItems.map(item => (
							<GearItem
								key={item.id}
								absent={item.availability === 'soon' ? true : false}
								onClick={() => handleClick(item.id)}
							>
								<GearStatus>
									<span>{item.availability}</span>
								</GearStatus>
								<GearCover activeitem={item.id === activeitem ? true : false}>
									<GearAside
										activeitem={item.id === activeitem ? true : false}
									/>
									<Image src={item.imgMain} alt='Nerv' />
								</GearCover>
								<Link
									to={`/character/${item.name
										.replace(/ /gi, '-')
										.toLowerCase()}`}
								>
									<span>{item.name}</span>
									<span>{item.price}.00 EUR</span>
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
							</GearItem>
						))
					) : (
						<FetchingLoader />
					)}
				</GearBlock>
			</GearMain>
		</GearWrapper>
	);
};
