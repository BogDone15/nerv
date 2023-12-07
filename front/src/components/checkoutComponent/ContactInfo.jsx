import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../interface/Checkbox';
import { SelectCountry } from '../../interface/SelectCountry';
import { FetchingLoader } from '../../interface/FetchingLoader';
import FondyPaymentButton from './FondyButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

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
	padding: 2rem 0 2rem 2.5rem;
	@media screen and (max-width: 1100px) {
		border: none;
		height: auto;
	}
`;

const Form = styled.form`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 0.3rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${props => props.theme.colorBlack};
	}
	@media screen and (max-width: 1100px) {
		overflow-y: unset;
	}
`;

const InputWrapper = styled.div`
	position: relative;
	margin-bottom: 1.7rem;
	@media screen and (max-width: 1100px) {
		margin-bottom: 2.5rem;
		& > p {
			font-size: 1.2rem;
		}
	}
	@media screen and (max-width: 567px) {
		& > p {
			font-size: 1.4rem;
		}
	}
`;

const Input = styled.input`
	border: 1px solid ${props => props.theme.colorBorder};
	border-radius: 0;
	background: transparent;
	outline: none;
	width: 100%;
	height: 4rem;
	font-size: ${props => props.theme.fontsm};
	transition: all 0.2s linear;
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		box-shadow: inset 0 0 0 1000px #cecece;
	}

	&::placeholder {
		color: #000;
		font-size: 1.3rem;
		font-weight: 400;
		transform: translateX(1.7rem);
	}
	&:hover,
	&:active,
	&:focus {
		border: 1px solid #0f0f0f;
	}

	@media screen and (max-width: 1100px) {
		height: 6.2rem;
		font-size: 16px;
		&::placeholder {
			font-size: 16px;
		}
	}

	@media screen and (max-width: 567px) {
		&::placeholder {
			font-size: 10px;
		}
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
	color: ${props => (props.error ? '#ff0000' : '#000000')};
	text-transform: uppercase;
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
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${props => (props.hidePaymentBlock ? 'auto' : '4.6rem')};
	margin-bottom: 1.7rem;
	margin-right: 2.5rem;
	border: ${props =>
		props.hidePaymentBlock ? 'none' : `1px solid ${props.theme.colorBorder}`};

	& > h2 {
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
		text-align: center;
	}
	@media screen and (max-width: 1100px) {
		height: ${props => (props.hidePaymentBlock ? 'auto' : '6rem')};
		& > h2 {
			font-size: ${props => props.theme.fontmd};
			line-height: 2.2rem;
		}
	}
`;

const InfoBlockTitle = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${props => (props.hideInfoBlock ? 'auto' : '4.6rem')};
	margin-bottom: 1.7rem;
	border: ${props =>
		props.hideInfoBlock ? 'none' : `1px solid ${props.theme.colorBorder}`};

	& > h2 {
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
		text-align: center;
	}
	@media screen and (max-width: 1100px) {
		height: ${props => (props.hideInfoBlock ? 'auto' : '6.2rem')};
		& > h2 {
			font-size: ${props => props.theme.fontmd};
			line-height: 2.2rem;
		}
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 4.6rem;
	cursor: pointer;
	border: 1px solid transparent;
	transition: all 0.2s ease;

	& > span {
		font-weight: 450;
		font-size: ${props => props.theme.fontsm};
		line-height: 1.8rem;
		color: #adadad;
		transition: all 0.2s ease;
	}
	&:hover {
		background: transparent;
		border: 1px solid ${props => props.theme.colorMain};
		& > span {
			color: ${props => props.theme.colorMain};
		}
	}
	@media screen and (max-width: 1100px) {
		height: 6rem;
		& > span {
			font-size: 1.8rem;
			line-height: 2.2rem;
		}
	}
`;

const ContactBlockTitle = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${props => (props.hideContactBlock ? 'auto' : '4.6rem')};
	margin-bottom: 1.7rem;
	border: ${props =>
		props.hideContactBlock ? 'none' : `1px solid ${props.theme.colorBorder}`};
	& > h2 {
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
		text-align: center;
	}
	@media screen and (max-width: 1100px) {
		height: ${props => (props.hideContactBlock ? 'auto' : '6.2rem')};

		& > h2 {
			font-size: ${props => props.theme.fontmd};
			line-height: 2.2rem;
		}
	}
`;

const ContactBlock = styled.div`
	margin-bottom: 1.7rem;
	margin-right: 2.5rem;
`;

const InfoBlock = styled.div`
	margin-bottom: 1.7rem;
	margin-right: 2.5rem;
`;

const PaymentGroup = styled.div`
	margin-right: 2.5rem;
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

const CheckboxWrapper = styled.div`
	background: ${props => props.theme.colorMain};
	margin-bottom: 1.7rem;
`;

const Loader = styled.div`
	display: flex;
	height: calc(100% - 34rem);
	@media screen and (max-width: 1100px) {
		margin-right: 2.5rem;
	}
`;

export const ContactInfo = () => {
	const [hideContactBlock, setHideContactBlock] = useState(true);
	const [hideInfoBlock, setHideInfoBlock] = useState(false);
	const [hidePaymentBlock, setHidePaymentBlock] = useState(false);
	const [editContact, setEditContact] = useState(false);
	const [editInfo, setEditInfo] = useState(false);
	const [country, setCountry] = useState('');
	const [loading, setLoading] = useState(false);
	const [contactInfo, setContactInfo] = useState({});

	const cart = useSelector(state => state.cart);

	const navigate = useNavigate();

	const productInfo = cart.products.map(item => {
		const productParam = item.specificId.split('/');
		return {
			id: productParam[0],
			name: item.name,
			price: item.price,
			quantity: item.quantity,
			model: item.model,
			color: productParam[1],
			size: productParam[2],
		};
	});

	const {
		register,
		trigger,
		formState: { errors },
		control,
	} = useForm({
		mode: 'onChange',
	});

	const getEverythingForTheShoppingCart = () => {
		return {
			productInfo,
			cart,
			contactInfo,
		};
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

	useEffect(() => {
		country &&
			setContactInfo(prev => {
				return {
					...prev,
					country,
				};
			});
	}, [country]);

	const handleChange = e => {
		setContactInfo(prev => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	return (
		<Wrapper>
			<WrapperTitle>
				<h2>CONTACT INFORMATION</h2>
			</WrapperTitle>
			<WrapperTop>
				ORDER / CONTACT
				{hideInfoBlock || (!hideInfoBlock && hidePaymentBlock) ? (
					<>/ SHIPPING </>
				) : null}
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
									<Input
										name='email'
										{...register('email', {
											onChange: e => {
												handleChange(e);
											},
											required: 'email adress is required',
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
									<p style={{ color: 'red' }}>{errors.email?.message}</p>
								</InputWrapper>
								<InputBlock>
									<InputWrapper>
										<Input
											name='firstName'
											{...register('firstName', {
												onChange: e => {
													handleChange(e);
												},
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
											name='lastName'
											{...register('lastName', {
												onChange: e => {
													handleChange(e);
												},
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
									rules={{ required: 'country is required' }}
									render={({ field: { onChange, value } }) => (
										<SelectCountry
											onChange={onChange}
											value={value}
											setCountry={setCountry}
											errors={errors}
										/>
									)}
								/>
								{country.toLowerCase() === 'usa' && (
									<InputWrapper>
										<Input
											name='state'
											{...register('state', {
												onChange: e => {
													handleChange(e);
												},
												required: 'state is required field',
											})}
											type='text'
										/>
										<InputPlaceHolder error={errors.state?.message}>
											State
										</InputPlaceHolder>
										<p style={{ color: 'red' }}>{errors.state?.message}</p>
									</InputWrapper>
								)}
								<InputWrapper>
									<Input
										name='zipCode'
										{...register('zipCode', {
											onChange: e => {
												handleChange(e);
											},
											required: 'zipcode is required field',
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
										name='city'
										{...register('city', {
											onChange: e => {
												handleChange(e);
											},
											required: 'city / town is required field',
										})}
										type='text'
									/>
									<InputPlaceHolder error={errors.city?.message}>
										CITY / TOWN
									</InputPlaceHolder>
									<p style={{ color: 'red' }}>{errors.city?.message}</p>
								</InputWrapper>
								<InputWrapper>
									<Input
										name='adress'
										{...register('adress', {
											onChange: e => {
												handleChange(e);
											},
											required: 'adress / street / building is required field',
										})}
										type='text'
									/>
									<InputPlaceHolder error={errors.adress?.message}>
										ADRESS / STREET / BUILDING
									</InputPlaceHolder>
									<p style={{ color: 'red' }}>{errors.adress?.message}</p>
								</InputWrapper>
								<InputWrapper>
									<Input
										name='appartment'
										{...register('appartment', {
											onChange: e => {
												handleChange(e);
											},
										})}
										type='text'
									/>
									<InputPlaceHolder>
										APPARTMENT / SUIT ( OPTIONAL)
									</InputPlaceHolder>
									<p style={{ color: 'red' }}>{errors.appartment?.message}</p>
								</InputWrapper>
								<InputWrapper>
									<Input
										name='phoneNumber'
										{...register('phoneNumber', {
											onChange: e => {
												handleChange(e);
											},
											required: 'phone is required field',
											pattern: {
												value: /^[0-9+\(\)-]+$/,
												message: 'entered only numbers, +, -',
											},
										})}
										type='tel'
									/>
									<InputPlaceHolder error={errors.phoneNumber?.message}>
										CELL PHONE NUMBER
									</InputPlaceHolder>
									<p style={{ color: 'red' }}>{errors.phoneNumber?.message}</p>
								</InputWrapper>
								<InputWrapper>
									<Input
										name='delivery'
										placeholder={
											country.toLowerCase() === 'ukraine'
												? 'NOVA POSHTA REQUISITES e.t.c.'
												: undefined
										}
										{...register('delivery', {
											onChange: e => {
												handleChange(e);
											},
										})}
										type='text'
									/>
									<InputPlaceHolder>ADITIONAL DELIVERY INFO</InputPlaceHolder>
									<p style={{ color: 'red' }}>{errors.delivery?.message}</p>
								</InputWrapper>
								<Controller
									control={control}
									name='checkbox'
									render={({ field: { value, onChange } }) => (
										<CheckboxWrapper>
											<Checkbox
												label='In this paragraph, I confirm that I agree to the terms of
											conditions, private, return and shipping policies.'
												checked={value || ''}
												onChange={onChange}
											/>
										</CheckboxWrapper>
									)}
								/>
								<Button
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
									type='submit'
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
							<FondyPaymentButton
								cartData={getEverythingForTheShoppingCart()}
							></FondyPaymentButton>
						</PaymentGroup>
					)}
					{loading && (
						<Loader>
							<FetchingLoader />
						</Loader>
					)}
				</Form>
			</WrapperMain>
		</Wrapper>
	);
};
