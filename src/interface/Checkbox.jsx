import React from 'react';
import styled, { keyframes } from 'styled-components';

const Input = styled.input`
	height: 0;
	width: 0;
	opacity: 0;
	z-index: -1;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
	width: 2.2rem;
	height: 2.2rem;
	background: transparent;
	position: absolute;
	top: -0.4rem;
	left: -5rem;
	border: 1px solid #cecece;
	cursor: pointer;
	transition: all 0.2s ease;

	${Input}:not(:disabled):checked & {
		background: #d1d1d1;
	}

	&::after {
		content: '';
		position: absolute;
		display: none;
	}

	${Input}:checked + &::after {
		display: block;
		top: 0.1rem;
		left: 0.6rem;
		width: 35%;
		height: 70%;
		border: solid #cecece;
		border-width: 0 0.2rem 0.2rem 0;
		animation-name: ${rotate};
		animation-duration: 0.3s;
		animation-fill-mode: forwards;
	}
	@media screen and (max-width: 862px) {
		top: 0.4rem;
	}
	@media screen and (max-width: 567px) {
		top: 1rem;
		left: -4rem;
	}
`;

const Label = styled.label`
	position: relative;
	display: inline-block;
	margin: 1.6rem 3rem 1.5rem 7rem;
	color: #adadad;
	font-size: 1.1rem;
	font-weight: 450;
	cursor: pointer;
	&:hover {
		${Indicator} {
			border: 1px solid #fff;
		}
	}
	@media screen and (max-width: 862px) {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 567px) {
		font-size: 1.5rem;
		margin-left: 6rem;
		margin-right: 1rem;
	}
`;

export default function Checkbox({ checked, onChange, id, label }) {
	return (
		<Label htmlFor={id}>
			{label}
			<Input id={id} type='checkbox' checked={checked} onChange={onChange} />
			<Indicator />
		</Label>
	);
}
