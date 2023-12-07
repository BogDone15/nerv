import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { TermsCategory } from './TermsCategory';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	&:after {
		position: absolute;
		content: '';
		right: 1rem;
		top: 0;
		width: 1px;
		height: 100%;
		background: ${props => props.theme.colorBorder};
	}

	@media screen and (max-width: 1100px) {
		display: flex;
		align-items: flex-start;
		gap: 4.4rem;
		margin-top: 6rem;
		padding-top: 3.7rem;
		border-top: 1px solid ${props => props.theme.colorBorder};
		& > div {
			padding-right: 4rem;
			padding-bottom: 2rem;
		}
		&:after {
			display: none;
		}
	}
	@media screen and (max-width: 567px) {
		margin-top: 6.3rem;
	}
`;

const WrapperNav = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	padding-left: 6.2rem;
	padding-top: 4.8rem;
	margin-bottom: 4.8rem;
	@media screen and (max-width: 1100px) {
		flex-direction: column;
		align-items: flex-start;
		padding-left: 3.5rem;
		padding-top: 0;
		margin-bottom: 0;
	}
	@media screen and (max-width: 567px) {
		padding-left: 2.3rem;
	}
`;

const WrapperNavItem = styled(Link)`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	cursor: pointer;

	& > div {
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => (props.activeitem ? '#b2b2b2' : props.theme.colorMain)};
		border: 1px solid #898989;
		padding: ${props =>
			props.activeitem
				? '0.3rem 10rem 0.2rem 1.3rem'
				: '0.3rem 8rem 0.2rem 1.3rem'};
		text-transform: uppercase;
		transition: all 0.2s ease;
		background: ${props =>
			props.activeitem ? props.theme.colorMain : 'transparent'};

		&:first-child {
			padding: 0.3rem 0.2rem 0.2rem 0.2rem;
		}
	}

	&:hover {
		& > div {
			background: ${props => props.theme.colorMain};
			color: #b2b2b2;
		}
	}

	&.is-selected {
		& > div {
			border: 1px solid transparent;
			background: ${props => props.theme.colorMain};
			color: #b2b2b2;
			&:last-child {
				padding-right: 20rem;
			}
		}
	}
	@media screen and (max-width: 1100px) {
		align-items: flex-start;
		writing-mode: vertical-lr;
		& > div {
			padding: 0.5rem 0.4rem 4rem 0.4rem;

			&:first-child {
				padding: 0.5rem 0.4rem;
			}
			&:last-child {
				padding-bottom: 1.8rem;
			}
		}
		&.is-selected {
			& > div {
				&:last-child {
					padding: 0.5rem 0.4rem 4rem 0.4rem;
				}
			}
		}
	}
	@media screen and (max-width: 567px) {
		& > div {
			font-size: 1.7rem;
			&:first-child {
				padding: 0.6rem 0.7rem 0.5rem 0.4rem;
			}
			&:last-child {
				padding: 0.6rem 0.7rem 4.1rem 0.4rem;
			}
		}
		&.is-selected {
			& > div {
				border: 1px solid transparent;
				&:first-child {
					padding: 0.6rem 0.7rem 0.5rem 0.4rem;
				}
				&:last-child {
					padding: 0.6rem 0.7rem 4.1rem 0.4rem;
				}
			}
		}
	}
`;

export const TermsDetails = () => {
	const [filteredLinks, setFilteredLinks] = useState([]);
	const [activeitem, setActiveitem] = useState();
	const location = useLocation();
	const pathName = location.pathname.split('/')[1].replace(/-/gi, ' ');

	const terms = useSelector(state => state.terms);

	useEffect(() => {
		if (pathName === 'corporation' || pathName === 'contacts') {
			setFilteredLinks(terms.slice(0, 2));
		} else {
			setFilteredLinks(terms.slice(2, 6));
		}
	}, [pathName, terms]);

	useEffect(() => {
		const selectedLink = filteredLinks.find(
			item => item.type.toLowerCase() === pathName
		);

		setActiveitem(selectedLink?.type);
	}, [filteredLinks, pathName]);

	return (
		<Wrapper
			selectedTabClassName='is-selected'
			selectedTabPanelClassName='is-selected'
		>
			<WrapperNav>
				{filteredLinks.map((item, index) => (
					<WrapperNavItem
						to={item.href}
						key={item.type}
						activeitem={item.type === activeitem ? 1 : 0}
					>
						<div>[0{index + 1}]</div>
						<div>{item.type}</div>
					</WrapperNavItem>
				))}
			</WrapperNav>
			<TermsCategory />
		</Wrapper>
	);
};
