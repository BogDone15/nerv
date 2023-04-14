import React, { useState } from 'react';
import styled from 'styled-components';
import { shippingData } from '../../data';
import Select from 'react-select';
const Wrapper = styled.div`
	width: 65%;
	height: 100%;
	@media screen and (max-width: 1100px) {
		width: 100%;
	}
`;

const WrapperTitle = styled.div`
	display: flex;
	align-items: flex-end;
	height: 6.8rem;
	border-bottom: 1px solid ${props => props.theme.colorBorder};
	border-left: 1px solid ${props => props.theme.colorBorder};
	padding-left: 1.8rem;
	padding-bottom: 0.7rem;
	& > h2 {
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const WrapperTop = styled.div`
	display: flex;
	align-items: center;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.8rem;
	color: ${props => props.theme.colorBlack};
	height: 4.6rem;
	padding-left: 1.8rem;
	border-left: 1px solid ${props => props.theme.colorBorder};
	border-bottom: 1px solid ${props => props.theme.colorBlack};
	@media screen and (max-width: 1100px) {
		display: none;
		border: none;
	}
`;

const WrapperMain = styled.div`
	width: 100%;
	height: calc(100% - 11.4rem);
	border: 1px solid ${props => props.theme.colorBlack};
	border-top: none;
	padding: 2rem 2.5rem;
	@media screen and (max-width: 1100px) {
		border: none;
	}
`;

const Form = styled.form`
	width: 100%;
	height: 100%;
`;

const InputWrapper = styled.div`
	position: relative;
	margin-bottom: 1.7rem;
`;

const Input = styled.input`
	border: 1px solid ${props => props.theme.colorBorder};
	background: transparent;
	outline: none;
	width: 100%;
	height: 4.3rem;
	font-size: 1.8rem;
	@media screen and (max-width: 1100px) {
		height: 6.2rem;
		font-size: 2.1rem;
	}
`;

const InputPlaceHolder = styled.span`
	position: absolute;
	background: #cecece;
	padding: 0 0.8rem;
	left: 2rem;
	top: -0.8rem;
	font-weight: 300;
	font-size: 1.2rem;
	line-height: 1.7rem;
	color: #000000;
	text-transform: uppercase;
	transition: all 0.2s ease;
	@media screen and (max-width: 1100px) {
		font-size: ${props => props.theme.fontmd};
		line-height: 2.2rem;
		top: -1rem;
	}

	@media screen and (max-width: 1100px) {
		top: -0.9rem;
	}
`;

const InputBlock = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	& > div {
		width: 50%;
	}
	@media screen and (max-width: 1100px) {
		flex-direction: column;
		gap: 0;
		& > div {
			width: 100%;
		}
	}
`;

const PaymentBlockTitle = styled.div`
	position: relative;
	margin-bottom: 1.7rem;
	border: ${props =>
		props.hidePaymentBlock ? 'none' : `1px solid ${props.theme.colorBorder}`};
	padding: ${props => (props.hidePaymentBlock ? '0' : '1.4rem 0')};
	& > h2 {
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
		text-align: center;
	}
	@media screen and (max-width: 1100px) {
		& > h2 {
			font-size: ${props => props.theme.fontmd};
			line-height: 2.2rem;
		}
	}
`;

const InfoBlockTitle = styled.div`
	position: relative;
	margin-bottom: 1.7rem;
	border: ${props =>
		props.hideInfoBlock ? 'none' : `1px solid ${props.theme.colorBorder}`};
	padding: ${props => (props.hideInfoBlock ? '0' : '1.4rem 0')};
	& > h2 {
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
		text-align: center;
	}
	@media screen and (max-width: 1100px) {
		& > h2 {
			font-size: ${props => props.theme.fontmd};
			line-height: 2.2rem;
		}
	}
`;

const Button = styled.button`
	padding: 1.4rem 0;
	cursor: pointer;
	& > span {
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: #adadad;
	}
	@media screen and (max-width: 1100px) {
		padding: 2rem 0;

		& > span {
			font-size: 1.8rem;
			line-height: 2.2rem;
		}
	}
`;

