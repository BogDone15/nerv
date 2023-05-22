import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { dataItems } from '../../data';
import { addProduct } from '../../redux/cartRedux';
import { ZoomImage } from '../productComponent/ZoomImage';
import { Mousewheel } from 'swiper';
import 'swiper/css/mousewheel';
import { Options } from './Options';

const MainWrapper = styled.div`
	padding: 2rem;
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

	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		width: 100%;
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

const Item = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	padding: 1.5rem 3.5rem;
	border-bottom: 1px solid ${props => props.theme.colorBlack};

	&:last-child {
		border-bottom: 0;
	}
	@media screen and (max-width: 1100px) {
		padding: 2rem 3.5rem;
	}
`;
const Title = styled.h2`
	position: absolute;
	left: 2.5rem;
	top: -0.9rem;
	background: #cecece;
	padding: 0 1.3rem;
	font-weight: 700;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.8rem;
	color: ${props => props.theme.colorBlack};
	text-transform: uppercase;
	@media screen and (max-width: 1100px) {
		font-size: 1.7rem;
		line-height: 2.2rem;
		top: -1.2rem;
	}
`;

const Content = styled.div`
	height: calc(100% - 9.7rem);
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 1100px) {
		height: 100%;
	}
`;

const Text = styled.p`
	font-weight: 400;
	font-size: 1.1rem;
	line-height: 1.5rem;
	color: ${props => props.theme.colorBlack};
	margin-bottom: 0.1rem;
	@media screen and (max-width: 1100px) {
		font-size: 1.7rem;
		line-height: 2.2rem;
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
	margin: 0.9rem 0;
	text-align: center;
	cursor: pointer;
	& > span {
		font-weight: 450;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #adadad;
		text-align: center;
		text-transform: uppercase;
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
	@media screen and (max-width: 1100px) {
		width: 100%;
		height: 70vh;
		border: unset;
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
const MainRightContent = styled.div`
	position: relative;
	height: 100%;
	width: calc(100% - 4.1rem);
	& > div {
		&:nth-child(2) {
			height: 100%;
			& > div {
				& > div {
					display: flex;
					align-items: flex-end;
					height: 100%;
				}
			}
		}
	}
	@media screen and (max-width: 1100px) {
		width: 100%;
	}
`;

const Position = styled.div`
	position: absolute;
	right: 4rem;
	top: 2.6rem;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.7rem;
	color: ${props => props.theme.colorBlack};
	@media screen and (max-width: 567px) {
		font-size: 1.5rem;
		line-height: 2rem;
	}
`;

const Image = styled.img`
	max-width: 100%;
	height: 100%;
	object-position: center;
	object-fit: contain;
`;

const Corner = styled.div`
	position: absolute;
	z-index: 5;
	right: 3.6rem;
	bottom: 3.6rem;
`;

const CornerTop = styled.div`
	margin-bottom: 2rem;
	text-align: right;
	& > p {
		font-weight: 400;
		font-size: 1.3rem;
		line-height: 1.7rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
	}
	@media screen and (max-width: 1100px) {
		margin-bottom: 0;
	}
`;

const CornerBottom = styled.div`
	display: flex;
	align-items: center;
	gap: 1.8rem;
	& > span {
		font-weight: 300;
		font-size: 1.3rem;
		line-height: 1.7rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
	}
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Plus = styled.svg`
	width: 3.8rem;
	height: 3.8rem;
	fill: none;
	cursor: pointer;
	& > path {
		fill: black;
		transition: all 0.2s ease;
	}
`;

const ArrowPrev = styled.svg`
	position: absolute;
	left: 2.5rem;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	cursor: pointer;
	width: 9px;
	height: 16px;
	fill: none;
	pointer-events: ${props => (props.firstSlide ? 'none' : 'auto')};
	& > path {
		fill: #a0a0a0;
		transition: all 0.2s ease;
	}
	&:hover {
		& > path {
			fill: ${props => props.theme.colorMain};
		}
	}
`;

