import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useIsOverflow } from '../../hooks/IfOverflow';
import { contentTopItem } from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrementQuantity,
	deleteProduct,
	incrementQuantity,
} from '../../redux/cartRedux';
import { OrderPrice } from './OrderPrice';

const Desktop = styled.div`
	height: 100%;

	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const WrapperTop = styled.div`
	display: flex;
	align-items: flex-end;
	width: 100%;
	padding: 1.4rem 0 1.2rem 3.3rem;

	& > span {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
	}
`;

const ContentTop = styled.ul`
	display: flex;
	align-items: center;
	height: 4rem;
	width: calc(100% - 1.1rem);
	border-top: 1px solid ${props => props.theme.colorBorder};
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	padding: 0 1rem 0 3.3rem;
`;

const ContentTopItem = styled.li`
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.8rem;
	color: ${props => props.theme.colorBlack};
	text-transform: uppercase;
	&:nth-child(1) {
		width: 15%;
	}
	&:nth-child(2) {
		width: 44%;
	}
	&:nth-child(3) {
		width: 9%;
	}
	&:nth-child(4) {
		width: 9%;
	}
	&:nth-child(5) {
		width: 12%;
	}
	&:nth-child(6) {
		width: 11%;
	}
`;

const ContentMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: calc(100% - 0.3rem);
	height: calc(100% - 29.1rem);
	overflow-y: auto;
	padding-right: ${props =>
		props.scroll === 'showScroll' ? '0.4rem' : '0.8rem'};

	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		height: 100%;
		width: 100%;
		padding-right: 0;
	}
`;

const ContentMainItemType = styled.div`
	width: 15%;

	& > div {
		&:first-child {
			min-height: 3.5rem;
		}
	}
	& > div {
		&:nth-child(2) {
			margin: 1.7rem 0 2.6rem;
		}
	}
`;

const ContentMainItemBlock = styled.div`
	& > h3,
	& > p {
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorMain};
		transition: all 0.2s ease;
	}
`;

const ContentMainItemInfo = styled.div`
	width: 44%;
	padding-right: 1rem;

	& > div {
		&:first-child {
			min-height: 3.5rem;
		}
	}
	& > div {
		&:nth-child(2) {
			margin: 1.7rem 0 2.6rem;
		}
	}
	${ContentMainItemBlock} {
		&:last-child,
		&:nth-child(2) {
			& > p {
				text-transform: uppercase;
			}
		}
	}
`;

const ContentMainItemPrice = styled.div`
	width: 11%;
	& > span {
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorMain};
		text-transform: uppercase;
		transition: all 0.2s ease;
	}
`;
const ContentMainItemRemove = styled.div`
	position: absolute;
	right: 1.8rem;
	top: 1.4rem;
	z-index: 13;
	width: 1.5rem;
	height: 1.5rem;
	cursor: pointer;
	& > svg {
		width: 100%;
		height: 100%;
		fill: none;
		& > path {
			stroke: ${props => props.theme.colorMain};
			transition: all 0.2s ease;
		}
	}

	&:hover {
		path {
			stroke: #fff !important;
		}
	}
`;
const ContentPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid ${props => props.theme.colorBorder};
	padding: 3rem 3.3rem;
	width: 100%;
	height: 13.9rem;
	@media screen and (max-width: 1100px) {
		height: 100%;
	}
`;

const ContentPriceItem = styled.div`
	&:last-child {
		text-align: right;
	}
	& > div {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorMain};
		margin-bottom: 0.2rem;
		&:last-child {
			font-weight: 600;
			margin-bottom: 0;
		}
	}
`;

const ContentMainItemColor = styled.div`
	width: 9%;
	& > span {
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorMain};
		text-transform: uppercase;
		transition: all 0.2s ease;
	}
`;

const ContentMainItemSize = styled.div`
	width: 9%;
	& > div {
		width: 4.6rem;
		height: 4.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		& > span {
			font-weight: 300;
			font-size: 1.2rem;
			line-height: 1.8rem;
			color: ${props => props.theme.colorBlack};
			text-transform: uppercase;
			transition: all 0.2s ease;
		}
	}
`;
const ContentBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.4rem;
	padding: 0 1.1rem;
	width: 100%;
	height: 7rem;
	border-top: 1px solid ${props => props.theme.colorBorder};

	& > a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: calc(50% - 0.4rem);
		text-align: center;
		font-weight: 450;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #adadad;
		background: ${props => props.theme.colorMain};
		padding: 0.2rem 0 0;
		height: 4.6rem;
		border: 1px solid transparent;
		transition: all 0.2s ease;

		&:hover {
			background: transparent;
			border: 1px solid ${props => props.theme.colorMain};
			color: ${props => props.theme.colorMain};
		}
	}
`;

const ContentMainItemAmt = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	width: 12%;
	& > div {
		&:first-child {
			width: 4.7rem;
			height: 4.7rem;
			border: 1px solid ${props => props.theme.colorBlack};
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all 0.2s ease;
			& > span {
				font-weight: 300;
				font-size: 1.2rem;
				line-height: 1.8rem;
				color: ${props => props.theme.colorBlack};
				text-transform: uppercase;
				transition: all 0.2s ease;
			}
		}
		&:last-child {
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
					color: #fff !important;
				}
			}
		}
	}
