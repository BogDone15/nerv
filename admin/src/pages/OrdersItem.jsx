import React from 'react';
import { useEffect } from 'react';
import apiCallsService from '../services/apiCalls.service';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorAlert } from '../alerts/ErrorAlert';
import { Box, Typography } from '@mui/material';

export const OrdersItem = () => {
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [title, setTitle] = useState('');
	const [contactData, setContactData] = useState({});
	const [productData, setProductData] = useState([]);

	const location = useLocation();
	const pathName = location.pathname.split('/')[2];

	useEffect(() => {
		const fetchData = async () => {
			const response = await apiCallsService.getOrdersRequest();

			if (response.error) {
				setTitle('Error Loading Order');
				setShowErrorAlert(true);
				return;
			}

			const currentOrder = response.find(item => item.id === pathName);

			setContactData(currentOrder.contactInfo);
			setProductData(currentOrder.productInfo);
		};

		fetchData();
	}, [pathName]);


	const [order, setOrder] = useState(null);
	const orderId = location.pathname.split('/')[2];

	useEffect(() => {
		const fetchData = async () => {
			const response = await apiCallsService.getOrderItemRequest(orderId);

			if (response.error) {
				setTitle('Error Loading Order');
				setShowErrorAlert(true);
				return;
			}

			setOrder(response);
		};

		fetchData();
	}, [orderId]);


	return (
		<>
			{showErrorAlert && <ErrorAlert title={title} />}
			<Box sx={{ padding: '20px' }}>
				<Typography variant='h6' gutterBottom>
					CONTACT INFO
				</Typography>
				{Object.entries(contactData).map(([key, val]) => (
					<Box key={val} sx={{ display: 'flex', gap: '10px' }}>
						<Typography variant='body2' sx={{ textTransform: 'uppercase' }}>
							{key}:
						</Typography>
						<Typography variant='body2'>{val}</Typography>
					</Box>
				))}
				<Typography variant='h6' sx={{ marginTop: '40px' }}>
					PRODUCT INFO
				</Typography>
				{productData.map((item, index) => (
					<Box key={index} sx={{ marginBottom: '20px' }}>
						{Object.entries(item).map(([key, val]) => (
							<Box key={val} sx={{ display: 'flex', gap: '10px' }}>
								<Typography variant='body2' sx={{ textTransform: 'uppercase' }}>
									{key}:
								</Typography>
								<Typography variant='body2' sx={{ textTransform: 'uppercase' }}>
									{val}
								</Typography>
							</Box>
						))}
					</Box>
				))}
				{order?.paymentGateway === 'paypal' && <div>
					<Typography variant='h6' sx={{ marginTop: '40px' }}>
						PAYPAL INFO
					</Typography>

					{Object.entries(order.paypalData).map(([key, val]) => (
						<Box key={val} sx={{ display: 'flex', gap: '10px' }}>
							<Typography variant='body2'>
								{key}:
							</Typography>
							<Typography variant='body2'>{val}</Typography>
						</Box>
					))}
				</div>}
			</Box>
		</>
	);
};
