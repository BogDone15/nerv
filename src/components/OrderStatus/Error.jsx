import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Status } from '../../interface/Status';

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 3rem;
`;

const Item = styled.div`
	border: 1px solid ${props => props.theme.colorBlack};
	margin-left: 10rem;

	@media screen and (max-width: 1100px) {
		margin-top: 19.6rem;
		margin-left: 0;
	}
	@media screen and (max-width: 567px) {
		width: 90%;
	}
`;

const Top = styled.div`
	background: ${props => props.theme.colorMain};
	width: 100%;
	height: 3.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	padding: 0 1rem 0 3.2rem;
	& > a {
		width: 3.5rem;
		height: 3.5rem;
		display: flex;
		align-items: center;
		cursor: pointer;
		& > span {
			width: 100%;
			height: 2px;
			background: ${props => props.theme.colorGray};
			transform: translateX(1.1rem) rotate(-45deg);
			transition: all 0.2s ease;
			&:last-child {
				transform: translateX(-0.6rem) rotate(45deg);
			}
		}

		&:hover {
			& > span {
				background: #e0dfdf;
			}
		}
	}
`;

const Left = styled.div`
	display: flex;
	align-items: center;
	gap: 9px;
	& > span {
		width: 1.3rem;
		height: 1.3rem;
		background: #b2b2b2;
		border-radius: 50%;
	}
`;

const Main = styled.div`
	padding: 3.2rem 24rem 4.7rem 5.8rem;
	& > div {
		margin-bottom: 1.9rem;
		&:last-child {
			margin-bottom: 0;
			& > p {
				font-weight: 500;
				font-size: 1.2rem;
				line-height: 1.6rem;
				color: #1e1e1e;
				margin-bottom: 16px;
				@media screen and (max-width: 567px) {
					font-size: 1.5rem;
					line-height: 1.8rem;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		& > p {
			font-weight: 400;
			font-size: 1.3rem;
			line-height: 1.7rem;
			color: ${props => props.theme.colorBlack};
			@media screen and (max-width: 567px) {
				font-size: 1.5rem;
				line-height: 1.8rem;
			}
		}
	}
	@media screen and (max-width: 567px) {
		padding-left: 5rem;
		padding-right: 5rem;
		& > span {
			font-size: 1.5rem !important;
			line-height: 1.8rem !important;
		}
	}
`;

export const Error = () => {
	return (
		<Wrapper>
			<Status status='ACCESS' color='#FFA300' />
			<Item>
				<Top>
					<Left>
						<span></span>
						<span></span>
						<span></span>
					</Left>
					<Link to='/checkout'>
						<span></span>
						<span></span>
					</Link>
				</Top>
				<Main>
					<TypeAnimation
						style={{
							whiteSpace: 'pre-line',
							display: 'block',
							fontWeight: '400',
							fontSize: '1.3rem',
							lineHeight: '1.7rem',
							color: '#000',
						}}
						sequence={[
							`
							using System;
							using System.Data;

							/failed
`,
							1000000,
							'',
						]}
						speed={100}
						cursor={false}
						repeat={0}
					/>

					<TypeAnimation
						style={{
							whiteSpace: 'pre-line',
							display: 'block',
							fontWeight: '500',
							fontSize: '1.4rem',
							lineHeight: '1.8rem',
							color: '#1e1e1e',
						}}
						sequence={[
							400,
							`
							[ SOMETHING WENT WRONG ]

							> YOUR PAYMENT FAIL <
							
							[ PLEASE CHECK THE PAYMENT DETAILS AND REPEAT PAYMENT ]
`,
							1000000,
							'',
						]}
						speed={100}
						cursor={false}
						repeat={0}
					/>
					{/* <div>
						<p>using System;</p>
						<p>using System.Data;</p>
					</div>
					<div>
						<p>/failed</p>
					</div>
					<div>
						<p>[ SOMETHING WENT WRONG ]</p>
						<p>&gt; YOUR PAYMENT FAIL &lt;</p>
						<p>[ PLEASE CHECK THE PAYMENT DETAILS AND REPEAT PAYMENT ] </p>
					</div> */}
				</Main>
			</Item>
		</Wrapper>
	);
};
