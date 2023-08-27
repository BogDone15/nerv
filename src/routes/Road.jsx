import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
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
			{/* <Route path='/' element={<Home />} /> */}
			<Route path='/character' element={<Character />} />
			<Route path='/character/:id' element={<Product />} />
			<Route path='/order' element={<Order />} />
			<Route path='/checkout' element={<Checkout />} />
			<Route path='/:item' element={<Terms />} />
			<Route path='/order-granted' element={<OrderGranted />} />
			<Route path='/order-error' element={<OrderError />} />
			<Route path='/failure' element={<Failure />} />
		</Routes>
	);
};
