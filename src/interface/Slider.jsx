import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { Mousewheel } from 'swiper';
import styled from 'styled-components';

const Image = styled.img`
	max-width: 100%;
	height: 100%;
	object-position: center;
	object-fit: contain;
`;

const ArrowPrev = styled.svg`
	position: absolute;
	left: 2.5rem;
	top: 50%;
	transform: translateY(-50%);
	z-index: 2;
	cursor: pointer;
	width: ${props => props.arrowWidth};
	height: ${props => props.arrowHeight};
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
	width: ${props => props.arrowWidth};
	height: ${props => props.arrowHeight};
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

export const Slider = ({
	firstSlide,
	lastSlide,
	setLastSlide,
	setFirstSlide,
	setCurrentSlide,
	curProd,
	arrowWidth,
	arrowHeight,
}) => {
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
				arrowWidth={arrowWidth}
				arrowHeight={arrowHeight}
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
				arrowWidth={arrowWidth}
				arrowHeight={arrowHeight}
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
				swiper.activeIndex === 0 ? setFirstSlide(true) : setFirstSlide(false);
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
			{curProd?.map((item, index) => (
				<SwiperSlide key={item + index}>
					<Image src={item} alt='Nerv' />
				</SwiperSlide>
			))}
			<SwiperButtonPrev />
			<SwiperButtonNext />
		</Swiper>
	);
};
