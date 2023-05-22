import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useIsOverflow } from '../hooks/IfOverflow';

const Wrapper = styled.div`
	position: relative;
	width: 35%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		width: 100%;
		display: flex;
		flex-direction: column-reverse;
	}
`;

const WrapperTitle = styled.div`
	display: flex;
	align-items: flex-end;
	height: 3.8rem;
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	padding-left: 0.7rem;
	padding-bottom: 0.7rem;
	& > h2 {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const WrapperTop = styled.div`
	position: relative;
	display: flex;
	align-items: flex-end;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.8rem;
	color: ${props => props.theme.colorBlack};
	height: 4.6rem;
	width: 100%;
	padding-right: 1.2rem;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const WrapperTopItem = styled.div`
	display: flex;
	align-items: center;
	width: calc(100% - 22% - 11rem);
	height: 100%;
	border-right: 1px solid ${props => props.theme.colorBorder};
	padding-top: 1rem;
	padding-right: 1rem;
	padding-bottom: 1rem;
	&:nth-child(2) {
		gap: 10rem;
		padding-left: 2.3rem;
	}

	&:first-child {
		width: 11rem;
		padding-left: 0.7rem;
		border-right: 1px solid ${props => props.theme.colorBorder};
	}
	&:last-child {
		align-items: center;
		justify-content: center;
		width: 22%;
		border-right: none;
	}
`;

const WrapperCover = styled.div`
	position: relative;
	width: 100%;
	height: calc(100% - 20.7rem);

	&::after {
		position: absolute;
		right: 1.1rem;
		top: 0;
		content: '';
		width: 1px;
		height: 100%;
		background: ${props => props.theme.colorBorder};
		@media screen and (max-width: 1100px) {
			display: none;
		}
	}
`;

const WrapperBottom = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	height: 12.4rem;
	border-top: 1px solid ${props => props.theme.colorBorder};
	border-right: 1px solid ${props => props.theme.colorBorder};
	width: calc(100% - 1.1rem);
	background: #cecece;
	@media screen and (max-width: 1100px) {
		position: static;
		border-top: unset;
		border-bottom: 1px solid ${props => props.theme.colorBorder};
		border-right: unset;
		width: 100%;
		height: auto;
		padding: 2.5rem 5rem;
	}
`;

const WrapperMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 100%;
	overflow-y: auto;
	width: calc(100% - 0.3rem);
	padding-right: ${props =>
		props.scroll === 'showScroll' ? '0.5rem' : '0.9rem'};

	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		width: 100%;
		border-top: 1px solid ${props => props.theme.colorBorder};
		padding-right: 0;
	}
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	height: 11rem;
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	&:last-child {
		border-bottom: ${props =>
			props.scroll === 'showScroll'
				? 'unset'
				: `1px solid ${props => props.theme.colorBorder}`};
	}
	@media screen and (max-width: 1100px) {
		height: 33rem;
	}
	@media screen and (max-width: 567px) {
		height: 27rem;
	}
`;

const ItemImage = styled.div`
	width: 11rem;
	height: 11rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	padding: 0.7rem;
	@media screen and (max-width: 1100px) {
		width: 40%;
		height: 100%;
	}
`;

const ItemImageCover = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.theme.colorBorder};
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		padding: 1rem;
	}
`;

const Image = styled.img`
	max-width: 80%;
	@media screen and (max-width: 1100px) {
		max-width: 70%;
	}
`;

const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: calc(100% - 22% - 11rem);
	height: 100%;
	border-right: 1px solid ${props => props.theme.colorBorder};
	padding: 1rem 2.9rem 1rem 2.3rem;

	& > p {
		font-weight: 300;
		font-size: ${props => props.theme.fontxsm};
		line-height: 1.4rem;
		color: ${props => props.theme.colorBlack};
		&:first-child {
			text-transform: uppercase;
		}
	}
	& > div {
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.7rem;
		color: ${props => props.theme.colorBlack};
		margin-top: 0.9rem;
		text-transform: uppercase;
	}
	@media screen and (max-width: 1100px) {
		border-right: none;
		width: 60%;
		& > p {
			font-size: ${props => props.theme.fontmd};
			line-height: 2.2rem;
			&:first-child {
				font-size: 2.5rem;
				margin-bottom: 0.5rem;
			}
		}
		& > div {
			font-size: ${props => props.theme.fontmd};
			line-height: 2.2rem;
		}
	}
`;

