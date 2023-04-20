import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
	position: fixed;
	right: 0;
	top: 10.4rem;
	z-index: 10;
	@media screen and (max-width: 1100px) {
		top: 0;
	}
`;

const WrapperTop = styled.div`
	position: relative;
`;

const Info = styled.div`
	background: ${props => props.theme.colorMain};
	font-weight: 400;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.8rem;
	color: #9b9b9b;
	padding: 1rem 0 0.8rem 2.5rem;
`;

const Close = styled.div`
	position: absolute;
	right: 1rem;
	top: 0.3rem;
	width: 3rem;
	height: 3rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	& > span {
		width: 100%;
		height: 1px;
		background: ${props => props.theme.colorGray};
		transform: translateX(0.8rem) rotate(-45deg);
		&:last-child {
			transform: translateX(-0.7rem) rotate(45deg);
		}
	}
	&:hover {
		& > span {
			background: #fff;
		}
	}
`;

const WrapperMain = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
	background: #c5c3c3;
	padding: 2rem 2.4rem;
	width: 100%;
	height: 100%;
`;

const WrapperLeft = styled.div`
	max-width: 16.8rem;
	width: 100%;
	padding: 0.7rem 2.3rem;
	background: rgba(130, 130, 130, 0.2);
`;
const Image = styled.img`
	max-width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: center;
`;

const WrapperRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 7rem;
	width: 100%;
	height: 100%;
`;
const Group = styled.div``;
const Title = styled.div`
	font-weight: 300;
	font-size: 1.3rem;
	line-height: 1.7rem;
	color: #282828;
	margin-bottom: 1rem;
`;
const Text = styled.div`
	font-weight: 300;
	font-size: 1.3rem;
	line-height: 1.7rem;
	color: #282828;
	max-width: 23rem;
	width: 100%;
`;
const Price = styled.div`
	align-self: flex-end;
	& > span {
		font-weight: 300;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #282828;
	}
`;
const WrapperBottom = styled.div`
	background: #c5c3c3;
	display: flex;
	align-items: center;
	border-top: 1px solid ${props => props.theme.colorMain};
	& > a {
		font-weight: 450;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #282828;
		width: 50%;
		text-align: center;
		padding: 1.2rem 0 1rem;
		&:first-child {
			border-right: 1px solid ${props => props.theme.colorMain};
		}
	}
`;

export const ModalProdAdd = ({ showmodal, setShowmodal }) => {
	const [currentProduct, setCurrentProduct] = useState({});
	const cart = useSelector(state => state.cart);

	useEffect(() => {
		cart && setCurrentProduct(cart.products[cart.products.length - 1]);
	}, [cart]);

	return (
		<Wrapper
			showmodal={showmodal ? 1 : 0}
			initial={{ x: 450 }}
			animate={{ x: 0 }}
			transition={{ delay: 0.1, ease: 'easeOut' }}
			exit={{ x: 450 }}
		>
			{currentProduct && (
				<>
					<WrapperTop>
						<Info>
							/add item {currentProduct.quantity}/{currentProduct.size?.inStock}{' '}
							of set
						</Info>
						<Close onClick={() => setShowmodal(false)}>
							<span></span>
							<span></span>
						</Close>
					</WrapperTop>
					<WrapperMain>
						<WrapperLeft>
							<Image src={currentProduct.imgMain} alt={currentProduct.name} />
						</WrapperLeft>
						<WrapperRight>
							<Group>
								<Title>{currentProduct.name}</Title>
								<Text>{currentProduct.desc}</Text>
							</Group>
							<Price>
								<span>EUR {currentProduct.price}.00</span>
							</Price>
						</WrapperRight>
					</WrapperMain>
				</>
			)}
			<WrapperBottom>
				<Link to='/character'>EXPLORE MORE</Link>
				<Link to='/order'>CHECKOUT</Link>
			</WrapperBottom>
		</Wrapper>
	);
};
