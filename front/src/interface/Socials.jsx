import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { socialDecorIcon } from '../data';
import { useEffect } from 'react';
import apiCallsService from '../services/apiCalls.service';
import { useState } from 'react';

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	max-width: 10rem;
	width: 100%;
	height: 100%;
	padding-right: 0.4rem;
	border-left: 1px solid ${props => props.theme.colorBorder};
	border-right: 1px solid ${props => props.theme.colorBorder};

	& > span {
		position: absolute;
		right: 7.1rem;
		top: 4.2rem;
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
		width: 100%;
		color: ${props => props.theme.colorGray};
		writing-mode: vertical-lr;
		transform: rotate(-180deg);
		pointer-events: none;
	}
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Block = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	gap: 3.6rem;
	border: 1px solid ${props => props.theme.colorBorder};
	padding: 3.9rem 0.8rem 1.4rem;
	margin-bottom: 1.8rem;
`;

const Left = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	gap: 1.5rem;
	& > svg {
		width: 4.5rem;
		height: 5.8rem;
		fill: none;
		cursor: pointer;
		& > path {
			fill: ${props => props.theme.colorGray};
			transition: all 0.2s ease;
		}

		&:hover {
			& > path {
				fill: ${props => props.theme.colorMain};
			}
		}
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	& > a {
		display: none;
		/* display: block; */
		max-width: 2.6rem;
		width: 100%;
		& > svg {
			fill: ${props => props.theme.colorGray};
			width: 100%;
			height: 100%;
			transition: all 0.2s ease;
		}

		&:first-child {
			display: block;
			max-width: 2.6rem;
			width: 100%;
		}

		&:last-child {
			max-width: 2.8rem;
			width: 100%;
		}
		&:hover {
			& > svg {
				fill: ${props => props.theme.colorMain};
			}
		}
	}
`;

const Text = styled.p`
	writing-mode: vertical-rl;
	font-size: ${props => props.theme.fontxsm};
	color: ${props => props.theme.colorGray};
	text-transform: uppercase;
	transform: rotate(180deg);
`;

const SocialsLine = styled.div`
	position: absolute;
	right: 0.5rem;
	bottom: 0;
	height: 97%;
`;

const SocialsLineBlock = styled.div`
	position: relative;
	width: 1px;
	height: 100%;
	background: ${props => props.theme.colorBorder};
	&:after {
		position: absolute;
		content: '';
		top: 0;
		right: 0;
		width: 3.1rem;
		height: 1px;
		background: ${props => props.theme.colorBorder};
	}
`;

const SocialsLineMain = styled.div``;