`;

const ContentMainItem = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	padding: 2.6rem 1rem 2.6rem 3.3rem;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	transition: all 0.2s ease;
	&:last-child {
		border-bottom: ${props =>
			props.scroll === 'showScroll'
				? 'unset'
				: `1px solid ${props => props.theme.colorBorder}`};
	}

	&:hover {
		background: ${props => props.theme.colorMain};
		${ContentMainItemRemove} {
			& > svg path {
				stroke: ${props => props.theme.colorGray};
			}
		}
		${ContentMainItemPrice} {
			& > span {
				color: ${props => props.theme.colorGray};
			}
		}
		${ContentMainItemColor} {
			& > span {
				color: ${props => props.theme.colorGray};
			}
		}
		${ContentMainItemBlock} {
			& > h3,
			& > p {
				color: ${props => props.theme.colorGray};
			}
		}

		${ContentMainItemSize} {
			& > div {
				& > span {
					color: ${props => props.theme.colorGray};
				}
			}
		}

		${ContentMainItemAmt} {
			& > div:first-child {
				border: 1px solid ${props => props.theme.colorGray};
				& > span {
					color: ${props => props.theme.colorGray};
				}
			}
			& > div:last-child {
				& > span {
					color: ${props => props.theme.colorGray};
				}
			}
		}
	}
`;

const ContentGroup = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: calc(100% - 1.1rem);
`;

export const OrderItemDesktop = ({ setActiveImage, setShowFirstItem }) => {
	const cart = useSelector(state => state.cart);
	const [scroll, setScroll] = useState('');
	const ref = useRef();
	const dispatch = useDispatch();

	useIsOverflow(ref, isOverflowFromCallback => {
		isOverflowFromCallback ? setScroll('showScroll') : setScroll('');
	});

	const handleQuantity = (type, specificId) => {
		const currentItem = cart.products.find(
			item => item.specificId === specificId
		);

		if (type === 'dec') {
			if (currentItem.quantity > 1) {
				dispatch(decrementQuantity({ specificId }));
			}
		} else {
			if (currentItem.quantity < currentItem.description.inStock) {
				dispatch(incrementQuantity({ specificId }));
			}
		}
	};

	const handleDelete = (specificId, quantity, price) => {
		dispatch(deleteProduct({ specificId, quantity, price }));
		setShowFirstItem('showFirstItem');
	};

	const handleClick = id => {
		setActiveImage(id);
		setShowFirstItem('');
	};

	return (
		<Desktop>
			<WrapperTop>
				<span>ORDER DETAILS</span>
			</WrapperTop>
			<ContentTop>
				{contentTopItem.map(item => (
					<ContentTopItem key={item.name}>{item.name}</ContentTopItem>
				))}
			</ContentTop>
			<ContentMain scroll={scroll} ref={ref}>
				{cart.products?.map(item => (
					<ContentMainItem
						scroll={scroll}
						key={item.specificId}
						onClick={() => handleClick(item.id)}
					>
						<ContentMainItemRemove
							onClick={() =>
								handleDelete(item.specificId, item.quantity, item.price)
							}
						>
							<svg viewBox='0 0 15 15'>
								<path d='M1 1L14 14M14 1L1 14' strokeWidth='2' />
							</svg>
						</ContentMainItemRemove>
						<ContentMainItemType>
							<ContentMainItemBlock>
								<h3>MODEL #</h3>
							</ContentMainItemBlock>
							<ContentMainItemBlock>
								<h3>APPLICATION</h3>
							</ContentMainItemBlock>
							<ContentMainItemBlock>
								<h3>IN STOCK</h3>
							</ContentMainItemBlock>
						</ContentMainItemType>
						<ContentMainItemInfo>
							<ContentMainItemBlock>
								<p>{item.name}</p>
								<p>{item.desc}</p>
							</ContentMainItemBlock>
							<ContentMainItemBlock>
								<p>{item.model}</p>
							</ContentMainItemBlock>
							<ContentMainItemBlock>
								<p>ONLY {item.description.inStock} ITEM LEFT</p>
							</ContentMainItemBlock>
						</ContentMainItemInfo>
						<ContentMainItemColor>
							<span>{item.description.color}</span>
						</ContentMainItemColor>
						<ContentMainItemSize>
							<div>
								<span>{item.description.sizeShort}</span>
							</div>
						</ContentMainItemSize>
						<ContentMainItemAmt>
							<div>
								<span>
									{item.quantity <= 9 ? '0' + item.quantity : item.quantity}
								</span>
							</div>
							<div>
								<span
									onClick={() =>
										handleQuantity(
											'inc',
											item.specificId,
											item.description.color
										)
									}
								>
									+
								</span>
								<span
									onClick={() =>
										handleQuantity(
											'dec',
											item.specificId,
											item.description.color
										)
									}
								>
									-
								</span>
							</div>
						</ContentMainItemAmt>
						<ContentMainItemPrice>
							<span>EUR {item.price}.00</span>
						</ContentMainItemPrice>
					</ContentMainItem>
				))}
			</ContentMain>
			<ContentGroup>
				<OrderPrice />
				<ContentBottom>
					<Link to='/'>
						<span>COMPLETE THE SET</span>
					</Link>
					<Link to='/checkout'>
						<span>CHECKOUT</span>
					</Link>
				</ContentBottom>
			</ContentGroup>
		</Desktop>
	);
};
