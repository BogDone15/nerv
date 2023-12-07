import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { linksTerms, contactTerms } from '../data';
import { ShuffleLetters } from './ShuffleLetters';

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-transform: uppercase;
	color: ${props => props.theme.colorGray};
	padding-left: 4.5rem;
	@media screen and (max-width: 1100px) {
		padding-left: 0;
	}
`;

const TopLeft = styled.div`
	width: 30%;
	padding-left: 5rem;
	& > span {
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
	}
	@media screen and (max-width: 1100px) {
		width: 46%;
	}
	@media screen and (max-width: 567px) {
		& > span {
			font-size: 9px;
		}
	}
`;

const TopRight = styled.div`
	display: flex;
	justify-content: space-between;
	width: 70%;
	padding-right: 3rem;
	& > span {
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
	}
	@media screen and (max-width: 1100px) {
		padding-right: 4.3rem;
		width: 54%;
	}
	@media screen and (max-width: 567px) {
		width: 52%;
		& > span {
			font-size: 9px;
		}
	}
`;

const Middle = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 4rem;
	margin: 0.5rem 0;
	padding-right: 11.3rem;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Item = styled.li`
	& > a {
		display: block;
		position: relative;
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorMain};
		text-transform: uppercase;
		transition: all 0.2s ease;
		cursor: pointer;
	}
`;

export const Header = () => {
	const [links, setLinks] = useState([]);

	useEffect(() => {
		setLinks(linksTerms.concat(contactTerms));
	}, []);

	return (
		<>
			<Top>
				<TopLeft>
					<span>LOGO</span>
				</TopLeft>
				<TopRight>
					<span>MAIN INTERFACE</span>
					<span>ORDER</span>
				</TopRight>
			</Top>
			<Middle>
				{links.map(link => (
					<Item key={link.id}>
						<Link user={link.name} to={link.href}>
							<ShuffleLetters text={link.name} />
						</Link>
					</Item>
				))}
			</Middle>
		</>
	);
};