const ArrowNext = styled.svg`
	position: absolute;
	right: 2.5rem;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	cursor: pointer;
	width: 9px;
	height: 16px;
	fill: none;
	pointer-events: ${props => (props.lastSlide ? 'none' : 'auto')};
	& > path {
		fill: #a0a0a0;
		transition: all 0.2s ease;
	}
	&:hover {
		& > path {
			fill: ${props => props.theme.colorMain};
		}
	}
`;

export const SingleProduct = ({ setShowmodalProduct, setShowmodalSize }) => {
	const [slides, setSlides] = useState([]);
	const [lastSlide, setLastSlide] = useState(false);
	const [firstSlide, setFirstSlide] = useState(true);
	const [showZoomImage, setShowZoomImage] = useState(false);
	const dispatch = useDispatch();
	const [curProd, setCurProd] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [inStock, setInStock] = useState();
	const [color, setColor] = useState('');
	const [size, setSize] = useState({});
	const [currentSlide, setCurrentSlide] = useState('01');
	const location = useLocation();
	const productName = location.pathname.split('/')[2].replace(/-/gi, ' ');
	const cart = useSelector(state => state.cart);

	const time = new Date().getTime();

	useEffect(() => {
		const result = dataItems.find(
			item => item.name.toLowerCase() === productName
		);
		setCurProd(result);
		setColor(result.options[0].color[0].name);
		setSize({
			sizeShort: result.options[0].sizeShort,
			sizeFull: result.options[0].sizeFull,
		});

		curProd.imgSlider?.length <= 9
			? setSlides('0' + curProd.imgSlider.length)
			: setSlides(curProd.imgSlider?.length);
	}, [productName, curProd.imgSlider?.length]);

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

	const handleShowImage = () => {
		setShowZoomImage(true);
	};

	const SwiperButtonPrev = () => {
		const swiper = useSwiper();
		const handleClickPrev = () => {
			swiper.slidePrev();
		};

		return (
			<ArrowPrev
				viewBox='0 0 9 16'
				onClick={() => handleClickPrev()}
				firstSlide={firstSlide}
			>
				<path d='M8.95001 13.09H6.84003V15.2H8.95001V13.09Z' />
				<path d='M6.84003 10.98H4.72998V13.09H6.84003V10.98Z' />
				<path d='M4.71997 8.85999H2.60999V10.97H4.71997V8.85999Z' />
				<path d='M2.60999 6.75H0.5V8.85999H2.60999V6.75Z' />
				<path d='M4.71997 4.64001H2.60999V6.75H4.71997V4.64001Z' />
				<path d='M6.84003 2.52002H4.72998V4.63H6.84003V2.52002Z' />
				<path d='M8.95001 0.409973H6.84003V2.52002H8.95001V0.409973Z' />
			</ArrowPrev>
		);
	};

	const SwiperButtonNext = () => {
		const swiper = useSwiper();

		const handleClickNext = () => {
			swiper.slideNext();
		};

		return (
			<ArrowNext
				viewBox='0 0 9 16'
				onClick={() => handleClickNext()}
				lastSlide={lastSlide}
			>
				<path d='M2.53003 0.619995H0.420044V2.72998H2.53003V0.619995Z' />
				<path d='M4.64001 2.73999H2.53003V4.84998H4.64001V2.73999Z' />
				<path d='M6.75 4.84998H4.64001V6.96002H6.75V4.84998Z' />
				<path d='M8.85999 6.96002H6.75V9.07001H8.85999V6.96002Z' />
				<path d='M6.75 9.07001H4.64001V11.18H6.75V9.07001Z' />
				<path d='M4.64001 11.19H2.53003V13.3H4.64001V11.19Z' />
				<path d='M2.53003 13.3H0.420044V15.41H2.53003V13.3Z' />
			</ArrowNext>
		);
	};

	return (
		<>
			<ZoomImage
				curProd={curProd}
				showZoomImage={showZoomImage}
				setShowZoomImage={setShowZoomImage}
			/>
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
						<Content>
							<Item>
								<Title>TECHNICAL INFORMATION</Title>
								<Text>3L GORE-TEX® PRO [Most breathable technology]</Text>
								<Text>_(72% PA, 28% ePTFE)</Text>
								<Text>
									_With solution-dyed Micro Grid™ backer for improved
									environmental footprint
								</Text>
								<Text>_GUARANTEED TO KEEP YOU DRY™</Text>
							</Item>
							<Item>
								<Title>SPECIFICATION</Title>
								<Text>
									Korean exclusive .................................... most
									celebr ated wide-spectrum jacket. Outside of the J1E, they are
									the first J1A equipped with a TensionZipǽ flak pocket and 3
									layer Gore-Tex® Pro fabric technology. J1A-GTKR-BKS can be
									identified by its high-gloss WR zippers, unique dual tone flak
									pocket TensionZipǽ, and its limited release Hangul ǍCROŇYMř
									logo tape.
								</Text>
								<Text>
									*J1A was the first ever jacket designed by ǍCROŇYMř.
									Originally conceived in the years between 1999 and 2001, it is
									the progenitor of the Type 2371**, and of every other ǍCROŇYMř
									jacket that has followed.
								</Text>
								<Text>
									J1A-GT is the culmination of everything we have learned about
									building apparel since that time.{' '}
								</Text>
							</Item>
							<Item>
								<Title>CARE SPECIFICATION</Title>
								<Text>
									Should be ironed at a temperature between 180°C - 210°C
								</Text>
								<Text>
									Can be dry cleaned / Use solvent of perchloroethylene or of
									petroleum based solvent
								</Text>
								<Text>
									Hang dry / Tumble dry possible / Normal drying cycle
								</Text>
							</Item>
						</Content>
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
					<MainRightContent>
						<Position>
							{currentSlide}/{slides}
						</Position>
						<Swiper
							modules={[Mousewheel]}
							mousewheel={{ releaseOnEdges: true }}
							direction={'horizontal'}
							spaceBetween={50}
							slidesPerView={1}
							scrollbar={{ draggable: true }}
							onSlideChange={swiper => {
								swiper.activeIndex === swiper.slides.length - 1
									? setLastSlide(true)
									: setLastSlide(false);
								swiper.activeIndex === 0
									? setFirstSlide(true)
									: setFirstSlide(false);
							}}
							onSlidePrevTransitionStart={() => {
								setCurrentSlide(prev =>
									prev <= 10 ? '0' + (Number(prev) - 1) : Number(prev) - 1
								);
							}}
							onSlideNextTransitionStart={() => {
								setCurrentSlide(prev =>
									prev < 9 ? '0' + (Number(prev) + 1) : Number(prev) + 1
								);
							}}
						>
							{curProd.imgSlider?.map(item => (
								<SwiperSlide>
									<Image key={`${curProd.id}${time}`} src={item} alt='Nerv' />
								</SwiperSlide>
							))}
							<SwiperButtonPrev />
							<SwiperButtonNext />
						</Swiper>
						<Corner>
							<CornerTop>
								<p>MODEL M SIZE</p>
								<p>180 CM TALL</p>
								<p>360* AVAILIBLE</p>
							</CornerTop>
							<CornerBottom>
								<span>OPTICAL ZOOM</span>
								<Plus viewBox='0 0 38 38' onClick={() => handleShowImage()}>
									<path d='M37.88 37.6899H31.63V37.09H37.28V31.4399H37.88V37.6899Z' />
									<path d='M23.5 37.0901H15.37V37.6901H23.5V37.0901Z' />
									<path d='M7.22998 37.6899H0.98999V31.4399H1.57996V37.09H7.22998V37.6899Z' />
									<path d='M1.58997 15.1699H0.98999V23.2999H1.58997V15.1699Z' />
									<path d='M1.57996 7.04004H0.98999V0.790039H7.22998V1.39008H1.57996V7.04004Z' />
									<path d='M23.5 0.790039H15.37V1.39008H23.5V0.790039Z' />
									<path d='M37.88 7.04004H37.28V1.39008H31.63V0.790039H37.88V7.04004Z' />
									<path d='M37.88 15.1799H37.28V23.3099H37.88V15.1799Z' />
									<path d='M19.76 10.4399H19.3101V26.84H19.76V10.4399Z' />
									<path d='M27.9301 18.3301H11.53V18.7801H27.9301V18.3301Z' />
								</Plus>
							</CornerBottom>
						</Corner>
					</MainRightContent>
				</MainRight>
			</MainWrapper>
		</>
	);
};
