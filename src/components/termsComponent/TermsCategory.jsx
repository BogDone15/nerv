import React, { useEffect, useState } from 'react';
import { linksTerms, contactTerms } from '../../data';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { CorporationDetail } from '../corporationComponent/CorporationDetail';

const WrapperGroup = styled.div`
	height: calc(100% - 24rem);
`;

const WrapperTitle = styled.div`
	padding-left: 6.4rem;

	& > h2 {
		font-weight: 600;
		font-size: 3.1rem;
		text-transform: uppercase;
		color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		padding-left: 0;
	}
`;

const WrapperDirectors = styled.div`
	font-weight: 450;
	font-size: 1.2rem;
	color: ${props => props.theme.colorBlack};
	border-bottom: 1px solid ${props => props.theme.colorBlack};
	width: 55%;
	margin: 1.2rem 0 3.4rem 4.4rem;
	text-align: right;
	padding-right: 1rem;
	@media screen and (max-width: 1100px) {
		width: 95%;
		padding-right: 0;
		padding-left: 1rem;
		text-align: left;
		font-size: ${props => props.theme.fontnm};
	}
`;

const WrapperText = styled.div`
	padding-left: 6.2rem;
	padding-right: 7rem;
	margin-right: 0.3rem;
	height: 100%;
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
		margin-bottom: 1.2rem;
		&:last-child {
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 1100px) {
		overflow-y: visible;
		padding-left: 0;
		padding-right: 0;
		margin-right: 0;
		width: 100%;
		& > p {
			font-size: 1.8rem;
			line-height: 2.2rem;
		}
	}
`;

export const TermsCategory = () => {
	const [filteredLinks, setFilteredLinks] = useState([]);
	const [currentItem, setCurrentItem] = useState();
	const location = useLocation();
	const pathName = location.pathname.split('/')[1].replace(/-/gi, ' ');

	useEffect(() => {
		if (pathName === 'corporation' || pathName === 'contacts') {
			setFilteredLinks(contactTerms);
		} else {
			setFilteredLinks(linksTerms);
		}

		const selectedLink = filteredLinks.find(
			item => item.name.toLowerCase() === pathName
		);
		setCurrentItem(selectedLink);
	}, [filteredLinks, pathName]);
	return (
		<>
			{pathName === 'corporation' || pathName === 'contacts' ? (
				<CorporationDetail />
			) : (
				<>
					<WrapperGroup>
						<WrapperTitle>
							<h2>{currentItem?.name}</h2>
						</WrapperTitle>
						<WrapperDirectors>
							[ DIRECTORS ] ENGER OLEG & DYSHLEVAYA OLGA
						</WrapperDirectors>
						<WrapperText>
							{currentItem?.text.split('\n').map(item => (
								<p>{item}</p>
							))}
						</WrapperText>
					</WrapperGroup>
				</>
			)}
		</>
	);
};
