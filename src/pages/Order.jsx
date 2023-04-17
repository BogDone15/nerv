import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { OrderDetails } from '../components/orderComponent/OrderDetails';
import { Socials } from '../components/Socials';

const Wrapper = styled.div`
	height: calc(100vh - 4rem);
	max-width: 192rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	@media screen and (max-width: 1100px) {
		position: relative;
		height: auto;
	}
	@media screen and (max-width: 567px) {
		position: relative;
		min-height: auto;
	}
`;

const Block = styled.div`
	position: relative;
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
	border-top: 1px solid ${props => props.theme.colorBorder};
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	margin-top: 3.7rem;
`;

const AsideMiddle = styled.div`
	height: calc(100% - 10.3rem);
	width: 100%;
	font-weight: 400;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.8rem;
	color: #878787;
	transform: rotate(-180deg);
	writing-mode: vertical-lr;
	display: flex;
	justify-content: center;
	align-items: center;
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

const GearPreview = styled.div`
	position: absolute;
	left: 4.5rem;
	top: 0;
	height: calc(100% - 0.9rem);
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	margin-top: 0.9rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	${AsideTop} {
		border-top: unset;
		border-bottom: unset;
	}
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const AsideTopSecond = styled.div`
	height: 4.4rem;
	width: 100%;
`;

const AsideTopThird = styled.div`
	height: 4rem;
	border-top: 1px solid ${props => props.theme.colorBorder};
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	width: 100%;
`;

const AsideMain = styled.div`
	position: relative;
	width: 100%;
	height: 63.9rem;
	display: flex;
	justify-content: center;
	align-items: center;
	& > span {
		transform: rotate(-180deg);
		writing-mode: vertical-lr;
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorGray};
		padding-top: 8rem;
	}
	&:before {
		position: absolute;
		left: -3.2rem;
		top: 50%;
		transform: translateY(-79%) rotate(-180deg);
		writing-mode: vertical-lr;
		content: 'PREODER INTERFACE';
		text-transform: uppercase;
		font-weight: 300;
		font-size: 1.2rem;
		color: ${props => props.theme.colorGray};
	}
`;

const AsideBottom = styled.div`
	height: calc(100% - 83rem);
	width: 100%;
	border-top: 1px solid ${props => props.theme.colorBorder};
`;

const Group = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	padding-left: 4.5rem;
	@media screen and (max-width: 1100px) {
		padding-left: 0;
	}
`;

export const Order = () => {
	const [activeImage, setActiveImage] = useState(null);
	const [showFirstItem, setShowFirstItem] = useState('');
	const cart = useSelector(state => state.cart);
	const defaultItemName = cart.products[0]?.name;
	const defaultItemPath = defaultItemName?.replace(/ /gi, '-').toLowerCase();
	const [currentItemName, setCurrentItemName] = useState(defaultItemName);
	const [currentItemPath, setCurrentItemPath] = useState(defaultItemPath);

	useEffect(() => {
		let result;
		if (showFirstItem === 'showFirstItem') {
			result = cart.products[0];
		} else {
			result = cart.products.find(item => item.id === activeImage);
		}

		if (result) {
			setCurrentItemName(result.name);
			setCurrentItemPath(currentItemName.replace(/ /gi, '-').toLowerCase());
		}
	}, [activeImage, cart.products, currentItemName, showFirstItem]);

	return (
		<Wrapper>
			<Block>
				<Aside>
					<AsideTop />
					<AsideMiddle></AsideMiddle>
				</Aside>
				<GearPreview>
					<AsideTop />
					<AsideTopSecond />
					<AsideTopThird />
					<AsideMain>
						<span>GEAR PREVIEW</span>
					</AsideMain>
					<AsideBottom />
				</GearPreview>
				<Right>
					<Header />
					<Nav>
						<Link to='/'>Main</Link>
						<span>&gt;</span>
						<Link to='/character'>CHARACTER INTERFACE</Link>
						<span>&gt;</span>
						{cart.products.length === 0 ? null : (
							<>
								<Link to={`/character/${currentItemPath}`}>
									{currentItemName}
								</Link>
								<span>&gt;</span>
							</>
						)}

						<Link to='/order'>ORDER DETAILS</Link>
					</Nav>
					<Group>
						<OrderDetails
							activeImage={activeImage}
							setActiveImage={setActiveImage}
							setShowFirstItem={setShowFirstItem}
						/>
						<Socials />
					</Group>
				</Right>
			</Block>
			<Footer />
		</Wrapper>
	);
};
