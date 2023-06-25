import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { contactTerms } from '../../data';
import { useLocation } from 'react-router-dom';

const MainMiddleLine = styled.div`
	height: 1px;
	width: 70%;
	background: ${props => props.theme.colorBlack};
	margin: 2rem 0 4.2rem;
	@media screen and (max-width: 1100px) {
		width: 90%;
		margin-left: 4rem;
	}
`;

const MainMiddleTitle = styled.div`
	padding-top: 2.9rem;
	padding-left: 4.2rem;
	& > h2 {
		font-weight: 600;
		font-size: 3.2rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
	}
	@media screen and (max-width: 1100px) {
		padding-left: 0;
	}
`;

const MainMiddleText = styled.div`
	padding: 0 4.2rem;
	height: calc(100% - 13.5rem);
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0.4rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
	& > p {
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
		margin-bottom: 2rem;
		&:last-child {
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 1100px) {
		overflow-y: visible;
		padding: 0;
		height: 100%;
		& > p {
			font-size: 1.8rem;
			line-height: 2.4rem;
		}
	}
`;

const Directors = styled.div`
	position: absolute;
	right: 2.5rem;
	top: 1rem;
	font-weight: 450;
	font-size: 1.2rem;
	line-height: 1.7rem;
	color: ${props => props.theme.colorBlack};
	@media screen and (max-width: 1100px) {
		right: 0;
		top: 10rem;
	}
`;

const MainMiddle = styled.ul`
	position: relative;
	max-width: calc(100% - 39.3rem);
	width: 100%;
	height: 100%;
	border: 1px solid ${props => props.theme.colorBorder};
	padding-right: 0.3rem;
	overflow: hidden;
	&:after {
		position: absolute;
		content: '';
		right: 1rem;
		top: 0;
		width: 1px;
		height: 100%;
		background: ${props => props.theme.colorBorder};
	}

	&.is-selected {
		display: block;
	}
	@media screen and (max-width: 1100px) {
		max-width: 100%;
		border: none;
		&:after {
			display: none;
		}
	}
`;

export const ContactsCategory = () => {
	const [filteredLinks, setFilteredLinks] = useState([]);
	const [currentItem, setCurrentItem] = useState();
	const location = useLocation();
	const pathName = location.pathname.split('/')[1].replace(/-/gi, ' ');
	console.log(currentItem);
	useEffect(() => {
		setFilteredLinks(contactTerms);

		const selectedLink = filteredLinks.find(
			item => item.name.toLowerCase() === pathName
		);
		setCurrentItem(selectedLink);
	}, [filteredLinks, pathName]);
	return (
		<>
			{
				<MainMiddle key={currentItem?.title}>
					<MainMiddleTitle>
						<h2>{currentItem?.title}</h2>
					</MainMiddleTitle>
					<MainMiddleLine />
					<MainMiddleText>
						{currentItem?.text.split('\n').map(item => (
							<p>{item}</p>
						))}
					</MainMiddleText>
					<Directors>[ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA</Directors>
				</MainMiddle>
			}
		</>
	);
};
