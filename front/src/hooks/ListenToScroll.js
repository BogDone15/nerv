import { useEffect } from 'react';

export const useListenToScroll = (setIsVisible, isVisible) => {
	useEffect(() => {
		window.addEventListener('scroll', listenToScroll);
		return () => window.removeEventListener('scroll', listenToScroll);
	});

	const listenToScroll = () => {
		let heightToHideFrom = 100;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		if (winScroll > heightToHideFrom) {
			!isVisible && setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
};
