import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { dataItems } from '../../data';
import { Link } from 'react-router-dom';

const GearWrapper = styled.div`
	position: relative;
	border-left: 1px solid ${props => props.theme.colorBorder};
	max-width: 40.9rem;
	width: 100%;
	height: 100%;
	&:after {
		position: absolute;
		content: '';
		right: 0.8rem;
		top: 0;
		width: 1px;
		height: 100%;
		background: ${props => props.theme.colorBorder};
		@media screen and (max-width: 1100px) {
			display: none;
		}
	}
	@media screen and (max-width: 1100px) {
		order: 4;
		max-width: 100%;
		width: 30%;
		border-left: unset;
	}
	@media screen and (max-width: 567px) {
		width: 100%;
	}
`;

const GearTop = styled.div`
	height: 7.8rem;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.8rem;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	padding-left: 2rem;
	color: #000000;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const GearMainView = styled.span`
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.8rem;
	text-transform: uppercase;
	margin-bottom: 1rem;
	padding-left: 2.1rem;
	& > span {
		color: ${props => props.theme.colorGray};
	}
	@media screen and (max-width: 567px) {
		font-size: 1.9rem;
	}
`;

const GearMain = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.7rem 0 1rem 0;
	height: calc(100% - 7.8rem);
	@media screen and (max-width: 1100px) {
		height: 100%;
	}
`;

const GearBlock = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 1.8rem;
	padding: 1rem 1.7rem 0 2.1rem;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		gap: 2rem;
		padding: 1rem 1.5rem 0 2.1rem;
	}
	@media screen and (max-width: 567px) {
		padding-top: 3rem;
		gap: 4rem;
	}
`;

const GearCover = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 1.5rem 1.5rem;
	opacity: ${props => (props.activeitem ? '1' : ' 0.5')};
	width: 100%;
	height: 100%;
	transition: all 0.2s ease;
	@media screen and (max-width: 1100px) {
		max-width: 17.9rem;
		width: 100%;
		height: 17.9rem;
		margin: auto;
	}
	@media screen and (max-width: 567px) {
		height: auto;
		max-width: 42rem;
	}
`;

const Image = styled.img`
	max-width: 95%;
	padding-left: 0.6rem;
`;

const GearStatus = styled.div`
	position: absolute;
	top: -0.65rem;
	right: 0.5rem;
	height: 1.4rem;
	width: 6.7rem;
	background: ${props => props.theme.colorMain};
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	& > span {
		font-weight: 450;
		font-size: 1rem;
		line-height: 1.3rem;
		color: #adadad;
		text-transform: uppercase;
	}
	@media screen and (max-width: 567px) {
		top: -1.65rem;
		height: 3.4rem;
		width: 17.7rem;
		& > span {
			font-size: 2rem;
		}
	}
`;

const GearAside = styled.div`
	position: absolute;
	left: -0.65rem;
	top: 0;
	width: 1.4rem;
	height: 100%;
	background: ${props => props.theme.colorMain};
	opacity: ${props => (props.activeitem ? '1' : ' 0')};
	transition: all 0.2s ease;
	@media screen and (max-width: 1100px) {
		height: 17.9rem;
	}
	@media screen and (max-width: 567px) {
		display: none;
	}
`;

const glitchAfter = keyframes`
  0% {
    clip: rect(104px, 450px, 106px, 0)
  }
  5.88235% {
    clip: rect(48px, 450px, 59px, 0)
  }
  11.76471% {
    clip: rect(79px, 450px, 62px, 0)
  }
  17.64706% {
    clip: rect(93px, 450px, 40px, 0)
  }
  23.52941% {
    clip: rect(78px, 450px, 35px, 0)
  }
  29.41176% {
    clip: rect(23px, 450px, 68px, 0)
  }
  35.29412% {
    clip: rect(45px, 450px, 38px, 0)
  }
  41.17647% {
    clip: rect(45px, 450px, 14px, 0)
  }
  47.05882% {
    clip: rect(92px, 450px, 104px, 0)
  }
  52.94118% {
    clip: rect(3px, 450px, 45px, 0)
  }
  58.82353% {
    clip: rect(84px, 450px, 24px, 0)
  }
  64.70588% {
    clip: rect(112px, 450px, 6px, 0)
  }
  70.58824% {
    clip: rect(49px, 450px, 94px, 0)
  }
  76.47059% {
    clip: rect(30px, 450px, 39px, 0)
  }
  82.35294% {
    clip: rect(55px, 450px, 92px, 0)
  }
  88.23529% {
    clip: rect(105px, 450px, 112px, 0)
  }
  94.11765% {
    clip: rect(58px, 450px, 98px, 0)
  }
  100% {
    clip: rect(68px, 450px, 103px, 0)
  }
`;

