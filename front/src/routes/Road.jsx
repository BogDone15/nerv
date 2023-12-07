import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Character } from '../pages/Character';
import { Product } from '../pages/Product';
import { Order } from '../pages/Order';
import { Checkout } from '../pages/Checkout';
import { Terms } from '../pages/Terms';
import { OrderGranted } from '../pages/OrderGranted';
import { OrderError } from '../pages/OrderError';
import { Failure } from '../pages/Failure';
import { Main } from '../components/homeComponent/Main';

export const Road = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/interface' element={<Character />} />
			<Route path='/interface/:id' element={<Product />} />
			<Route path='/order' element={<Order />} />
			<Route path='/checkout' element={<Checkout />} />
			<Route path='/:item' element={<Terms />} />
			<Route path='/order-granted' element={<OrderGranted />} />
			<Route path='/order-error' element={<OrderError />} />
			<Route path='/failure' element={<Failure />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};
