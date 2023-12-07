import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

const Mob = styled.div`
	display: none;
	@media screen and (max-width: 567px) {
		display: block;
		margin-top: 4rem;
		& > div {
			font-weight: 400;
			font-size: 1.2rem;
			line-height: 1.5rem;
			color: #adadad;
			margin-bottom: 0.2rem;
			&:last-child {
				color: ${props => props.theme.colorMain} !important;
				margin-bottom: 0;
			}
		}
	}
`;

export const TypeAnimationMob = () => {
	return (
		<Mob>
			<TypeAnimation
				style={{
					whiteSpace: 'pre-line',
					display: 'block',
					fontWeight: '400',
					fontSize: '1.2rem',
					lineHeight: '1.5rem',
					color: '#adadad',
				}}
				sequence={[
					1000,
					`/ dev\n/ start
    


    / text
    LATEST EXSPANTION
`,
					1000000,
					'',
				]}
				speed={80}
				cursor={false}
				repeat={0}
			/>
		</Mob>
	);
};