export const Socials = () => {
	const [socials, setSocials] = useState([]);

	useEffect(() => {
		async function fetchSocialsData() {
			const response = await apiCallsService.getSocialsRequest();

			if (response.error) {
				return;
			}
			setSocials(response);
		}

		fetchSocialsData();
	}, []);

	return (
		<Wrapper>
			<span>MEDIA COMMUNITY</span>
			<SocialsLine>
				<SocialsLineBlock>
					<SocialsLineMain />
				</SocialsLineBlock>
			</SocialsLine>
			<Block>
				<Left>
					{socialDecorIcon}
					<Text>
						Enter the community <br />
						made for humans <br />
						inspired by restless world
					</Text>
				</Left>
				<Right>
					<Link to={socials.instagram} target='_blank'>
						<svg viewBox='0 0 25 25'>
							<path d='M25,4v-.8h-.91v-.8H23.3V1.6h-.72V.8h-.84V0H3.2V.8H2.42v.8H1.63v.81H.85v.8H0v.65H0V19.37H0v.28H0v2.14H0v.47H.78V23h.79v.66h.78v.66h.78V25H21.87v-.8h0v0h.78v-.65h.78V23h.79V21.79h0v.47H25V6.75h0V4ZM8.88,6.82V6h7v1.6h1.56v1.6h1.57v7.22H17.49v1.61H15.93v1.6h-7v-1.6H7.31V16.44H5.74V9.22H7.31V7.62H8.88ZM20.63,5.21V6.82H18.28V4.41h2.35Zm3.59,14.44h0v-.14h0Z' />
							<polygon points='8.88 9.22 8.09 9.22 7.31 9.22 7.31 10.03 7.31 10.83 7.31 11.63 7.31 12.43 7.31 13.23 7.31 14.04 7.31 14.84 7.31 15.64 7.31 16.44 8.09 16.44 8.88 16.44 8.88 17.25 8.88 18.05 9.66 18.05 10.44 18.05 11.23 18.05 12.01 18.05 12.79 18.05 13.58 18.05 14.36 18.05 15.14 18.05 15.93 18.05 15.93 17.25 15.93 16.44 16.71 16.44 17.49 16.44 17.49 15.64 17.49 14.84 17.49 14.04 17.49 13.23 17.49 12.43 17.49 11.63 17.49 10.83 17.49 10.03 17.49 9.22 16.71 9.22 15.93 9.22 15.93 8.42 15.93 7.62 15.14 7.62 14.36 7.62 13.58 7.62 12.79 7.62 12.01 7.62 11.23 7.62 10.44 7.62 9.66 7.62 8.88 7.62 8.88 8.42 8.88 9.22' />
						</svg>
					</Link>
					<Link to={socials.facebook} target='_blank'>
						<svg viewBox='0 0 25 25'>
							<polygon points='18.96 0 18.24 0 17.53 0 16.81 0 16.09 0 15.37 0 14.65 0 13.94 0 13.22 0 12.5 0 11.78 0 11.78 0.71 11.06 0.71 11.06 1.43 10.35 1.43 10.35 2.14 9.63 2.14 9.63 2.86 8.91 2.86 8.91 3.57 8.19 3.57 8.19 4.29 8.19 5 8.19 5.71 8.19 6.43 8.19 7.14 8.19 7.86 8.19 8.57 7.47 8.57 6.76 8.57 6.04 8.57 5.32 8.57 5.32 9.29 5.32 10 5.32 10.71 5.32 11.43 5.32 12.14 5.32 12.86 5.32 13.57 5.32 14.29 6.04 14.29 6.76 14.29 7.47 14.29 8.19 14.29 8.19 15 8.19 15.71 8.19 16.43 8.19 17.14 8.19 17.86 8.19 18.57 8.19 19.29 8.19 20 8.19 20.71 8.19 21.43 8.19 22.14 8.19 22.86 8.19 23.57 8.19 24.29 8.19 25 8.91 25 9.63 25 10.35 25 11.06 25 11.78 25 12.5 25 13.22 25 13.94 25 14.65 25 14.65 24.29 14.65 23.57 14.65 22.86 14.65 22.14 14.65 21.43 14.65 20.71 14.65 20 14.65 19.29 14.65 18.57 14.65 17.86 14.65 17.14 14.65 16.43 14.65 15.71 14.65 15 14.65 14.29 15.37 14.29 16.09 14.29 16.81 14.29 17.53 14.29 17.53 13.57 17.53 12.86 17.53 12.14 17.53 11.43 17.53 10.71 17.53 10 17.53 9.29 17.53 8.57 16.81 8.57 16.09 8.57 15.37 8.57 14.65 8.57 14.65 7.86 14.65 7.14 14.65 6.43 15.37 6.43 16.09 6.43 16.81 6.43 17.53 6.43 18.24 6.43 18.96 6.43 19.68 6.43 19.68 5.71 19.68 5 19.68 4.29 19.68 3.57 19.68 2.86 19.68 2.14 19.68 1.43 19.68 0.71 19.68 0 18.96 0' />
						</svg>
					</Link>
					<Link to={socials.telegram} target='_blank'>
						<svg viewBox='0 0 25 25'>
							<polygon points='24.28 2.52 24.28 1.8 23.56 1.8 22.84 1.8 22.12 1.8 21.4 1.8 21.4 2.52 20.68 2.52 19.96 2.52 19.96 3.24 19.24 3.24 18.52 3.24 17.8 3.24 17.8 3.96 17.08 3.96 16.36 3.96 16.36 4.68 15.64 4.68 14.92 4.68 14.2 4.68 14.2 5.4 13.61 5.4 13.55 5.4 12.96 5.4 12.89 5.4 12.24 5.4 12.24 6.12 11.52 6.12 10.8 6.12 10.8 6.77 10.08 6.77 9.36 6.77 8.64 6.77 8.64 7.49 7.92 7.49 7.2 7.49 6.48 7.49 6.48 8.08 5.76 8.08 5.04 8.08 5.04 8.8 4.32 8.8 3.6 8.8 2.88 8.8 2.88 9.46 2.16 9.46 1.44 9.46 1.44 10.18 0.72 10.18 0.72 10.9 0 10.9 0 11.62 0 12.34 0 13.06 0.72 13.06 1.44 13.06 1.44 13.78 2.16 13.78 2.88 13.78 3.6 13.78 4.32 13.78 4.32 14.5 5.04 14.5 5.76 14.5 6.48 14.5 7.2 14.5 7.2 15.09 7.92 15.09 7.92 15.8 7.92 16.52 8.64 16.52 8.64 17.25 8.64 17.96 8.64 18.68 8.64 19.4 9.36 19.4 9.36 20.12 9.36 21.76 10.08 21.76 10.08 22.48 10.08 23.2 10.8 23.2 10.8 22.48 10.8 21.76 11.52 21.76 11.52 20.12 11.52 19.4 11.52 18.68 11.52 17.96 11.52 16.52 12.04 16.52 12.04 15.8 12.04 15.09 12.04 14.37 12.04 13.64 12.04 13.06 12.04 12.93 12.04 12.34 12.76 12.34 12.76 11.62 13.48 11.62 14.2 11.62 14.2 10.9 14.92 10.9 14.92 10.18 15.64 10.18 15.64 9.46 16.36 9.46 16.36 8.74 17.08 8.74 17.08 8.02 17.8 8.02 17.8 7.3 18.52 7.3 19.24 7.3 19.24 7.95 18.52 7.95 18.52 8.67 18.52 9.39 17.8 9.39 17.8 10.05 17.8 10.11 17.8 10.7 17.8 10.77 17.8 11.36 17.08 11.36 17.08 12.07 16.36 12.07 16.36 12.79 16.36 13.51 15.64 13.51 15.64 14.23 14.92 14.23 14.92 14.89 14.2 14.89 14.2 15.61 13.61 15.61 13.61 16.33 13.61 17.05 13.61 17.77 13.61 18.49 14.33 18.49 14.33 19.08 14.99 19.08 15.05 19.08 15.64 19.08 15.64 19.8 16.36 19.8 16.36 20.52 17.08 20.52 17.08 21.24 17.8 21.24 17.8 21.96 18.52 21.96 18.52 22.68 19.24 22.68 19.96 22.68 20.68 22.68 21.4 22.68 21.4 21.96 22.12 21.96 22.12 21.24 22.12 20.52 22.12 19.8 22.12 19.08 22.84 19.08 22.84 18.36 22.84 17.64 22.84 16.92 22.84 16.2 22.84 15.48 22.84 14.76 22.84 14.04 22.84 13.32 22.84 12.6 23.56 12.6 23.56 11.88 23.56 11.16 23.56 10.44 23.56 9.72 23.56 9 24.28 9 24.28 8.28 24.28 7.56 24.28 6.84 24.28 6.12 25 6.12 25 5.4 25 4.68 25 3.96 25 3.24 25 2.52 24.28 2.52' />
						</svg>
					</Link>
				</Right>
			</Block>
		</Wrapper>
	);
};
