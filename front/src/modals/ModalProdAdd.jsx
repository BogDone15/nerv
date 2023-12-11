import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
	position: fixed;
	right: 0;
	top: 10.4rem;
	min-width: 47.6rem;
	z-index: 10;
	@media screen and (max-width: 1100px) {
		top: 0;
		width: 100%;
	}
`;

const WrapperTop = styled.div`
	position: relative;
`;

const Info = styled.div`
	background: ${props => props.theme.colorMain};
	padding: 1rem 0 0.8rem 2.5rem;
	& > span {
		font-weight: 400;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #9b9b9b;
	}
	@media screen and (max-width: 1100px) {
		padding: 2rem 0 1.7rem 3.8rem;
		& > span {
			font-size: 2.1rem;
		}
	}
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
		height: 2px;
		background: ${props => props.theme.colorGray};
		transform: translateX(0.8rem) rotate(-45deg);
		transition: all 0.2s ease;
		&:last-child {
			transform: translateX(-0.7rem) rotate(45deg);
		}
	}
	&:hover {
		& > span {
			background: #fff;
		}
	}
	@media screen and (max-width: 1100px) {
		width: 4rem;
		height: 4rem;
		top: 0.7rem;
		& > span {
			transform: translateX(1.2rem) rotate(-45deg);
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
	@media screen and (max-width: 1100px) {
		max-width: 24rem;
	}
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
	@media screen and (max-width: 1100px) {
		gap: 10rem;
	}
`;
const Group = styled.div``;
const Title = styled.div`
	font-weight: 300;
	font-size: 1.3rem;
	line-height: 1.7rem;
	color: #282828;
	margin-bottom: 1rem;
	@media screen and (max-width: 1100px) {
		font-size: 1.7rem;
		line-height: 2.1rem;
	}
`;
const Text = styled.div`
	font-weight: 300;
	font-size: 1.3rem;
	line-height: 1.7rem;
	color: #282828;
	max-width: 23rem;
	width: 100%;
	@media screen and (max-width: 1100px) {
		font-size: 1.7rem;
		line-height: 2.1rem;
		max-width: 100%;
	}
`;

const Price = styled.div`
	align-self: flex-end;
	& > span {
		font-weight: 300;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #282828;
		@media screen and (max-width: 1100px) {
			font-size: 1.8rem;
			line-height: 2.2rem;
			max-width: 100%;
		}
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
		@media screen and (max-width: 1100px) {
			padding: 1.7rem 0 1.6rem;
			font-size: 1.8rem;
			line-height: 2.1rem;
		}
	}
`;

export const ModalProdAdd = ({ showmodalProduct, setShowmodalProduct }) => {
	const [currentProduct, setCurrentProduct] = useState([]);
	const cart = useSelector(state => state.cart);

	useEffect(() => {
		cart && setCurrentProduct(cart.products[cart.products.length - 1]);
	}, [cart]);

	return (
		<Wrapper
			showmodal={showmodalProduct ? 1 : 0}
			initial={{ x: 450 }}
			animate={{ x: 0 }}
			transition={{ delay: 0.1, ease: 'easeOut' }}
			exit={{ x: 450 }}
		>
			{currentProduct && (
				<>
					<WrapperTop>
						<Info>
							<span>
								/add item {currentProduct.quantity}/
								{currentProduct.description?.inStock} of set
							</span>
						</Info>
						<Close onClick={() => setShowmodalProduct(false)}>
							<span></span>
							<span></span>
						</Close>
					</WrapperTop>
					<WrapperMain>
						<WrapperLeft>
							<Image src={currentProduct?.imgMain?.replace('http:', 'https:')} alt={currentProduct.name} />
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
				<Link to='/interface'>EXPLORE MORE</Link>
				<Link to='/order'>CHECKOUT</Link>
			</WrapperBottom>
		</Wrapper>
	);
};
