import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	padding: 1.5rem 3.5rem;
	border-bottom: 1px solid ${props => props.theme.colorBlack};

	&:last-child {
		border-bottom: 0;
	}
	@media screen and (max-width: 1100px) {
		padding: 2rem 3.5rem;
	}
`;
const Title = styled.h2`
	position: absolute;
	left: 2.5rem;
	top: -0.9rem;
	background: #cecece;
	padding: 0 1.3rem;
	font-weight: 700;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.8rem;
	color: ${props => props.theme.colorBlack};
	text-transform: uppercase;
	@media screen and (max-width: 1100px) {
		font-size: 1.7rem;
		line-height: 2.2rem;
		top: -1.2rem;
	}
`;
const Content = styled.div`
	height: calc(100% - 13.7rem);
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 1100px) {
		height: 100%;
	}
`;

const Text = styled.p`
	font-weight: 400;
	font-size: 1.1rem;
	line-height: 1.5rem;
	color: ${props => props.theme.colorBlack};
	margin-bottom: 0.1rem;
	@media screen and (max-width: 1100px) {
		font-size: 1.7rem;
		line-height: 2.2rem;
	}
`;

const SpecWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
	list-style: disc;
	@media screen and (max-width: 567px) {
		gap: 2rem;
		transform: translateX(0.3rem);
	}
`;

const SpecItem = styled.li`
	position: relative;
	list-style: disc;
	width: calc(33.33333333% - 2rem);
	font-weight: 400;
	font-size: 1.1rem;
	line-height: 1.5rem;
	color: ${props => props.theme.colorBlack};
	&:nth-of-type(3n) {
		margin-right: 0;
	}
	@media screen and (max-width: 1100px) {
		font-size: 1.7rem;
		line-height: 2.2rem;
	}
	@media screen and (max-width: 567px) {
		width: calc(50% - 1rem);
		margin-right: unset;
	}
`;

export const ProductCharacteristic = ({ curProd }) => {
	return (
		<Content>
			<Item>
				<Title>TECHNICAL INFORMATION</Title>
				{curProd?.technicalInformation?.split('\n').map((item, index) => (
					<Text key={item + index}>{item}</Text>
				))}
			</Item>
			<Item>
				<Title>SPECIFICATION</Title>
				{curProd?.specificationIndividual ? (
					<SpecWrapper>
						{curProd?.specificationIndividual
							?.split('\n')
							.map((item, index) => (
								<SpecItem key={item + index}>{item}</SpecItem>
							))}
					</SpecWrapper>
				) : (
					<>
						{curProd?.specification?.split('\n').map((item, index) => (
							<Text key={item + index}>{item}</Text>
						))}
					</>
				)}
			</Item>
			<Item>
				<Title>CARE SPECIFICATION</Title>
				{curProd?.careSpecification?.split('\n').map((item, index) => (
					<Text key={item + index}>{item}</Text>
				))}
			</Item>
		</Content>
	);
};
