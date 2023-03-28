import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dataItems } from '../../data';

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
`;

const GearMain = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.7rem 0 1rem 0;
	height: calc(100% - 7.8rem);
	@media screen and (max-width: 1100px) {
		height: 100%;
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
	}
`;

const GearCover = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 1.5rem 1.5rem;
	opacity: ${props => (props.activeItem ? '1' : ' 0.5')};
	width: 100%;
	height: 100%;
	transition: all 0.2s ease;
`;

const Image = styled.img`
	/* max-height: 90%; */
	/* width: auto; */
	/* margin: auto; */
	max-width: 95%;
	padding-left: 0.6rem;
`;

const GearStatus = styled.div`
	position: absolute;
	top: -0.65rem;
	right: 0.5rem;
	height: 1.4rem;
	width: 6.7rem;
	background: ${props => props.theme.colorMain};
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	& > span {
		font-weight: 450;
		font-size: 1rem;
		line-height: 1.3rem;
		color: #adadad;
		text-transform: uppercase;
	}
`;

const GearAside = styled.div`
	position: absolute;
	left: -0.65rem;
	top: 0;
	width: 1.4rem;
	height: 100%;
	background: ${props => props.theme.colorMain};
	opacity: ${props => (props.activeItem ? '1' : ' 0')};
	transition: all 0.2s ease;
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
`;

export const Gear = ({ itemType, activeItem, setActiveItem }) => {
	const [filterItems, setFilterItems] = useState([]);

	useEffect(() => {
		const result = dataItems.filter(item => item.model === itemType);
		setFilterItems(result);
	}, [itemType]);

	const handleClick = id => {
		setActiveItem(id);
	};

	return (
		<GearWrapper>
			<GearTop>GEAR ENGINEERING</GearTop>
			<GearMain>
				<GearMainView>
					<span>MODEL LINE</span> [ {itemType} ]
				</GearMainView>
				<GearBlock>
					{filterItems.map(item => (
						<GearItem
							key={item.id}
							absent={item.availability === 'soon' ? true : false}
							onClick={() => handleClick(item.id)}
						>
							<GearStatus>
								<span>{item.availability}</span>
							</GearStatus>
							<GearCover activeItem={item.id === activeItem ? true : false}>
								<GearAside activeItem={item.id === activeItem ? true : false} />
								<Image src={item.imgMain} alt='Nerv' />
							</GearCover>
						</GearItem>
					))}
				</GearBlock>
			</GearMain>
		</GearWrapper>
	);
};
