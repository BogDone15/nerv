import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { dataItems } from '../../data';
import { addProduct } from '../../redux/cartRedux';
import { ZoomImage } from '../productComponent/ZoomImage';
import { Options } from './Options';
import { ProductCharacteristic } from './ProductCharacteristic';
import { ProductPhotos } from './ProductPhotos';

const MainWrapper = styled.div`
	/* padding: 2rem; */
	padding: 2rem 2rem 1.5rem;
	width: calc(100% - 10rem);
	height: 100%;
	display: flex;
	align-items: center;
	gap: 0.6rem;
	@media screen and (max-width: 1100px) {
		flex-direction: column-reverse;
		width: 100%;
		padding: 0;
		gap: 0;
	}
`;

const MainLeft = styled.div`
	width: 42%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: auto;
	padding-bottom: 0.3rem;

	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		width: 100%;
		padding-bottom: 0;
	}
`;

const MainLeftTop = styled.div`
	position: relative;
	border: 1px solid ${props => props.theme.colorBlack};
	border-top-right-radius: 3rem;
	padding-top: 2.7rem;
	margin-right: 0.6rem;
	height: 100%;
	@media screen and (max-width: 1100px) {
		border-left: none;
		border-right: none;
		margin-right: 0;
	}
`;
const Angle = styled.div`
	position: absolute;
	right: 0;
	top: -1px;
	background: ${props => props.theme.colorMain};
	border-top-right-radius: 2.6rem;
	padding: 1rem 3.6rem 0.7rem 8rem;
	& > span {
		font-weight: 450;
		font-size: 1.3rem;
		line-height: 1.7rem;
		color: #adadad;
		text-transform: uppercase;
	}
	@media screen and (max-width: 1100px) {
		& > span {
			font-size: 1.7rem;
			line-height: 2.2rem;
		}
	}
`;

const Model = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 0 3.5rem 1.5rem;
	border-bottom: 1px solid ${props => props.theme.colorBlack};
	@media screen and (max-width: 1100px) {
		padding-bottom: 3rem;
	}
`;

const ModelBlock = styled.div``;

const ModelBlockName = styled.h3`
	font-weight: 450;
	font-size: 3rem;
	line-height: 3.9rem;
	color: ${props => props.theme.colorBlack};
	text-transform: uppercase;
	@media screen and (max-width: 1100px) {
		font-size: 4.2rem;
		line-height: 5.6rem;
	}
`;

const ModelBlockType = styled.h4`
	font-weight: 450;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.8rem;
	color: ${props => props.theme.colorBlack};
	margin-bottom: 0.7rem;
	text-transform: uppercase;
	@media screen and (max-width: 1100px) {
		font-size: 2rem;
		line-height: 2.7rem;
	}
`;

const ModelBlockTypeName = styled.p`
	font-weight: 450;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.8rem;
	color: ${props => props.theme.colorBlack};
	text-transform: uppercase;
	@media screen and (max-width: 1100px) {
		font-size: 1.6rem;
		line-height: 2.1rem;
	}
`;

const ModelPrice = styled.div`
	font-weight: 700;
	font-size: 1.5rem;
	line-height: 2rem;
	color: ${props => props.theme.colorBlack};
	@media screen and (max-width: 1100px) {
		font-size: 2.5rem;
		line-height: 3.3rem;
	}
`;

const Decoration = styled.div`
	position: relative;
	border: 1px solid ${props => props.theme.colorBlack};
	border-bottom-left-radius: 3rem;
	display: flex;
	align-items: center;
	margin-right: 0.6rem;
	&::after {
		position: absolute;
		right: 50%;
		top: 0;
		transform: translate(-50%);
		content: '';
		width: 1px;
		height: 100%;
		background: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		border-right: none;
		margin-right: 0;
	}
`;
const DecorationLeft = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 1.8rem;
	& > span {
		background: ${props => props.theme.colorBlack};
		width: 1.7rem;
		height: 1px;
		transform: translateX(1.2rem) rotate(45deg);
		&:last-child {
			transform: translateX(-0.5rem) rotate(-45deg);
		}
	}
`;
const DecorationRight = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	height: 100%;
	& > span {
		font-weight: 300;
		font-size: ${props => props.theme.fontxsm};
		line-height: 1.5rem;
		color: ${props => props.theme.colorBlack};
		margin: 0 3.4rem;
		padding: 0.85rem 0;
		text-transform: uppercase;
	}
`;
const Square = styled.div`
	position: relative;
	max-width: 4.3rem;
	width: 100%;
	height: 3.2rem;
	border-left: 1px solid ${props => props.theme.colorBlack};
	border-right: 1px solid ${props => props.theme.colorBlack};
	&::after {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100% + 1.1rem);
		height: 1px;
		content: '';
		background: ${props => props.theme.colorBlack};
		transform: translate(-50%, -50%) rotate(38deg);
	}
