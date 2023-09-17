import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dataItems } from '../../data';
import { Status } from '../../interface/Status';
import { Slider } from '../../interface/Slider';
import { ShuffleLetters } from '../../interface/ShuffleLetters';

const Wrapper = styled.div`
	position: relative;
	max-width: calc(100% - 120rem);
	width: 100%;
	height: 100%;
	border-left: 1px solid ${props => props.theme.colorBorder};
	border-right: 1px solid ${props => props.theme.colorBorder};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 3rem;
	@media screen and (max-width: 1100px) {
		width: 48%;
		max-width: 100%;
		padding-top: 3rem;
		& > div {
			&:nth-of-type(1) {
				display: none;
			}
		}
	}
	@media screen and (max-width: 567px) {
		display: none;
	}
`;

const TabletViewGear = styled.div`
	display: none;
	@media screen and (max-width: 1100px) {
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 3rem;
		border-bottom: 1px solid ${props => props.theme.colorBorder};
		padding-left: 1.7rem;
		padding-top: 0.6rem;
		font-weight: ${props => (props.showAllGear ? '900' : '600')};
		font-size: 1.3rem;
		line-height: 1.7rem;
		cursor: pointer;

		& > span {
			color: ${props => props.theme.colorMain};
			/* text-decoration: ${props =>
				props.showAllGear ? 'underline' : 'none'}; */
		}

		&:hover {
			& > span {
				/* text-decoration: underline; */
				font-weight: 900;
			}
		}
	}
`;

const Text = styled.p`
	position: absolute;
	left: 3.4rem;
	top: 2.8rem;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 18px;
	color: ${props => props.theme.colorMain};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Cover = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	& > div {
		height: 100%;
	}
`;

export const Appearance = ({
	activeitem,
	setActiveelement,
	setShowAllGear,
	showAllGear,
}) => {
	const [productSlides, setProductSlides] = useState([]);
	const [lastSlide, setLastSlide] = useState(false);
	const [firstSlide, setFirstSlide] = useState(true);
	const [currentSlide, setCurrentSlide] = useState('01');

	useEffect(() => {
		const result = dataItems.find(item => item.id === activeitem);
		result && setProductSlides(result);
	}, [activeitem]);

	const viewAllGear = () => {
		setShowAllGear(true);
		setActiveelement();
	};

	return (
		<>
			<Wrapper>
				<Text>APPEARANCE</Text>
				<Status status='online' color='#00c70a' />
				<TabletViewGear onClick={() => viewAllGear()} showAllGear={showAllGear}>
					{/* <span>VIEW ALL GEAR</span> */}
					<span>
						<ShuffleLetters text='VIEW ALL GEAR' />
					</span>
				</TabletViewGear>
				<Cover>
					<Slider
						arrowWidth='9px'
						arrowHeight='16px'
						curProd={productSlides.imgAppearance}
						firstSlide={firstSlide}
						lastSlide={lastSlide}
						setLastSlide={setLastSlide}
						setFirstSlide={setFirstSlide}
						setCurrentSlide={setCurrentSlide}
					/>
				</Cover>
			</Wrapper>
		</>
	);
};
