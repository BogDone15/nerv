import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ModalProdAdd } from '../components/productComponent/ModalProdAdd';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { SingleProduct } from '../components/productComponent/SingleProduct';
import { Socials } from '../components/Socials';
import { SizeChart } from '../components/productComponent/SizeChart';

const Wrapper = styled.div`
	height: calc(100vh - 4rem);
	max-width: 192rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	@media screen and (max-width: 1100px) {
		height: auto;
	}
`;

const Block = styled.div`
	display: flex;
	height: 100%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		border-bottom: unset;
	}
`;

const Aside = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	margin-top: 0.9rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const AsideTop = styled.div`
	height: 5rem;
	width: 100%;
	margin-top: 3.7rem;
`;

const AsideMiddle = styled.div`
	height: calc(100% - 10.3rem);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	& > span {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: #878787;
		transform: rotate(-180deg);
		writing-mode: vertical-lr;
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 4.5rem);
	height: 100%;
	@media screen and (max-width: 1100px) {
		width: 100%;
	}
`;

const Group = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	@media screen and (max-width: 1100px) {
		margin-top: 6rem;
		margin-bottom: 7rem;
		border-top: 1px solid ${props => props.theme.colorBorder};
	}
	@media screen and (max-width: 567px) {
		margin-top: 6.6rem;
	}
`;

export const Product = () => {
	const [showmodalProduct, setShowmodalProduct] = useState(false);
	const [showmodalsize, setShowmodalSize] = useState(false);
	const location = useLocation();
	const path = location.pathname;
	const productName = path.split('/')[2].replace(/-/gi, ' ');

	return (
		<Wrapper>
			<Block>
				<Aside>
					<AsideTop />
					<AsideMiddle>
						<span>PRODUCT DETAILS</span>
					</AsideMiddle>
				</Aside>
				<Right>
					<Header />
					<Nav>
						<Link to='/'>Main</Link>
						<span>&gt;</span>
						<Link to='/character'>CHARACTER INTERFACE</Link>
						<span>&gt;</span>
						<Link to={path}>{productName}</Link>
					</Nav>
					<Group>
						<AnimatePresence>
							{showmodalsize && (
								<SizeChart
									key='modalsize'
									setShowmodalSize={setShowmodalSize}
									showmodalsize={showmodalsize}
								/>
							)}
							{showmodalProduct && (
								<ModalProdAdd
									key='modal'
									setShowmodalProduct={setShowmodalProduct}
									showmodalProduct={showmodalProduct}
								/>
							)}
						</AnimatePresence>
						<SingleProduct
							setShowmodalProduct={setShowmodalProduct}
							setShowmodalSize={setShowmodalSize}
						/>
						<Socials />
					</Group>
				</Right>
			</Block>
			<Footer />
		</Wrapper>
	);
};