`;

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5rem 0 1.3rem;
	height: 4.6rem;
	width: calc(100% - 0.6rem);
	background: ${props => props.theme.colorMain};
	border: 1px solid transparent;
	margin: 0.9rem 0;
	text-align: center;
	cursor: pointer;
	transition: all 0.2s ease;

	& > span {
		font-weight: 450;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #adadad;
		text-align: center;
		text-transform: uppercase;
		transition: all 0.2s ease;
	}
	&:hover {
		background: transparent;
		border: 1px solid ${props => props.theme.colorMain};
		& > span {
			color: ${props => props.theme.colorMain};
		}
	}
	@media screen and (max-width: 1100px) {
		height: 6.2rem;
		width: 95%;
		margin: 0.9rem auto;
		& > span {
			font-size: 1.8rem;
			line-height: 2.2rem;
		}
	}
	@media screen and (max-width: 567px) {
		height: 6rem;
	}
`;

const MainRight = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	width: 58%;
	border: 1px solid ${props => props.theme.colorBlack};
	margin-bottom: 0.6rem;
	@media screen and (max-width: 1100px) {
		width: 100%;
		height: 70vh;
		border: unset;
		margin-bottom: 0;
	}
	@media screen and (max-width: 567px) {
		height: 63vh;
	}
`;

const MainRightAside = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	height: 100%;
	border-right: 1px solid ${props => props.theme.colorBlack};
	padding: 3.1rem 1.1rem;
	& > span {
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorGray};
		transform: rotate(-180deg);
		writing-mode: vertical-lr;
	}
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

export const SingleProduct = ({ setShowmodalProduct, setShowmodalSize }) => {
	const [showZoomImage, setShowZoomImage] = useState(false);
	const dispatch = useDispatch();
	const [curProd, setCurProd] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [inStock, setInStock] = useState();
	const [color, setColor] = useState('');
	const [size, setSize] = useState({});
	const location = useLocation();
	const productName = location.pathname.split('/')[2].replace(/-/gi, ' ');
	const cart = useSelector(state => state.cart);
	// const ref = useRef(null);

	useEffect(() => {
		// ref.current.scrollIntoView({ behavior: 'smooth' });

		const result = dataItems.find(
			item => item.name.toLowerCase() === productName
		);
		setCurProd(result);
		setColor(result.options[0].color[0].name);
		setSize({
			sizeShort: result.options[0].sizeShort,
			sizeFull: result.options[0].sizeFull,
		});
	}, [productName]);

	const handleClickBtn = id => {
		setShowmodalSize(false);

		const selectedItemInCart = cart.products.find(
			item =>
				item.id === id && item.specificId === `${id}/${color}/${size.sizeShort}`
		);

		if (!selectedItemInCart) {
			setShowmodalProduct(true);

			dispatch(
				addProduct({
					...curProd,
					quantity,
					description: { ...size, color, inStock },
					specificId: `${id}/${color}/${size.sizeShort}`,
				})
			);
		}
	};

	return (
		<>
			<ZoomImage
				curProd={curProd.imgSliderZoom}
				showZoomImage={showZoomImage}
				setShowZoomImage={setShowZoomImage}
			/>
			{/* <MainWrapper ref={ref}> */}
			<MainWrapper>
				<MainLeft>
					<MainLeftTop>
						<Angle>
							<span>LEGENDARY EDITION</span>
						</Angle>
						<Model>
							<ModelBlock>
								<ModelBlockName>{curProd.name}</ModelBlockName>
								<ModelBlockType>MODEL TYPE</ModelBlockType>
								<ModelBlockTypeName>[ {curProd.model} ]</ModelBlockTypeName>
							</ModelBlock>
							<ModelPrice>{curProd.price}.00 USD</ModelPrice>
						</Model>
						<ProductCharacteristic curProd={curProd} />
					</MainLeftTop>
					<Options
						setShowmodal={setShowmodalProduct}
						setShowmodalSize={setShowmodalSize}
						curProd={curProd}
						setCurProd={setCurProd}
						setColor={setColor}
						setSize={setSize}
						size={size}
						color={color}
						setInStock={setInStock}
						inStock={inStock}
						setQuantity={setQuantity}
						quantity={quantity}
					/>
					<Button onClick={() => handleClickBtn(curProd.id)}>
						<span>ADD TO EQUIP</span>
					</Button>
					<Decoration>
						<DecorationLeft>
							<span></span>
							<span></span>
						</DecorationLeft>
						<DecorationRight>
							<span>FIRE UP NERV INSIDE</span>
							<Square></Square>
						</DecorationRight>
					</Decoration>
				</MainLeft>
				<MainRight>
					<MainRightAside>
						<span>CHARACTER ARAMETERS</span>
						<span>VISUAL ASSISTANT</span>
						<span>IMAGE QUANTITY</span>
					</MainRightAside>
					<ProductPhotos
						curProd={curProd}
						setShowZoomImage={setShowZoomImage}
					/>
				</MainRight>
			</MainWrapper>
		</>
	);
};
