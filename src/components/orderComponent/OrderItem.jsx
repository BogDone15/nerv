import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
	deleteProduct,
	incrementQuantity,
	decrementQuantity,
} from '../../redux/cartRedux';

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

const ContentMainItemRemove = styled.div`
	position: absolute;
	right: 1.8rem;
	top: 1.4rem;
	z-index: 13;
	width: 1.8rem;
	height: 1.8rem;
	cursor: pointer;
	& > span {
		display: inline-block;
		background: ${props => props.theme.colorBlack};
		width: 100%;
		height: 2px;
		transform: rotate(45deg);
		transition: all 0.2s ease;
		&:last-child {
			transform: translateY(-1.3rem) rotate(-45deg);
		}
	}
`;

const ContentMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: calc(100% - 0.3rem);
	height: 50rem;
	overflow-y: auto;
	padding-right: ${props =>
		props.arrSize === 'showScroll' ? '0.4rem' : '0.8rem'};

	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
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
		width: 4.7rem;
		height: 4.7rem;
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

const ContentMainItem = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	padding: 2.6rem 1rem 2.6rem 3.3rem;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	transition: all 0.2s ease;

	&:hover {
		background: ${props => props.theme.colorMain};
		${ContentMainItemRemove} {
			& > span {
				background: ${props => props.theme.colorGray};
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

const ContentPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid ${props => props.theme.colorBorder};
	padding: 3rem 3.3rem;
	width: calc(100% - 1.1rem);
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

const ContentBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.4rem;
	padding: 0 1.1rem;
	height: calc(100% - 72.8rem);
	width: calc(100% - 1.1rem);
	border-top: 1px solid ${props => props.theme.colorBorder};
	& > a {
		width: calc(50% - 0.4rem);
		text-align: center;
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: #adadad;
		background: ${props => props.theme.colorMain};
		padding: 1.3rem 0 1.1rem;
	}
`;

export const OrderItem = ({ setActiveImage, setShowFirstItem }) => {
	const cart = useSelector(state => state.cart);
	const [arrSize, setArrSize] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		if (cart.products.length >= 3) {
			setArrSize('showScroll');
		} else {
			setArrSize('');
		}
	}, [cart.products.length]);

	const handleDelete = (id, quantity, price) => {
		dispatch(deleteProduct({ id, quantity, price }));
		setShowFirstItem('showFirstItem');
	};

	const handleClick = id => {
		setActiveImage(id);
		setShowFirstItem('');
	};

	const handleQuantity = (type, id) => {
		const currentItem = cart.products.find(item => item.id === id);
		if (type === 'dec') {
			if (currentItem.quantity > 1) {
				dispatch(decrementQuantity({ id }));
			}
		} else {
			if (currentItem.quantity < currentItem.size.inStock) {
				dispatch(incrementQuantity({ id }));
			}
		}
	};

	return (
		<>
			<WrapperTop>
				<span>ORDER DETAILS</span>
			</WrapperTop>
			<ContentTop>
				<ContentTopItem>TYPE</ContentTopItem>
				<ContentTopItem>INFO</ContentTopItem>
				<ContentTopItem>COLOR</ContentTopItem>
				<ContentTopItem>SIZE</ContentTopItem>
				<ContentTopItem>AMT</ContentTopItem>
				<ContentTopItem>PRICE</ContentTopItem>
			</ContentTop>
			<ContentMain arrSize={arrSize}>
				{cart.products?.map(item => (
					<ContentMainItem key={item.id} onClick={() => handleClick(item.id)}>
						<ContentMainItemRemove
							onClick={() => handleDelete(item.id, item.quantity, item.price)}
						>
							<span></span>
							<span></span>
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
								<p>ONLY {item.size.inStock} ITEM LEFT</p>
							</ContentMainItemBlock>
						</ContentMainItemInfo>
						<ContentMainItemColor>
							<span>{item.size.color}</span>
						</ContentMainItemColor>
						<ContentMainItemSize>
							<div>
								<span>{item.size.sizeShort}</span>
							</div>
						</ContentMainItemSize>
						<ContentMainItemAmt>
							<div>
								<span>
									{item.quantity <= 9 ? '0' + item.quantity : item.quantity}
								</span>
							</div>
							<div>
								<span onClick={() => handleQuantity('inc', item.id)}>+</span>
								<span onClick={() => handleQuantity('dec', item.id)}>-</span>
							</div>
						</ContentMainItemAmt>
						<ContentMainItemPrice>
							<span>EUR {item.price}.00</span>
						</ContentMainItemPrice>
					</ContentMainItem>
				))}
			</ContentMain>
			<ContentPrice>
				<ContentPriceItem>
					<div>SUBTOTAL</div>
					<div>SHIPPING</div>
					<div>TAX INCLUDED</div>
					<div>TOTAL</div>
				</ContentPriceItem>
				<ContentPriceItem>
					<div>USD {cart.total}.00</div>
					<div>0.00</div>
					<div>0.00</div>
					<div>USD {cart.total}.00</div>
				</ContentPriceItem>
			</ContentPrice>
			<ContentBottom>
				<Link to='/'>
					<span>COMPLETE THE SET</span>
				</Link>
				<Link to='/checkout'>
					<span>CHECKOUT</span>
				</Link>
			</ContentBottom>
		</>
	);
};
