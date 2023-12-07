import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from '../interface/Nav';
import { Error } from '../components/OrderStatus/Error';
import { Socials } from '../interface/Socials';

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	max-width: 192rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 1100px) {
		height: calc(100vh - 10rem);
	}

	@media screen and (max-width: 567px) {
		height: calc(100vh - 11rem);
	}
`;

const Block = styled.div`
	display: flex;
	height: 100%;
`;

const Aside = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	margin-top: -3.7rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const AsideTop = styled.div`
	height: 5rem;
	width: 100%;
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
			& > div {
				&:last-child {
					& > div {
						&:first-child {
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

export const OrderError = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Wrapper>
			<Block>
				<Aside>
					<AsideTop />
					<AsideMiddle>
						<span>CORPORATION</span>
					</AsideMiddle>
				</Aside>
				<Right>
					<Nav>
						<Link to='/'>Main</Link>
						<span>&gt;</span>
						<Link to='/terms'>ORDER ERROR</Link>
					</Nav>
					<Group>
						<Error />
						<Socials />
					</Group>
				</Right>
			</Block>
		</Wrapper>
	);
};
