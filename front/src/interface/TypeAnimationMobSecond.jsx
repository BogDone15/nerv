import React from 'react';
import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

const BottomCornerMob = styled.div`
	display: none;
	@media screen and (max-width: 567px) {
		display: block;
		position: absolute;
		right: 2rem;
		bottom: 7rem;
		& > div {
			font-weight: 400;
			font-size: 1.2rem;
			line-height: 1.5rem;
			color: #adadad;
		}
	}
`;

export const TypeAnimationMobSecond = () => {
	return (
		<BottomCornerMob>
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
					`/add

      [transformation]

      / main hero

      UTRA BOOST
      YOUR SYSTEM
      IN COMPLETE
      FULL SET
 `,
					1000000,
					'',
				]}
				speed={80}
				cursor={false}
				repeat={0}
			/>
		</BottomCornerMob>
	);
};
