import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

const Wrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10;
	width: calc(100% - 10rem - 1px);
	height: calc(100%);
	background: #cecece;
	opacity: ${props => (props.showZoomImage ? '1' : '0')};
	pointer-events: ${props => (props.showZoomImage ? 'auto' : 'none')};
	transform: scale(${props => (props.showZoomImage ? '1' : '0')});
	transition: all 0.2s ease;
	& > div {
		&:nth-child(2) {
			width: calc(100% - 7rem);
			height: 100%;
			margin-left: 7rem;
			overflow: hidden;
		}
	}
`;
const ArrowPrev = styled.svg`
	position: absolute;
	left: 3.5rem;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	cursor: pointer;
	width: 18px;
	height: 32px;
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
	width: 18px;
	height: 32px;
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

const Image = styled.img`
	max-width: 100%;
	height: 100%;
`;

const Position = styled.div`
	position: absolute;
	right: 4rem;
	top: 2.6rem;
	font-weight: 400;
	font-size: ${props => props.theme.fontmd};
	line-height: 1.7rem;
	color: ${props => props.theme.colorBlack};
`;

const Group = styled.div`
	position: absolute;
	left: 5rem;
	bottom: 0;
	z-index: 11;
	width: 4rem;
	height: 100%;
	/* @media screen and (max-width: 2300px) {
		width: 3rem;
	}
	@media screen and (max-width: 1920px) {
		width: 2rem;
	} */
`;

const GroupBlock = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const Close = styled.div`
	position: absolute;
	left: -2rem;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	width: 5rem;
	height: 5rem;
	cursor: pointer;
	& > span {
		background: ${props => props.theme.colorBorder};
		width: 100%;
		height: 1px;
		transform: translateX(0.6rem) rotate(45deg);
		transition: all 0.2s ease;
		&:last-child {
			transform: translateX(-1.9rem) rotate(-45deg);
		}
	}
	&:hover {
		& > span {
			background: ${props => props.theme.colorBlack};
		}
	}
`;

const Line = styled.svg`
	position: absolute;
	left: 0;
	bottom: 0;
	pointer-events: none;
	width: 100%;
	height: 100%;
	fill: none;
`;

export const ZoomImage = ({ showZoomImage, setShowZoomImage, curProd }) => {
	const [slides, setSlides] = useState('');
	const [lastSlide, setLastSlide] = useState(false);
	const [firstSlide, setFirstSlide] = useState(true);
	const [currentSlide, setCurrentSlide] = useState('01');

	useEffect(() => {
		curProd.imgSliderZoom?.length <= 9
			? setSlides('0' + curProd.imgSliderZoom.length)
			: setSlides(curProd.imgSliderZoom?.length);
	}, [curProd.imgSliderZoom?.length]);

	const handleClickClose = () => {
		setShowZoomImage(false);
	};

	const SwiperButtonPrev = () => {
		const swiper = useSwiper();
		const handleClickPrev = () => {
			swiper.slidePrev();
			setCurrentSlide(prev =>
				prev <= 10 ? '0' + (Number(prev) - 1) : Number(prev) - 1
			);
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
			setCurrentSlide(prev =>
				prev < 9 ? '0' + (Number(prev) + 1) : Number(prev) + 1
			);
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
		<Wrapper showZoomImage={showZoomImage}>
			<Group>
				<GroupBlock>
					<Close onClick={() => handleClickClose()}>
						<span></span>
						<span></span>
					</Close>
					<Line viewBox='0 0 20 892'>
						<path
							opacity='0.2'
							d='M0.660034 0.189941L0.810028 318.9L19.16 348.37V534.37L0.810028 559.85V891.92'
							stroke='#191919'
							strokeMiterlimit='10'
						/>
					</Line>
				</GroupBlock>
			</Group>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				scrollbar={{ draggable: true }}
				onSlideChange={swiper => {
					swiper.activeIndex === swiper.slides.length - 1
						? setLastSlide(true)
						: setLastSlide(false);
					swiper.activeIndex === 0 ? setFirstSlide(true) : setFirstSlide(false);
				}}
			>
				<Position>
					{currentSlide}/{slides}
				</Position>
				{curProd.imgSliderZoom?.map(item => (
					<SwiperSlide>
						<Image key={curProd.id} src={item} alt='Nerv' />
					</SwiperSlide>
				))}
				<SwiperButtonPrev />
				<SwiperButtonNext />
			</Swiper>
		</Wrapper>
	);
};
