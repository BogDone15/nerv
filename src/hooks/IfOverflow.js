import { useEffect, useState } from 'react';

export const useIsOverflow = (ref, callback) => {
	const [isOverflow, setIsOverflow] = useState(undefined);

	useEffect(() => {
		const { current } = ref;

		const trigger = () => {
			const hasOverflow = current.scrollHeight > current.clientHeight;
			setIsOverflow(hasOverflow);

			callback && callback(hasOverflow);
		};

		if (current) {
			'ResizeObserver' in window &&
				new ResizeObserver(trigger).observe(current);

			trigger();
		}
	}, [callback, ref, isOverflow]);

	return isOverflow;
};
