import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Divider, Typography } from '@mui/material';
import apiCallsService from '../services/apiCalls.service';
import { ErrorAlert } from '../alerts/ErrorAlert';
import { SuccessAlert } from '../alerts/SuccessAlert';
import { DialogPopupOrders } from '../dialogs/DialogPopupOrders';
import { Link } from 'react-router-dom';

const gatewayLabelById = {
	paypal: 'PayPal',
	fondy: 'Fondy',
};

const ORDER_STATUS_LABELS = {
	complete: 'Complete',
};

export const Orders = () => {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 120 },
		{
			field: 'lastName',
			headerName: 'NAME',
			width: 250,
			valueGetter: params => params.row.contactInfo.lastName,
		},

		{
			field: 'createdAt',
			headerName: 'CREATEDAT',
			width: 200,
			renderCell: params => {
				const time = params.row.createdAt;
				const today = new Date(time);
				return <>{today.toDateString()}</>;
			},
		},
		{
			field: 'gateway',
			headerName: 'GATEWAY',
			width: 150,
			valueGetter: params =>
				gatewayLabelById[params.row.paymentGateway] ||
				params.row.paymentGateway,
		},
		{
			field: 'status',
			headerName: 'STATUS',
			width: 150,
			valueGetter: params =>
				ORDER_STATUS_LABELS[params.row.status] || params.row.status,
		},
		{
			field: 'total',
			headerName: 'TOTAL PRICE',
			width: 150,
			valueGetter: params => params.row.cart.total,
		},
		{
			field: 'edit',
			headerName: 'DETAILS',
			width: 100,
			renderCell: params => {
				return (
					<>
						<Button
							component={Link}
							to={'/orders/' + params.row.id}
							type='button'
							variant='contained'
						>
							DEtAILS
						</Button>
					</>
				);
			},
		},
		{
			field: 'delete',
			headerName: 'DELETE',
			type: 'number',
			width: 110,

			renderCell: params => {
				return (
					<>
						<DeleteIcon
							sx={{ cursor: 'pointer' }}
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	const [orders, setOrders] = useState([]);
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [title, setTitle] = useState('');
	const [open, setOpen] = useState(false);
	const [orderId, setOrderId] = useState();

	const handleDelete = id => {
		setOrderId(id);
		setOpen(true);
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await apiCallsService.getOrdersRequest();

			if (response.error) {
				setTitle('Error Loading Orders');
				setShowErrorAlert(true);
				return;
			}

			setOrders(response);
		};

		fetchData();
	}, []);
	return (
		<>
			<DialogPopupOrders
				open={open}
				setOpen={setOpen}
				orderId={orderId}
				setShowErrorAlert={setShowErrorAlert}
				setShowSuccessAlert={setShowSuccessAlert}
				setTitle={setTitle}
			/>
			{showErrorAlert && <ErrorAlert title={title} />}
			{showSuccessAlert && <SuccessAlert title={title} />}
			<Typography
				variant='h4'
				gutterBottom
				sx={{ padding: '21px 10px 8px 50px' }}
			>
				ORDERS
			</Typography>
			<Divider />

			<Box
				sx={{
					width: '100%',
					paddingLeft: '50px',
					paddingRight: '10px',
					marginTop: '30px',
				}}
			>
				<DataGrid
					rows={orders}
					getRowId={row => row.id}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 20,
							},
						},
					}}
					pageSizeOptions={[20]}
					checkboxSelection
					disableRowSelectionOnClick
				/>
			</Box>
		</>
	);
};
