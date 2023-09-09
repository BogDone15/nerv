import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Slider } from '../../interface/Slider';

const Wrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
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
		height: 2px;
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
	const [slides, setSlides] = useState([]);
	const [lastSlide, setLastSlide] = useState(false);
	const [firstSlide, setFirstSlide] = useState(true);
	const [currentSlide, setCurrentSlide] = useState('01');

	useEffect(() => {
		curProd?.length <= 9
			? setSlides('0' + curProd.length)
			: setSlides(curProd?.length);
	}, [curProd?.length]);

	const handleClickClose = () => {
		setShowZoomImage(false);
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
			<Slider
				arrowWidth='20px'
				arrowHeight='27px'
				curProd={curProd}
				firstSlide={firstSlide}
				lastSlide={lastSlide}
				setLastSlide={setLastSlide}
				setFirstSlide={setFirstSlide}
				setCurrentSlide={setCurrentSlide}
			/>
			<Position>
				{currentSlide}/{slides}
			</Position>
		</Wrapper>
	);
};
