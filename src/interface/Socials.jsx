import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { socialLinksDesk, socialDecorIcon } from '../data';

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
		display: block;
		max-width: 2.6rem;
		width: 100%;
		& > svg {
			fill: ${props => props.theme.colorGray};
			width: 100%;
			height: 100%;
			transition: all 0.2s ease;
		}

		&:first-child {
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
					{socialLinksDesk.map(item => (
						<Link key={item.name} to={item.link} target='_blank'>
							{item.svg}
						</Link>
					))}
				</Right>
			</Block>
		</Wrapper>
	);
};
