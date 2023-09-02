import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const StyledSelectWrapper = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 1.7rem;
	& > div {
		width: 100%;
		height: 4rem;
	}

	@media screen and (max-width: 1100px) {
		& > div {
			height: 6rem;
		}
		& > p {
			font-size: 1.2rem;
		}
		font-size: 2.1rem;
	}
	@media screen and (max-width: 567px) {
		margin-bottom: 2.6rem;
		& > p {
			font-size: 1.4rem;
		}
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
		top: -1.5rem;
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
		font-size: ${props => props.theme.fontsm};
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

const options = [
	{ value: 'Ukraine', label: 'Ukraine' },
	{ value: 'Canada', label: 'Canada' },
	{ value: 'USA', label: 'USA' },
];

const getValue = value =>
	value ? options.find(option => option.value === value) : '';

export const SelectCountry = ({ setCountry, value, onChange, errors }) => {
	return (
		<StyledSelectWrapper>
			<StyledSelect
				classNamePrefix='Select'
				options={options}
				placeholder='Country'
				value={getValue(value)}
				onChange={newValue => {
					onChange(newValue.value);
					setCountry(newValue.value);
				}}
			/>
			<p style={{ color: 'red' }}>{errors.country?.message}</p>
		</StyledSelectWrapper>
	);
};
