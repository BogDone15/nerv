import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import previewBg from '../../assets/preview-order-bg.svg';
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

const ContentPrice = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid ${props => props.theme.colorBorder};
	padding: 3rem 3.3rem;
	width: calc(100% - 1.1rem);
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

const ContentBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.4rem;
	padding: 0 1.1rem;
	height: calc(100% - 72.4rem);
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

const Desktop = styled.div`
	height: 100%;

	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Tablet = styled.div`
	display: none;
	@media screen and (max-width: 1100px) {
		display: block;
		margin: 4.5rem 0 7rem;
		width: 100%;
		height: 100%;
	}
	@media screen and (max-width: 567px) {
		margin: 6.3rem 0 5rem;
	}
`;

const TabletTop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	padding-top: 2rem;
	width: 100%;
	border-top: 1px solid ${props => props.theme.colorBorder};
	& > a {
		width: 95%;
		margin: auto;
		text-align: center;
		font-weight: 450;
		font-size: 1.8rem;
		line-height: 2.4rem;
		color: #adadad;
		background: ${props => props.theme.colorMain};
		padding: 2.3rem 0 2.1rem;
	}
`;

const TabletBottom = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.8rem;
	border-top: 1px solid ${props => props.theme.colorBorder};
`;

const TabletBottomItem = styled.div`
	position: relative;
	display: flex;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	height: 33rem;
	@media screen and (max-width: 567px) {
		height: 27rem;
	}
	${ContentMainItemRemove} {
		top: 2.1rem;
		right: 5.1rem;
		@media screen and (max-width: 567px) {
			right: 3.1rem;
			width: 2rem;
			height: 2rem;
		}
	}
`;

const TabletBottomLeft = styled.div`
	background: url(${previewBg}) 50% 50% no-repeat;
	background-size: 75%;
	width: 35%;
	padding: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	& > img {
		max-width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}
`;

const TabletBottomRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-left: 1px solid ${props => props.theme.colorBorder};
	padding: 1rem 2rem 1rem 4rem;
	@media screen and (max-width: 567px) {
		padding: 1rem 2rem 1rem 2rem;
	}
`;

const ImageProduct = styled.img``;

const TabletName = styled.div`
	font-size: 2.6rem;
	line-height: 3.3rem;
	color: ${props => props.theme.colorMain};
`;
const TabletDesc = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
const TabletType = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
	margin: 3.6rem 0 3.2rem;
	@media screen and (max-width: 567px) {
		margin: 2rem 0 1.6rem;
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
const TabletInStock = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
	margin-bottom: 1rem;
	@media screen and (max-width: 1100px) {
		margin-bottom: 0.6rem;
	}
	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
const TabletColor = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
	margin-bottom: 1rem;
	@media screen and (max-width: 1100px) {
		margin-bottom: 0.6rem;
	}
	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
const TabletSize = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
	margin-bottom: 1rem;
	@media screen and (max-width: 1100px) {
		margin-bottom: 0.6rem;
	}
	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;
const TabletQuantity = styled.div`
	font-size: ${props => props.theme.fontmd};
	line-height: 2.2rem;
	color: ${props => props.theme.colorMain};
	text-transform: uppercase;
	@media screen and (max-width: 567px) {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`;

const TabletCover = styled.div`
	display: flex;
	border-top: 1px solid ${props => props.theme.colorBorder};
`;

const TabletCoverLeft = styled.div`
	position: relative;
	width: 35%;
	padding-left: 4.8rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	padding-top: 3.6rem;
	padding-bottom: 0.7rem;

	& > span {
		font-weight: 400;
		font-size: 1.7rem;
		line-height: 2.2rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
	}
`;

const TabletCoverRight = styled.div`
	width: 65%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3.6rem 5.2rem 0.7rem 2rem;
	& > span {
		font-weight: 400;
		font-size: 1.7rem;
		line-height: 2.2rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
	}
`;

const TabletPrice = styled.div`
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	& > div {
		width: 100%;
		border-top: unset;
		@media screen and (max-width: 567px) {
			padding: 2.3rem 4rem;
		}
	}
	${ContentPriceItem} {
		& > div {
			font-size: 1.7rem;
			line-height: 2.2rem;
			margin-bottom: 1.6rem;
			&:last-child {
				margin-bottom: 0;
			}
		}
		@media screen and (max-width: 567px) {
			& > div {
				font-size: 1.5rem;
				line-height: 1.8rem;
				margin-bottom: 1.4rem;
			}
		}
	}
`;

const contentTopItem = [
	{
		id: 1,
		name: 'TYPE',
	},
	{
		id: 2,
		name: 'INFO',
	},
	{
		id: 3,
		name: 'COLOR',
	},
	{
		id: 4,
		name: 'SIZE',
	},
	{
		id: 5,
		name: 'AMT',
	},
	{
		id: 6,
		name: 'PRICE',
	},
];

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
			<Tablet>
				<TabletCover>
					<TabletCoverLeft>
						<span>PREVIEW</span>
					</TabletCoverLeft>
					<TabletCoverRight>
						<span>INFO</span>
						<span>DEL</span>
					</TabletCoverRight>
				</TabletCover>
				<TabletTop>
					<Link to='/'>
						<span>COMPLETE THE SET</span>
					</Link>
					<Link to='/checkout'>
						<span>CHECKOUT</span>
					</Link>
				</TabletTop>
				<TabletBottom>
					{cart.products?.map(item => (
						<TabletBottomItem>
							<ContentMainItemRemove
								onClick={() => handleDelete(item.id, item.quantity, item.price)}
							>
								<svg viewBox='0 0 15 15'>
									<path d='M1 1L14 14M14 1L1 14' strokeWidth='2' />
								</svg>
							</ContentMainItemRemove>
							<TabletBottomLeft>
								<ImageProduct src={item.imgMain} alt={item.name} />
							</TabletBottomLeft>
							<TabletBottomRight>
								<TabletName>{item.name}</TabletName>
								<TabletDesc>{item.desc}</TabletDesc>
								<TabletType>[ {item.model} ]</TabletType>
								<TabletInStock>ONLY {item.quantity} ITEM LEFT</TabletInStock>
								<TabletColor>COLOR: {item.size.color}</TabletColor>
								<TabletSize>SIZE: {item.size.sizeFull} </TabletSize>
								<TabletQuantity>QUANTITY: {item.quantity}</TabletQuantity>
							</TabletBottomRight>
						</TabletBottomItem>
					))}
				</TabletBottom>
				<TabletPrice>
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
				</TabletPrice>
			</Tablet>
			<Desktop>
				<WrapperTop>
					<span>ORDER DETAILS</span>
				</WrapperTop>
				<ContentTop>
					{contentTopItem.map(item => (
						<ContentTopItem key={item.id}>{item.name}</ContentTopItem>
					))}
				</ContentTop>
				<ContentMain arrSize={arrSize}>
					{cart.products?.map(item => (
						<ContentMainItem
							key={item.id * 10}
							onClick={() => handleClick(item.id)}
						>
							<ContentMainItemRemove
								onClick={() => handleDelete(item.id, item.quantity, item.price)}
							>
								<svg viewBox='0 0 15 15'>
									<path d='M1 1L14 14M14 1L1 14' stroke-width='2' />
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
			</Desktop>
		</>
	);
};
