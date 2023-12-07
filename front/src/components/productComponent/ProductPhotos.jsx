import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Slider } from '../../interface/Slider';

const MainRightContent = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	/* width: calc(100% - 4.1rem); */
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
	z-index: 2;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.7rem;
	color: ${props => props.theme.colorBlack};
	@media screen and (max-width: 567px) {
		font-size: 1.5rem;
		line-height: 2rem;
	}
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
	display: none;
	/* display: flex; */
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

export const ProductPhotos = ({ curProd, setShowZoomImage, modelTypeInfo }) => {
	const [currentSlide, setCurrentSlide] = useState('01');
	const [slides, setSlides] = useState([]);
	const [lastSlide, setLastSlide] = useState(false);
	const [firstSlide, setFirstSlide] = useState(true);

	useEffect(() => {
		curProd.imgSlider?.length <= 9
			? setSlides('0' + curProd.imgSlider.length)
			: setSlides(curProd.imgSlider?.length);
	}, [curProd.imgSlider?.length]);

	return (
		<MainRightContent>
			<Position>
				{currentSlide}/{slides}
			</Position>
			<Slider
				arrowWidth='9px'
				arrowHeight='16px'
				curProd={curProd.imgSlider}
				firstSlide={firstSlide}
				lastSlide={lastSlide}
				setLastSlide={setLastSlide}
				setFirstSlide={setFirstSlide}
				setCurrentSlide={setCurrentSlide}
			/>
			<Corner>
				<CornerTop>
					{modelTypeInfo?.split('\n').map((item, index) => (
						<p key={item + index}>{item}</p>
					))}
				</CornerTop>
				<CornerBottom>
					<span>OPTICAL ZOOM</span>
					<Plus viewBox='0 0 38 38' onClick={() => setShowZoomImage(true)}>
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
	);
};
