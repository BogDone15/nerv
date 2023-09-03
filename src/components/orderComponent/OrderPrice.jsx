import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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
	@media screen and (max-width: 567px) {
		& > div {
			font-size: 1.5rem;
			line-height: 1.8rem;
			margin-bottom: 1.4rem;
		}
	}
`;

export const OrderPrice = () => {
	const cart = useSelector(state => state.cart);

	return (
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
	);
};
