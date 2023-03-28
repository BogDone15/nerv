import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainLeftBottomContent = styled.div`
	display: flex;
	align-items: flex-start;
	border: 1px solid ${props => props.theme.colorBlack};
	margin-top: 2.5rem;
	min-height: 13rem;
`;

const Cover = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 50%;
	height: 100%;
	padding: 1.6rem 2.8rem 0.8rem 3rem;

	&:first-child {
		border-right: 1px solid ${props => props.theme.colorBlack};
	}
`;

const CoverItem = styled.div`
	position: relative;
	width: 4.1rem;
	height: 4.1rem;
	border: 1px solid ${props => props.theme.colorBlack};
	cursor: pointer;
	background: ${props =>
		props.activeitem ? `${props.theme.colorMain}` : 'transparent'};
	transition: all 0.2s ease;

	& > span {
		position: absolute;
		right: 0.5rem;
		bottom: 0.2rem;
		font-weight: 400;
		font-size: ${props => props.theme.fontxsm};
		color: ${props =>
			props.activeitem ? '#adadad' : `${props.theme.colorBlack}`};
		text-transform: uppercase;
		transition: all 0.2s ease;
	}
	&:hover {
		background: ${props => props.theme.colorMain};
		& > span {
			color: #adadad;
		}
	}
`;

const CoverTitle = styled.h2`
	position: absolute;
	left: 2.5rem;
	top: -0.9rem;
	background: #cecece;
	padding: 0 1.3rem;
	font-weight: 700;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.8rem;
	color: ${props => props.theme.colorBlack};
	text-transform: uppercase;
`;
const CoverSizes = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

const CoverColors = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 2rem;
`;

const ColorBlock = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.9rem;
`;

const ColorItem = styled.div`
	position: relative;
	width: 4rem;
	height: 4rem;
	background: ${props => props.color};
	cursor: pointer;
	transition: all 0.2s ease;

	&:after {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		content: '';
		width: 110%;
		height: 110%;
		border: 1px solid ${props => props.theme.colorBlack};
		opacity: ${props => (props.activeitemcolor ? '1' : '0')};
		transition: all 0.2s ease;
	}
	&:hover {
		&:after {
			opacity: 1;
		}
	}
`;

const ColorName = styled.p`
	font-weight: 400;
	font-size: 1.3rem;
	color: ${props => props.theme.colorBlack};
	text-transform: uppercase;
`;

const CoverQuantity = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
	${CoverItem} {
		cursor: auto;
		&:hover {
			background: transparent;
			& > span {
				color: unset;
			}
		}
	}
`;

const CoverContent = styled.div``;

const CoverInStock = styled.div`
	font-weight: 400;
	line-height: 1.7rem;
	font-size: 1.3rem;
	color: ${props => props.theme.colorBlack};
	margin-bottom: 0.3rem;
	&:last-child {
		margin-bottom: 0;
	}
`;

const CoverChart = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 0.8rem;
	cursor: pointer;
	& > div {
		border-radius: 50%;
		background: ${props => props.theme.colorBlack};
		width: 1.2rem;
		height: 1.2rem;
	}

	& > span {
		font-weight: 400;
		line-height: 1.7rem;
		font-size: 1.3rem;
		color: ${props => props.theme.colorBlack};
	}
`;

const CoverGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

const CoverSign = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.1rem;
	transform: translateY(0.2rem);
	& > span {
		color: ${props => props.theme.colorBlack};
		font-size: ${props => props.theme.fontmd};
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.2s ease;
		&:hover {
			color: ${props => props.theme.colorGray};
		}
	}
`;
const ColorBlockText = styled.p`
	text-transform: uppercase;
	font-weight: 400;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.7rem;
	color: #000000;
`;

export const Options = ({
	curProd,
	setSize,
	setColor,
	color,
	inStock,
	setInStock,
	quantity,
	setQuantity,
}) => {
	const [filterProd, setFilterProd] = useState({});
	const [activeitem, setActiveitem] = useState(1);
	const [activeitemcolor, setActiveitemcolor] = useState(1);
	const [noSizes, setNoSizes] = useState(false);

	useEffect(() => {
		curProd?.options && setFilterProd(curProd.options[0]);

		const result = curProd?.options?.find(item => item.sizeShort === '');
		result ? setNoSizes(true) : setNoSizes(false);

		curProd?.options && setInStock(curProd.options[0].color[0].inStock);
	}, [curProd.options, setInStock]);

	const handleSize = (item, index) => {
		setSize(item);
		setFilterProd(item);
		setActiveitem(index);
		setActiveitemcolor(1);
		setInStock(item.color[0].inStock);
		setColor(item.color[0].name);
		setQuantity(1);
	};

	const handleColor = (item, index) => {
		setColor(item.name);
		setActiveitemcolor(index);
		setInStock(item.inStock);
		setQuantity(1);
	};

	const handleQuantity = type => {
		if (type === 'dec') {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			quantity < inStock && setQuantity(quantity + 1);
		}
	};

	return (
		<MainLeftBottomContent>
			<Cover>
				<CoverTitle>OPTIONS</CoverTitle>
				<CoverSizes>
					{noSizes ? (
						<ColorBlockText>{curProd.ifNoSize}</ColorBlockText>
					) : (
						curProd.options?.map((item, index) => (
							<CoverItem
								key={item}
								activeitem={index + 1 === activeitem ? true : false}
								onClick={() => handleSize(item, index + 1)}
							>
								<span>{item.sizeShort}</span>
							</CoverItem>
						))
					)}
				</CoverSizes>
				<CoverColors>
					<ColorBlock>
						{filterProd.color?.map((item, index) => (
							<ColorItem
								key={item}
								color={item.hex}
								activeitemcolor={index + 1 === activeitemcolor ? true : false}
								onClick={() => handleColor(item, index + 1)}
							></ColorItem>
						))}
					</ColorBlock>
					<ColorName>{color}</ColorName>
				</CoverColors>
			</Cover>
			<Cover>
				<CoverTitle>QUANTITY</CoverTitle>
				<CoverQuantity>
					<CoverGroup>
						<CoverItem>
							<span>{quantity <= 9 ? '0' + quantity : quantity}</span>
						</CoverItem>
						<CoverSign>
							<span onClick={() => handleQuantity('inc')}>+</span>
							<span onClick={() => handleQuantity('dec')}>-</span>
						</CoverSign>
					</CoverGroup>
					<CoverContent>
						<CoverInStock>{curProd.limitedEdition}</CoverInStock>
						<CoverInStock>LEFT {inStock} IN STOCK</CoverInStock>
					</CoverContent>
				</CoverQuantity>
				{!noSizes && (
					<CoverChart>
						<div></div> <span> SIZE CHART</span>
					</CoverChart>
				)}
			</Cover>
		</MainLeftBottomContent>
	);
};
