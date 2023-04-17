import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Successfull } from '../components/OrderStatus/Successfull';
import { Socials } from '../components/Socials';

const Wrapper = styled.div`
	height: calc(100vh - 4rem);
	max-width: 192rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	@media screen and (max-width: 1100px) {
		height: calc(100vh - 7rem);
	}
`;

const Block = styled.div`
	display: flex;
	height: 100%;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
`;

const Aside = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	margin-top: 0.9rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const AsideTop = styled.div`
	height: 5rem;
	width: 100%;
	border-top: 1px solid ${props => props.theme.colorBorder};
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	margin-top: 3.7rem;
`;

const AsideMiddle = styled.div`
	height: calc(100% - 9.7rem);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	& > span {
		font-weight: 400;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #878787;
		transform: rotate(-180deg);
		writing-mode: vertical-lr;
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 4.5rem);
	height: 100%;
	@media screen and (max-width: 1100px) {
		width: 100%;
		& > div {
			&:nth-child(3) {
				& > div {
					&:last-child {
						& > div {
							&:first-child {
								display: none;
							}
						}
					}
				}
			}
		}
	}
`;

const GearPreview = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	margin-top: 0.9rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Group = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	@media screen and (max-width: 1100px) {
		margin-bottom: 20.8rem;
	}
`;

export const OrderGranted = () => {
	return (
		<Wrapper>
			<Block>
				<Aside>
					<AsideTop />
					<AsideMiddle>
						<span>CORPORATION</span>
					</AsideMiddle>
				</Aside>
				<GearPreview>
					<AsideTop />
				</GearPreview>
				<Right>
					<Header />
					<Nav>
						<Link to='/'>Main</Link>
						<span>&gt;</span>
						<Link to='/terms'>ORDER GRANTED</Link>
					</Nav>
					<Group>
						<Successfull />
						<Socials />
					</Group>
				</Right>
			</Block>
			<Footer />
		</Wrapper>
	);
};
