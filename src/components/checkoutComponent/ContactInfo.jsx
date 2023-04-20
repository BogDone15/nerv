import React, { useState } from 'react';
import styled from 'styled-components';
import { shippingData } from '../../data';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
	height: 3.8rem;
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
	height: calc(100% - 8.4rem);
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
	border-radius: 0;
	background: transparent;
	outline: none;
	width: 100%;
	height: 4rem;
	font-size: 1.8rem;
	@media screen and (max-width: 1100px) {
		height: 6.2rem;
		/* font-size: 2.1rem; */
		font-size: 16px;
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
	/* color: #000000; */
	color: ${props => (props.error ? '#ff0000' : '#000000')};
	/* color: ${({ error }) => (error ? '#ff0000' : '#000000')}; */
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
	height: 4rem;
	margin-bottom: 1.7rem;

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
		min-height: 4rem;
		width: 100%;
		height: 100%;
		font-size: 1.8rem;
		border-radius: 0;
		cursor: pointer;
		&:hover {
			border-color: unset;
		}
		@media screen and (max-width: 567px) {
			/* font-size: 2.1rem; */
			font-size: 16px;
		}
	}

	.Select__indicator {
		padding: 0 8px 0;
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

	.Select__input-container {
		margin: 0;
		padding-bottom: 0;
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
		border-radius: 0;
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

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		trigger,
		formState: { errors },
		control,
		reset,
	} = useForm({
		mode: 'onChange',
	});

	const onSubmit = data => {
		console.log(data);
		reset();

		alert(`
		Email:	${data.email} 
		First Name:	${data.firstName} 
		Last Name:	${data.lastName} 
		Country:	${data.country} 
		State:	${data.state} 
		Zip Code:	${data.zipCode} 
		City / Town:	${data.city} 
		Adress / Street / Building:	${data.adress} 
		Appartment / Suite:	${data.appartment} 
		Phone:	${data.phone} 
		`);

		navigate('/order-granted');
	};

	const handleClick = (result, type) => {
		if (!result) {
			return null;
		} else {
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

	const getValue = value =>
		value ? options.find(option => option.value === value) : '';

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
				<Form onSubmit={handleSubmit(onSubmit)}>
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
									<Input
										{...register('email', {
											required: 'Email Address is required',
											pattern: {
												value:
													/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
												message: 'Entered value does not match email format',
											},
										})}
									/>
									<InputPlaceHolder error={errors.email?.message}>
										Email
									</InputPlaceHolder>
									<div style={{ color: 'red' }}>{errors.email?.message}</div>
								</InputWrapper>
								<InputBlock>
									<InputWrapper>
										<Input
											{...register('firstName', {
												required: 'firstName is required field',
												minLength: 2,
												maxLength: 15,
											})}
										/>
										<InputPlaceHolder error={errors.firstName?.message}>
											FIRST NAME
										</InputPlaceHolder>
										<p style={{ color: 'red' }}>{errors.firstName?.message}</p>
									</InputWrapper>
									<InputWrapper>
										<Input
											{...register('lastName', {
												required: 'lastName is required field',
												minLength: 2,
												maxLength: 15,
											})}
										/>
										<InputPlaceHolder error={errors.lastName?.message}>
											LAST NAME
										</InputPlaceHolder>
										<p style={{ color: 'red' }}>{errors.lastName?.message}</p>
									</InputWrapper>
								</InputBlock>
								<Button
									type='button'
									onClick={async () => {
										const result = await trigger([
											'email',
											'firstName',
											'lastName',
										]);
										handleClick(result, 'contact');
									}}
								>
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
								<Controller
									name='country'
									control={control}
									rules={{ required: 'Country is required' }}
									render={({ field: { onChange, value } }) => (
										<StyledSelectWrapper>
											<StyledSelect
												classNamePrefix='Select'
												options={options}
												placeholder='Country'
												value={getValue(value)}
												onChange={newValue => onChange(newValue.value)}
											/>
											<p style={{ color: 'red' }}>{errors.country?.message}</p>
										</StyledSelectWrapper>
									)}
								/>
								<InputWrapper>
									<Input
										{...register('state', { required: true })}
										type='text'
									/>
									<InputPlaceHolder error={errors.state?.message}>
										State
									</InputPlaceHolder>
								</InputWrapper>
								<InputWrapper>
									<Input
										{...register('zipCode', {
											required: 'lastName is required field',
										})}
										type='text'
									/>
									<InputPlaceHolder error={errors.zipCode?.message}>
										ZIP CODE
									</InputPlaceHolder>
									<p style={{ color: 'red' }}>{errors.zipCode?.message}</p>
								</InputWrapper>
								<InputWrapper>
									<Input
										{...register('city', { required: true })}
										type='text'
									/>
									<InputPlaceHolder error={errors.city?.message}>
										CITY / TOWN
									</InputPlaceHolder>
								</InputWrapper>
								<InputWrapper>
									<Input
										{...register('adress', { required: true })}
										type='text'
									/>
									<InputPlaceHolder error={errors.adress?.message}>
										ADRESS / STREET / BUILDING
									</InputPlaceHolder>
								</InputWrapper>
								<InputWrapper>
									<Input {...register('appartment')} type='text' />
									<InputPlaceHolder>
										APPARTMENT / SUIT ( OPTIONAL)
									</InputPlaceHolder>
								</InputWrapper>
								<InputWrapper>
									<Input
										{...register('phoneNumber', { required: true })}
										type='tel'
									/>
									<InputPlaceHolder error={errors.phoneNumber?.message}>
										CELL PHONE NUMBER
									</InputPlaceHolder>
								</InputWrapper>
								<Button
									type='button'
									onClick={async () => {
										const result = await trigger([
											'country',
											'state',
											'zipCode',
											'city',
											'adress',
											'phoneNumber',
										]);
										handleClick(result, 'info');
									}}
								>
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
							<Button type='submit'>
								<span>PAY WIA FONDY </span>
							</Button>
						</PaymentGroup>
					)}
				</Form>
			</WrapperMain>
		</Wrapper>
	);
};
