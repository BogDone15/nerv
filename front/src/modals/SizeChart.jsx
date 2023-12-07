import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
	position: fixed;
	right: 0;
	top: 10.4rem;
	z-index: 10;
	width: 100%;
	max-width: 54rem;
	@media screen and (max-width: 1100px) {
		top: 0;
		max-width: 100%;
	}
`;

const Info = styled.div`
	display: flex;
	align-items: center;
	gap: 3.9rem;
	background: ${props => props.theme.colorMain};
	font-weight: 400;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.8rem;
	color: #9b9b9b;
	padding: 1rem 0 0.8rem 3.8rem;

	& > span {
		font-weight: 400;
		font-size: ${props => props.theme.fontsm};
		line-height: 2.5rem;
		color: #9b9b9b;
	}
	@media screen and (max-width: 1100px) {
		padding: 2rem 0 1.7rem 3.8rem;
		& > span {
			font-size: 2.1rem;
		}
		@media screen and (max-width: 567px) {
			& > span {
				font-size: 1.9rem;
			}
		}
	}
`;

const WrapperTop = styled.div`
	position: relative;
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	& > span {
		text-transform: uppercase;
		font-weight: 300;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #282828;
		margin-bottom: 0.3rem;
		&:last-child {
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 1100px) {
		& > span {
			font-size: 2.1rem;
			margin-bottom: 1rem;
		}
	}
	@media screen and (max-width: 567px) {
		& > span {
			font-size: 1.9rem;
		}
	}
`;

const Close = styled.div`
	position: absolute;
	right: 1rem;
	top: 0.8rem;
	width: 3rem;
	height: 3rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	& > span {
		width: 100%;
		height: 2px;
		background: ${props => props.theme.colorGray};
		transform: translateX(0.8rem) rotate(-45deg);
		transition: all 0.2s ease;
		&:last-child {
			transform: translateX(-0.7rem) rotate(45deg);
		}
	}
	&:hover {
		& > span {
			background: #fff;
		}
	}
	@media screen and (max-width: 1100px) {
		width: 4rem;
		height: 4rem;
		top: 1.2rem;
		& > span {
			transform: translateX(1.2rem) rotate(-45deg);
		}
	}
`;

const WrapperMain = styled.div`
	background: #c5c3c3;
	width: 100%;
	height: 100%;
`;

const WrapperBlock = styled.div`
	max-width: 42.5rem;
	width: 100%;
	height: 100%;
	padding: 3.2rem 0 5.2rem;
	margin: auto;
	@media screen and (max-width: 1100px) {
		padding: 2.2rem 0 3.2rem;
		max-width: 55.5rem;
	}
	@media screen and (max-width: 567px) {
		& > span {
			padding: 2rem 0 3rem;
		}
	}
`;

const Parameters = styled.div`
	margin-bottom: 3rem;

	& > span {
		font-weight: 300;
		font-size: ${props => props.theme.fontsm};
		line-height: 2.3rem;
		color: #282828;
	}
	@media screen and (max-width: 1100px) {
		& > span {
			font-size: 2.3rem;
		}
	}
	@media screen and (max-width: 567px) {
		margin-bottom: 2.5rem;
		& > span {
			font-size: 2rem;
		}
	}
`;

const BLock = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 4rem;
`;

export const SizeChart = ({ showmodalsize, setShowmodalSize }) => {
	const [curProdSizeChart, setCurProdSizeChart] = useState([]);
	const location = useLocation();
	const pathName = location.pathname.split('/')[2];

	const data = useSelector(state => state.data);

	useEffect(() => {
		const curProd = data.find(
			item => item.name.replace(/ /gi, '-').toLowerCase() === pathName
		);
		setCurProdSizeChart(curProd.sizeChart);
	}, [data, pathName]);

	return (
		<Wrapper
			showmodal={showmodalsize ? 1 : 0}
			initial={{ x: 450 }}
			animate={{ x: 0 }}
			transition={{ delay: 0.1, ease: 'easeOut' }}
			exit={{ x: 450 }}
		>
			<WrapperTop>
				<Info>
					<span>/start</span> <span>size guide</span>
				</Info>
				<Close onClick={() => setShowmodalSize(false)}>
					<span></span>
					<span></span>
				</Close>
			</WrapperTop>
			<WrapperMain>
				<WrapperBlock>
					<Parameters>
						<span>/parameters</span>
					</Parameters>
					<BLock>
						{curProdSizeChart.map((item, index) => (
							<Item key={index + item[0]}>
								{item.map((size, index) => (
									<span key={size[0] + index}>{size}</span>
								))}
							</Item>
						))}
					</BLock>
				</WrapperBlock>
			</WrapperMain>
		</Wrapper>
	);
};
