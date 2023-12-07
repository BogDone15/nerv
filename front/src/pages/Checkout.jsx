import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContactInfo } from '../components/checkoutComponent/ContactInfo';
import { Summary } from '../components/checkoutComponent/Summary';
import { Nav } from '../interface/Nav';
import { Socials } from '../interface/Socials';

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 1100px) {
		height: auto;
	}
`;

const Block = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	@media screen and (max-width: 1100px) {
		border-bottom: unset;
	}
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
		font-size: 1.2rem;
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
	}
`;

const GearPreview = styled.div`
	position: absolute;
	left: 4.5rem;
	top: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 4.5rem;
	height: calc(100% + 3.7rem);
	margin-top: -3.7rem;
	border-right: 1px solid ${props => props.theme.colorBorder};
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Group = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	overflow-y: hidden;
	padding-left: 4.5rem;
	@media screen and (max-width: 1100px) {
		flex-direction: column-reverse;
		padding-left: 0;
		margin: 6rem 0 7rem;
		border-top: 1px solid ${props => props.theme.colorBorder};
	}
	@media screen and (max-width: 567px) {
		margin-top: 6.3rem;
	}
`;

export const Checkout = () => {
	return (
		<Wrapper>
			<Block>
				<Aside>
					<AsideTop />
					<AsideMiddle>
						<span>CHECKOUT</span>
					</AsideMiddle>
				</Aside>
				<GearPreview />
				<Right>
					<Nav>
						<Link to='/'>Main</Link>
						<span>&gt;</span>
						<Link to='/interface'>INTERFACE</Link>
						<span>&gt;</span>
						<Link to='/order'>ORDER DETAILS</Link>
						<span>&gt;</span>
						<Link to='/checkout'>CHECKOUT</Link>
					</Nav>
					<Group>
						<Summary />
						<ContactInfo />
						<Socials />
					</Group>
				</Right>
			</Block>
		</Wrapper>
	);
};
