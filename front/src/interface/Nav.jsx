import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { ShuffleLetters } from './ShuffleLetters';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top-right-radius: 3rem;
	@media screen and (max-width: 1100px) {
		position: relative;
		margin-top: 1.3rem;
		padding-left: 0;
	}
`;

const Left = styled.div`
	position: relative;
	width: 30%;
	height: 5rem;
	display: flex;
	align-items: center;
	padding: 0rem 1rem 0 6rem;
	border-top: 1px solid ${props => props.theme.colorBorder};
	border-bottom: 1px solid ${props => props.theme.colorBorder};

	&:before {
		position: absolute;
		left: calc(-4.3rem - 2px);
		top: -1px;
		content: '';
		background: ${props => props.theme.colorBorder};
		height: 1px;
		width: 4.5rem;
	}

	&:after {
		position: absolute;
		left: calc(-4.3rem - 2px);
		bottom: -1px;
		content: '';
		background: ${props => props.theme.colorBorder};
		height: 1px;
		width: 4.5rem;
	}

	& > a {
		display: block;
		max-width: 22rem;
		width: 100%;
	}
	@media screen and (max-width: 1100px) {
		width: 45%;
		height: 6rem;
	}
	@media screen and (max-width: 567px) {
		height: 6.2rem;
		width: 48%;
		padding-left: 5rem;
		& > a {
			max-width: 24rem;
		}
	}
`;

const Image = styled.img``;

const Right = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 3.5rem;
	height: 5rem;
	padding-top: 0.2rem;
	padding-left: 4.6rem;
	padding-right: ${props => props.paddingRight};
	border-top-right-radius: 3rem;
	background: ${props => props.theme.colorMain};
	@media screen and (max-width: 1100px) {
		width: 55%;
		height: 6rem;
		justify-content: flex-end;
	}
	@media screen and (max-width: 567px) {
		height: 6.2rem;
		width: 52%;
	}
`;

const RightNav = styled.div`
	display: flex;
	align-items: center;
	& > a {
		position: relative;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 2.2rem;
		color: ${props => props.theme.colorGray};
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.2s ease;

		&:hover {
			opacity: 0.7;
		}
	}

	& > span {
		font-weight: 500;
		font-size: 1.7rem;
		line-height: 2.2rem;
		color: ${props => props.theme.colorGray};
		text-transform: uppercase;
		margin: 0 1rem;
	}

	@media screen and (max-width: 1100px) {
		position: absolute;
		left: 5.4rem;
		top: 8rem;
		z-index: 5;
		& > a {
			font-size: ${props => props.theme.fontsm};
			color: ${props => props.theme.colorBlack};
		}
	}
	@media screen and (max-width: 567px) {
		top: 8.6rem;

		& > a {
			font-size: 1.7rem;
		}
	}
`;

const RightLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 3.5rem;
	& > a {
		position: relative;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 2.2rem;
		color: ${props => props.theme.colorGray};
		text-transform: uppercase;
		transition: all 0.2s ease;
		&:first-child {
		}

		&:last-child {
			&:hover {
				opacity: 0.7;
			}
		}
		@media screen and (max-width: 1100px) {
			font-size: 2.1rem;
		}
		@media screen and (max-width: 567px) {
			font-size: 2.3rem;
		}
	}
`;

export const Nav = ({ children }) => {
	const [paddingRight, setPaddingRight] = useState('4.2rem');
	const cart = useSelector(state => state.cart);

	useEffect(() => {
		cart.products.length > 0
			? setPaddingRight('5.2rem')
			: setPaddingRight('4.2rem');
	}, [cart.products.length]);

	return (
		<Wrapper>
			<Left>
				<Link to='/'>
					<Image src={logo} alt='Nerv' />
				</Link>
			</Left>
			<Right paddingRight={paddingRight}>
				<RightNav>{children}</RightNav>
				<RightLinks>
					<Link to='/interface'>
						<ShuffleLetters text='Enter' />
					</Link>
					<Link to='/order'>
						{cart.products.length === 0 ? (
							<span>Cart</span>
						) : (
							<span>[{cart.products.length}]</span>
						)}
					</Link>
				</RightLinks>
			</Right>
		</Wrapper>
	);
};
