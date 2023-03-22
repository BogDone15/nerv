import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	max-width: 24.2rem;
	width: 100%;
	opacity: ${props => (props.closeModal ? '0' : '1')};
	pointer-events: ${props => (props.closeModal ? 'none' : 'auto')};
	transition: all 0.2s ease;
	@media screen and (max-width: 1100px) {
		right: unset;
		left: 3.7rem;
	}
`;

const WrapperTop = styled.div`
	height: 3.6rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${props => props.theme.colorMain};
	padding: 0 0.8rem 0 1.3rem;
	& > div {
		&:first-child {
			font-weight: 400;
			font-size: 1.2rem;
			line-height: 1.6rem;
			color: #9b9b9b;
		}
	}
`;

const Close = styled.div`
	display: flex;
	align-items: center;
	width: 2rem;
	height: 2rem;
	cursor: pointer;
	& > span {
		width: 100%;
		height: 1px;
		background: ${props => props.theme.colorGray};
		transform: translateX(0.5rem) rotate(45deg);
		transition: all 0.2s ease;
		&:last-child {
			transform: translateX(-0.5rem) rotate(-45deg);
		}
	}
	&:hover {
		& > span {
			background: #bcbbbb;
		}
	}
`;

const Content = styled.div`
	width: 100%;
	margin-bottom: 2px;
	background: #bcbbbb;
	padding: 2.9rem 1rem 1.1rem;
`;

const WrapperMain = styled.div`
	width: 100%;
	height: 100%;
`;

const Block = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 7px;
	& > span {
		&:first-child {
			border-radius: 50%;
			background: ${props => props.theme.colorBlack};
			width: 3px;
			height: 3px;
		}
		&:last-child {
			font-weight: 300;
			font-size: 7px;
			line-height: 9px;
			color: ${props => props.theme.colorBlack};
		}
	}
`;

const Button = styled.button`
	background: #bcbbbb;
	border: none;
	padding: 1.2rem 0;
	cursor: pointer;
	& > span {
		font-weight: 300;
		font-size: 1rem;
		line-height: 1.3rem;
		color: ${props => props.theme.colorBlack};
		text-transform: uppercase;
	}
`;

const InputWrapper = styled.div`
	position: relative;
	margin-bottom: 1.7rem;
	&:last-child {
		margin-bottom: 1.9rem;
	}
`;

const Input = styled.input`
	border: 1px solid ${props => props.theme.colorBorder};
	background: transparent;
	outline: none;
	width: 100%;
	font-size: 1.3rem;
	color: #000000;
	height: 3.2rem;
`;

const InputPlaceHolder = styled.span`
	position: absolute;
	background: #bcbbbb;
	padding: 0 0.6rem;
	left: 2rem;
	top: -0.8rem;
	font-weight: 300;
	font-size: 1rem;
	line-height: 1.3rem;
	color: #000000;
	text-transform: uppercase;
	transition: all 0.2s ease;
`;

export const Modal = ({ closeModal, setCloseModal }) => {
	return (
		<Wrapper closeModal={closeModal}>
			<WrapperTop>
				<div>/enter community </div>
				<Close onClick={() => setCloseModal(true)}>
					<span></span>
					<span></span>
				</Close>
			</WrapperTop>
			<WrapperMain>
				<Content>
					<InputWrapper>
						<Input type='name' name='name' />
						<InputPlaceHolder>Name</InputPlaceHolder>
					</InputWrapper>
					<InputWrapper>
						<Input type='email' name='email' />
						<InputPlaceHolder>Email</InputPlaceHolder>
					</InputWrapper>
					<Block>
						<span></span>
						<span>EXPERIMENT AGREEMENT</span>
					</Block>
				</Content>
				<Button>
					<span>SUBSCRIBE</span>
				</Button>
			</WrapperMain>
		</Wrapper>
	);
};