const ItemPrice = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 22%;
	height: 100%;
	padding: 1rem;
	& > span {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const ItemPriceMob = styled.div`
	display: none;
	@media screen and (max-width: 1100px) {
		display: block;
		& > span {
			font-size: ${props => props.theme.fontmd};
			line-height: 2.2rem;
		}
	}
`;

const WrapperBottomItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: calc(100% - 22% - 10.8rem);
	border-right: 1px solid ${props => props.theme.colorBorder};
	&:first-child {
		width: 11rem;
		border-right: 1px solid ${props => props.theme.colorBorder};
	}

	&:nth-child(2) {
		padding-left: 2.3rem;
	}

	&:last-child {
		width: 22%;
		border-right: none;
		align-items: flex-end;
		padding-right: 1rem;
	}
	& > div {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
		&:last-child {
			font-weight: 600;
		}
	}
	@media screen and (max-width: 1100px) {
		& > div {
			font-size: ${props => props.theme.fontmd};
			line-height: 2.2rem;
			margin-bottom: 1.5rem;
			&:last-child {
				margin-bottom: 0;
			}
		}

		border-right: none;
		&:last-child {
			width: 50%;
			padding-right: 0;
		}
		&:first-child {
			display: none;
		}
		&:nth-child(2) {
			padding-left: 0;
		}
	}
`;

export const Summary = () => {
	const cart = useSelector(state => state.cart);
	const [scroll, setScroll] = useState('');
	const ref = useRef();

	useIsOverflow(ref, isOverflowFromCallback => {
		isOverflowFromCallback ? setScroll('showScroll') : setScroll('');
	});

	return (
		<Wrapper>
			<WrapperBottom>
				<WrapperBottomItem />
				<WrapperBottomItem>
					<div>SUBTOTAL</div>
					<div>SHIPPING</div>
					<div>TAX INCLUDED</div>
					<div>TOTAL</div>
				</WrapperBottomItem>
				<WrapperBottomItem>
					<div>USD {cart.total}.00</div>
					<div>0.00</div>
					<div>0.00</div>
					<div>USD {cart.total}.00</div>
				</WrapperBottomItem>
			</WrapperBottom>
			<WrapperTitle>
				<h2>SUMMARY</h2>
			</WrapperTitle>
			<WrapperTop>
				<WrapperTopItem>PREVIEW</WrapperTopItem>
				<WrapperTopItem>
					<span>TXT</span>
					<span>INFO</span>
				</WrapperTopItem>
				<WrapperTopItem>PRICE</WrapperTopItem>
			</WrapperTop>
			<WrapperCover>
				<WrapperMain scroll={scroll} ref={ref}>
					{cart.products?.map((item, index) => (
						<Item key={`${index}_${item.id}`} scroll={scroll}>
							<ItemImage>
								<ItemImageCover>
									<Image src={item.imgMain} alt={item.name} />
								</ItemImageCover>
							</ItemImage>
							<ItemInfo>
								<p>{item.name}</p>
								<p>{item.desc}</p>
								<div>
									{item.model} / {item.description.color} /{' '}
									{item.description.sizeFull}
								</div>
								<ItemPriceMob>
									<span>EUR {item.price}.00</span>
								</ItemPriceMob>
							</ItemInfo>
							<ItemPrice>
								<span>EUR {item.price}.00</span>
							</ItemPrice>
						</Item>
					))}
				</WrapperMain>
			</WrapperCover>
		</Wrapper>
	);
};
