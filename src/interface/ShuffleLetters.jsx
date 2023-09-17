import React, { useState } from 'react';

export const ShuffleLetters = ({ text }) => {
	const [shuffledText, setShuffledText] = useState(text);

	const allowedCharacters = shuffledText.replace(/ /g, '').split('');

	function getRandomCharacter() {
		const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
		return allowedCharacters[randomIndex];
	}

	function createEventHandler() {
		let isInProgress = false;

		let BASE_DELAY;

		return function handleHoverEvent(e) {
			if (isInProgress) {
				return;
			}
			const text = e.target.innerHTML;
			const randomizedText = text.split('').map(getRandomCharacter).join('');

			if (text.length <= 5) {
				BASE_DELAY = 28;
			}

			if (text.length > 5) {
				BASE_DELAY = 20;
			}

			if (text.length >= 11) {
				BASE_DELAY = 12;
			}

			if (text.length > 15) {
				BASE_DELAY = 9;
			}

			if (text.length > 20) {
				BASE_DELAY = 7;
			}

			for (let i = 0; i < text.length; i++) {
				isInProgress = true;

				setTimeout(
					() => {
						const nextIndex = i + 1;
						e.target.innerHTML = `${text.substring(
							0,
							nextIndex
						)}${randomizedText.substring(nextIndex)}`;

						if (nextIndex === text.length) {
							isInProgress = false;
						}
					},
					// i * (text.length > 11 ? 10 : BASE_DELAY)
					i * BASE_DELAY
				);
			}
		};
	}

	const eventHandler = createEventHandler();

	return <span onMouseEnter={eventHandler}> {shuffledText}</span>;
};