const ContactBlockTitle = styled.div`
	position: relative;
	margin-bottom: 1.7rem;
	border: ${props =>
		props.hideContactBlock ? 'none' : `1px solid ${props.theme.colorBorder}`};
	padding: ${props => (props.hideContactBlock ? '0' : '1.4rem 0')};
	& > h2 {
		font-weight: 450;
		font-size: 1.4rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
		text-align: center;
	}
	@media screen and (max-width: 1100px) {
		& > h2 {
			font-size: ${props => props.theme.fontmd};
			line-height: 2.2rem;
		}
	}
`;

const ContactBlock = styled.div`
	margin-bottom: 1.7rem;
`;

const InfoBlock = styled.div`
	margin-bottom: 1.7rem;
`;

const PaymentGroup = styled.div`
	display: ${props => (props.hidePaymentBlock ? 'none' : 'block')};
`;

const Edit = styled.div`
	position: absolute;
	top: 50%;
	right: 1.4rem;
	transform: translateY(-50%);
	font-weight: 450;
	font-size: 1.2rem;
	line-height: 1.8rem;
	color: ${props => props.theme.colorBlack};
	cursor: pointer;
	transition: all 0.2s ease;
	overflow: hidden;
	&:before {
		content: '';
		position: absolute;
		z-index: 1;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background: ${props => props.theme.colorMain};
		transform: translateX(-101%);
		backface-visibility: hidden;
		transform-origin: left;
		transition: all 0.2s ease;
	}
	&:hover {
		opacity: 0.7;

		&:before {
			transform: translateX(101%);
		}
	}
	@media screen and (max-width: 1100px) {
		font-size: ${props => props.theme.fontmd};
		line-height: 2.2rem;
	}
`;

const WrapperMainTitle = styled.h2`
	display: none;
	@media screen and (max-width: 1100px) {
		display: block;
		font-weight: 500;
		font-size: ${props => props.theme.fontmd};
		line-height: 2.2rem;
		color: ${props => props.theme.colorBlack};
		text-align: center;
		text-transform: uppercase;
		border-bottom: 1px solid ${props => props.theme.colorBorder};
		padding: 2.2rem 0;
	}
`;

const StyledSelectWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 4.3rem;
	margin-bottom: 1.7rem;
	/* & > span {
		position: absolute;
		background: #cecece;
		padding: 0 0.8rem;
		left: 2rem;
		top: -0.8rem;
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.7rem;
		color: #000000;
		text-transform: uppercase;
		transition: all 0.2s ease;
		color: ${props => props.theme.colorBlack};
	} */

	& > div {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 1100px) {
		height: 6.2rem;
		font-size: 2.1rem;
	}
	@media screen and (max-width: 567px) {
		margin-bottom: 2.6rem;
	}
`;

const StyledSelect = styled(Select)`
	.Select__control {
		border: 1px solid ${props => props.theme.colorBorder};
		background: transparent;
		outline: none;
		width: 100%;
		height: 100%;
		font-size: 1.8rem;
		border-radius: 0;
		cursor: pointer;
		&:hover {
			border-color: unset;
		}
		@media screen and (max-width: 567px) {
			font-size: 2.1rem;
		}
	}
	.Select__value-container {
		overflow: unset;
		padding-left: 1rem;
	}
	.Select__dropdown-indicator {
		color: ${props => props.theme.colorBorder};
	}

	.Select__single-value {
		margin-left: 0;
	}

	.Select__control:hover {
		border-color: #a1a1a1;
	}

	.Select__control--is-focused {
		box-shadow: unset;
		outline: none;
	}

	.Select__indicator-separator {
		display: none;
	}

	.Select__menu {
		color: #3c3d3e;
		background: hsl(0, 0%, 70%);
		border: 1px solid ${props => props.theme.colorBorder};
	}

	.Select__placeholder {
		position: absolute;
		background: #cecece;
		padding: 0 0.8rem;
		left: 0.6rem;
		top: -1.4rem;
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.7rem;
		color: #000000;
		text-transform: uppercase;
		transition: all 0.2s ease;
		color: ${props => props.theme.colorBlack};
		@media screen and (max-width: 1100px) {
			top: -2.6rem;
			font-size: 1.7rem;
			line-height: 2.2rem;
		}
		@media screen and (max-width: 1100px) {
			top: -2.4rem;
		}
	}

	.Select__option {
		font-size: 1.8rem;
		color: ${props => props.theme.colorBlack};
		background: transparent;
		cursor: pointer;
		&:hover {
			color: #fff;
		}
		@media screen and (max-width: 567px) {
			font-size: 2.1rem;
		}
	}
	.Select__option--is-selected {
		color: #fff;
	}
