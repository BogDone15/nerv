import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Wrapper = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	max-width: 33.9rem;
	width: 100%;
	height: 10.8rem;
	opacity: ${props => (props.closeModal ? '0' : '1')};
	pointer-events: ${props => (props.closeModal ? 'none' : 'auto')};
	background: ${props => props.theme.colorMain};
	padding: 1.5rem 2rem;
	transition: all 0.2s ease;
	@media screen and (max-width: 1100px) {
		display: none;
	}
`;

const Form = styled.form`
	width: 100%;
	height: 100%;
`;

const WrapperTop = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1.8rem;
	padding: 0 0.3rem;
	& > div {
		&:first-child {
			font-weight: 450;
			font-size: 1.3rem;
			line-height: 1.7rem;
			color: #9b9b9b;
		}
	}
`;

const Close = styled.div`
	display: flex;
	align-items: center;
	width: 3rem;
	height: 3rem;
	cursor: pointer;
	& > span {
		width: 100%;
		height: 2px;
		background: ${props => props.theme.colorGray};
		transform: translateX(0.85rem) rotate(45deg);
		transition: all 0.2s ease;
		&:last-child {
			transform: translateX(-0.7rem) rotate(-45deg);
		}
	}
	&:hover {
		& > span {
			background: #bcbbbb;
		}
	}
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 3rem;
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: 100%;
	background: #9b9b9b;
	border: none;
	outline: none;
	padding: 0.2rem 0;
	cursor: pointer;
	transition: all 0.2s ease;
	& > span {
		font-weight: 450;
		font-size: 1.2rem;
		line-height: 1.6rem;
		color: ${props => props.theme.colorMain};
		text-transform: uppercase;
	}

	&:hover {
		background: #b7b5b5;
	}

	@media screen and (max-width: 567px) {
		& > span {
			font-size: 1.7rem;
		}
	}
`;

const InputWrapper = styled.div`
	width: 70%;
	height: 100%;
	position: relative;
`;

const Input = styled.input`
	border: 1px solid #9b9b9b;
	border-radius: 0;
	background: transparent;
	outline: none;
	width: 100%;
	font-size: 1.3rem;
	color: #9b9b9b;
	height: 100%;
	transition: all 0.2s ease;
	&:hover,
	&:focus {
		border: 1px solid #bcbbbb;
	}
`;

const InputPlaceHolder = styled.span`
	position: absolute;
	background: ${props => props.theme.colorMain};
	padding: 0 0.6rem;
	left: 2rem;
	top: -0.8rem;
	font-weight: 300;
	font-size: 1.2rem;
	line-height: 1.6rem;
	color: #9b9b9b;
	text-transform: uppercase;
	transition: all 0.2s ease;
	@media screen and (max-width: 1100px) {
		top: -0.6rem;
	}
	@media screen and (max-width: 567px) {
		top: -0.4rem;
	}
`;

const ErrorBlock = styled.div`
	font-weight: 450;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.7rem;
	color: #9b9b9b;
`;

const SuccessBlock = styled.div`
	font-weight: 450;
	font-size: ${props => props.theme.fontsm};
	line-height: 1.7rem;
	color: #9b9b9b;
`;

export const Modal = ({ closeModal, setCloseModal }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onChange',
	});

	const onSubmit = data => {
		console.log(data);
		reset();
	};

	return (
		<Wrapper closeModal={closeModal}>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<WrapperTop>
					<div>/enter community </div>
					<Close onClick={() => setCloseModal(true)}>
						<span></span>
						<span></span>
					</Close>
				</WrapperTop>
				{/* <ErrorBlock>Something went wrong. Try again.</ErrorBlock> */}
				{/* <SuccessBlock>You subscribed.</SuccessBlock> */}
				<Content>
					<InputWrapper>
						<Input
							type='email'
							name='email'
							{...register('email', {
								required: 'enter valid email adress',
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
					<Button type='submit'>
						<span>SUBSCRIBE</span>
					</Button>
				</Content>
			</Form>
		</Wrapper>
	);
};
