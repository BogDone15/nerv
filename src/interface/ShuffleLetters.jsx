import React, { useState } from 'react';
import styled from 'styled-components';

const ShuffleReverseLetters = styled.div`
	display: inline-block;
	transition: transform 1s ease;
`;

const ShuffleReverseLettersContainer = styled.div`
	position: relative;
	display: inline-block;
	transition: transform 1s ease;
`;

const ShuffleLetters = ({ text }) => {
	const [shuffledText, setShuffledText] = useState(text);

	const shuffleText = () => {
		setShuffledText(text.split('').reverse().join(''));
	};

	const resetText = () => {
		setShuffledText(text);
	};

	return (
		<ShuffleReverseLettersContainer>
			<ShuffleReverseLetters
				onMouseEnter={shuffleText}
				onMouseLeave={resetText}
			>
				{shuffledText}
			</ShuffleReverseLetters>
		</ShuffleReverseLettersContainer>
	);
};

export default ShuffleLetters;
