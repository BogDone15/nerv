import React from 'react';
import { OrderItemDesktop } from './OrderItemDesktop';
import { OrderItemTablet } from './OrderItemTablet';

export const OrderItem = ({ setActiveImage, setShowFirstItem }) => {
	return (
		<>
			<OrderItemTablet setShowFirstItem={setShowFirstItem} />
			<OrderItemDesktop
				setActiveImage={setActiveImage}
				setShowFirstItem={setShowFirstItem}
			/>
		</>
	);
};
