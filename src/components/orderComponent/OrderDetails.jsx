import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import jacketPreview from '../../assets/jacket-preview.svg';
import previewBg from '../../assets/preview-order-bg.svg';
import { OrderItem } from './OrderItem';

const Wrapper = styled.div`
	display: flex;
	width: calc(100% - 10rem);
	height: 100%;
`;
const WrapperLeft = styled.div`
	width: 28%;
	height: 100%;
	border-right: 1px solid ${props => props.theme.colorBorder};
`;

const WrapperTop = styled.div`
	display: flex;
	align-items: flex-end;
	width: 100%;
	padding: 1.4rem 0 1.2rem 2.2rem;

	& > span {
		font-weight: 400;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
	}
`;

const WrapperFake = styled.div`
	height: 4rem;
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	border-top: 1px solid ${props => props.theme.colorBorder};
`;

const WrapperPreview = styled.div`
	background: url(${previewBg}) 50% 0 no-repeat;
	background-size: contain;
	width: 100%;
	height: 63.9rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

const Image = styled.img`
	/* max-height: 50vh;
  width: auto; */
	max-width: 100%;
`;

const WrapperBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100% - 72.8rem);
	width: 100%;
	border-top: 1px solid ${props => props.theme.colorBorder};
	& > span {
		background: ${props => props.theme.colorMain};
		width: 2.8rem;
		height: 1px;
		&:last-child {
			transform: translateX(-2.8rem) rotate(90deg);
		}
	}
`;

const WrapperRight = styled.div`
	position: relative;
	width: 73%;
	height: 100%;
	&::after {
		position: absolute;
		right: 1rem;
		top: 0;
		width: 1px;
		height: 100%;
		content: '';
		background: ${props => props.theme.colorBorder};
	}
`;

export const OrderDetails = ({
	activeImage,
	setActiveImage,
	setShowFirstItem,
}) => {
	const cart = useSelector(state => state.cart);
	const [currentItem, setCurrentItem] = useState({});

	useEffect(() => {
		const result = cart.products.find(item => item.id === activeImage);
		setCurrentItem(result);
	}, [activeImage, cart.products, setActiveImage]);

	return (
		<Wrapper>
			<WrapperLeft>
				<WrapperTop>
					<span>360 PREVIEW IMG</span>
				</WrapperTop>
				<WrapperFake />
				<WrapperPreview>
					{cart.products.length >= 1 ? (
						<Image
							src={currentItem ? currentItem.imgMain : cart.products[0].imgMain}
							alt='nerv'
						/>
					) : null}
				</WrapperPreview>
				<WrapperBottom>
					<span></span>
					<span></span>
				</WrapperBottom>
			</WrapperLeft>
			<WrapperRight>
				<OrderItem
					setActiveImage={setActiveImage}
					setShowFirstItem={setShowFirstItem}
				/>
			</WrapperRight>
		</Wrapper>
	);
};