`;

export const ContactInfo = () => {
	const [hideContactBlock, setHideContactBlock] = useState(true);
	const [hideInfoBlock, setHideInfoBlock] = useState(false);
	const [hidePaymentBlock, setHidePaymentBlock] = useState(false);
	const [editContact, setEditContact] = useState(false);
	const [editInfo, setEditInfo] = useState(false);

	const handleClick = type => {
		if (type === 'contact') {
			setHideContactBlock(false);
			setHideInfoBlock(true);
			setEditContact(true);
			setEditInfo(false);
		} else if (type === 'info') {
			setHideInfoBlock(false);
			setHidePaymentBlock(true);
			setEditInfo(true);
		}
	};

	const handleEdit = type => {
		if (type === 'contact') {
			setEditContact(false);
			setHideContactBlock(true);
			setHidePaymentBlock(false);
			setHideInfoBlock(false);
			setEditInfo(true);
		} else {
			setEditInfo(false);
			setEditContact(true);
			setHidePaymentBlock(false);
			setHideContactBlock(false);
			setHideInfoBlock(true);
		}
	};

	const options = [
		{ value: 'Ukraine', label: 'Ukraine' },
		{ value: 'Canada', label: 'Canada' },
		{ value: 'USA', label: 'USA' },
	];

	return (
		<Wrapper>
			<WrapperTitle>
				<h2>CONTACT INFORMATION</h2>
			</WrapperTitle>
			<WrapperTop>
				ORDER / CONTACT{' '}
				{hideInfoBlock || (!hideInfoBlock && hidePaymentBlock) ? (
					<>/ SHIPPING </>
				) : null}{' '}
				{hidePaymentBlock && <>/ PAYMENT</>}
			</WrapperTop>
			<WrapperMainTitle>Checkout</WrapperMainTitle>
			<WrapperMain>
				<Form>
					<ContactBlock>
						<ContactBlockTitle hideContactBlock={hideContactBlock}>
							<h2>01 CONTACT INFO</h2>
							{editContact && (
								<Edit onClick={() => handleEdit('contact')}>[EDIT]</Edit>
							)}
						</ContactBlockTitle>
						{hideContactBlock && (
							<>
								<InputWrapper>
									<Input type='email' name='email' />
									<InputPlaceHolder>Email</InputPlaceHolder>
								</InputWrapper>
								<InputBlock>
									<InputWrapper>
										<Input type='text' name='name' />
										<InputPlaceHolder>FIRST NAME</InputPlaceHolder>
									</InputWrapper>
									<InputWrapper>
										<Input type='text' name='lastname' />
										<InputPlaceHolder>LAST NAME</InputPlaceHolder>
									</InputWrapper>
								</InputBlock>
								<Button type='button' onClick={() => handleClick('contact')}>
									<span>CONTINUE</span>
								</Button>
							</>
						)}
					</ContactBlock>
					<InfoBlock>
						<InfoBlockTitle hideInfoBlock={hideInfoBlock}>
							<h2>02 SHIPPING INFO</h2>
							{editInfo && (
								<Edit onClick={() => handleEdit('info')}>[EDIT]</Edit>
							)}
						</InfoBlockTitle>
						{hideInfoBlock && (
							<>
								<StyledSelectWrapper>
									{/* <span>Country</span> */}
									<StyledSelect
										classNamePrefix='Select'
										options={options}
										placeholder='Country'
									/>
								</StyledSelectWrapper>
								{shippingData.map(item => (
									<InputWrapper key={item.id}>
										<Input type={item.type} name={item.name} />
										<InputPlaceHolder>{item.placeholder}</InputPlaceHolder>
									</InputWrapper>
								))}
								<Button type='button' onClick={() => handleClick('info')}>
									<span>CONTINUE</span>
								</Button>
							</>
						)}
					</InfoBlock>
					<PaymentBlockTitle hidePaymentBlock={hidePaymentBlock}>
						<h2>03 PAYMENT</h2>
					</PaymentBlockTitle>
					{hidePaymentBlock && (
						<PaymentGroup>
							<Button type='button'>
								<span>PAY WIA FONDY </span>
							</Button>
						</PaymentGroup>
					)}
				</Form>
			</WrapperMain>
		</Wrapper>
	);
};
