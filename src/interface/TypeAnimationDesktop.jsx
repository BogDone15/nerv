import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

const Desktop = styled.div`
	@media screen and (max-width: 567px) {
		display: none;
	}
`;

export const TypeAnimationDesktop = () => {
	return (
		<Desktop>
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
					`/ dev\n/ start
    
    /img [ BANNER ]
    
    /add
    
    [transformation]
    
    / main hero
    
    UTRA BOOST\nYOUR SYSTEM\nIN COMPLETE\nFULL SET
`,
					1000000,
					'',
				]}
				speed={100}
				cursor={false}
				repeat={0}
			/>
		</Desktop>
	);
};