const glitchBefore = keyframes`
0% {
    clip: rect(86px, 450px, 73px, 0)
  }
  5.88235% {
    clip: rect(25px, 450px, 3px, 0)
  }
  11.76471% {
    clip: rect(56px, 450px, 38px, 0)
  }
  17.64706% {
    clip: rect(86px, 450px, 48px, 0)
  }
  23.52941% {
    clip: rect(19px, 450px, 16px, 0)
  }
  29.41176% {
    clip: rect(88px, 450px, 3px, 0)
  }
  35.29412% {
    clip: rect(45px, 450px, 71px, 0)
  }
  41.17647% {
    clip: rect(84px, 450px, 61px, 0)
  }
  47.05882% {
    clip: rect(114px, 450px, 27px, 0)
  }
  52.94118% {
    clip: rect(15px, 450px, 114px, 0)
  }
  58.82353% {
    clip: rect(26px, 450px, 72px, 0)
  }
  64.70588% {
    clip: rect(54px, 450px, 28px, 0)
  }
  70.58824% {
    clip: rect(89px, 450px, 107px, 0)
  }
  76.47059% {
    clip: rect(95px, 450px, 81px, 0)
  }
  82.35294% {
    clip: rect(109px, 450px, 31px, 0)
  }
  88.23529% {
    clip: rect(82px, 450px, 16px, 0)
  }
  94.11765% {
    clip: rect(83px, 450px, 3px, 0)
  }
  100% {
    clip: rect(49px, 450px, 52px, 0)
  }
`;

const GearItem = styled.div`
	position: relative;
	background: ${props => props.theme.colorBorder};
	max-width: 17rem;
	width: 100%;
	height: 17rem;
	cursor: pointer;
	pointer-events: ${props => (props.absent ? 'none' : 'auto')};

	&:hover {
		${GearCover} {
			opacity: 1;
		}

		${GearAside} {
			opacity: 1;
		}
	}

	& > a {
		display: none;
	}

	@media (max-width: 1100px) {
		max-width: 100%;
		height: auto;
		& > a {
			position: relative;
			padding: 0.5rem 2.2rem 0.5rem 1rem;
			background: ${props => props.theme.colorMain};
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.3rem;

			& > span {
				width: 50%;
				font-weight: 450;
				font-size: 1rem;
				line-height: 1.8rem;
				color: #adadad;
				text-transform: uppercase;
				&:nth-child(2) {
					text-align: right;
				}
			}
			&::before,
			&::after {
				content: attr(data-text);
				position: absolute;
				top: 0px;
				width: 100%;
				height: 100%;
				clip: rect(0, 0, 0, 0);
				background: #000;
				color: #cecece;
			}
			&::after {
				left: 2px;
				text-shadow: -1px 0 #cecece;
				box-shadow: -1px 0 #cecece;
			}
			&::before {
				left: -2px;
				text-shadow: 2px 0 #cecece;
				box-shadow: 2px 0 #cecece;
			}
			&:hover {
				&::after {
					animation: ${glitchAfter} 2s infinite linear alternate-reverse;
				}
				&:before {
					animation: ${glitchBefore} 3s infinite linear alternate-reverse;
				}
			}
		}
	}
	@media screen and (max-width: 567px) {
		& > a {
			padding: 2rem 5.6rem 2rem 2rem;
			& > span {
				font-size: 2rem;
				line-height: 2.2rem;
			}
			& > svg {
				right: 2rem;
				transform: translateY(-62%);
				width: 1.4rem;
				height: 2.3rem;
			}
		}
	}
`;

const IconArrow = styled.svg`
	position: absolute;
	right: 1rem;
	top: 50%;
	transform: translateY(-50%);
	width: 0.6rem;
	height: 1.5rem;
	fill: none;
	& > path {
		fill: #adadad;
		transition: all 0.2s ease;
	}
`;

export const Gear = ({ itemType, activeitem, setActiveitem }) => {
	const [filterItems, setFilterItems] = useState([]);

	useEffect(() => {
		const result = dataItems.filter(item => item.model === itemType);
		setFilterItems(result);
	}, [itemType]);

	const handleClick = id => {
		setActiveitem(id);
	};

	return (
		<GearWrapper>
			<GearTop>GEAR ENGINEERING</GearTop>
			<GearMain>
				<GearMainView>
					<span>MODEL LINE</span> [ {itemType} ]
				</GearMainView>
				<GearBlock>
					{filterItems.map(item => (
						<GearItem
							key={item.id}
							absent={item.availability === 'soon' ? true : false}
							onClick={() => handleClick(item.id)}
						>
							<GearStatus>
								<span>{item.availability}</span>
							</GearStatus>
							<GearCover activeitem={item.id === activeitem ? true : false}>
								<GearAside activeitem={item.id === activeitem ? true : false} />
								<Image src={item.imgMain} alt='Nerv' />
							</GearCover>
							<Link
								to={`/character/${item.name.replace(/ /gi, '-').toLowerCase()}`}
							>
								<span>{item.name}</span>
								<span>{item.price}.00 EUR</span>
								<IconArrow viewBox='0 0 12 21'>
									<path d='M3.5 0.75H0.689941V3.56H3.5V0.75Z' />
									<path d='M6.31006 3.56006H3.5V6.37006H6.31006V3.56006Z' />
									<path d='M9.12988 6.38H6.31982V9.19H9.12988V6.38Z' />
									<path d='M11.9398 9.18994H9.12988V11.9999H11.9398V9.18994Z' />
									<path d='M9.12988 12H6.31982V14.81H9.12988V12Z' />
									<path d='M6.31006 14.8101H3.5V17.6201H6.31006V14.8101Z' />
									<path d='M3.5 17.63H0.689941V20.44H3.5V17.63Z' />
								</IconArrow>
							</Link>
						</GearItem>
					))}
				</GearBlock>
			</GearMain>
		</GearWrapper>
	);
};
