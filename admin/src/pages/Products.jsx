import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Divider, Typography } from '@mui/material';
import apiCallsService from '../services/apiCalls.service';
import { ErrorAlert } from '../alerts/ErrorAlert';
import { SuccessAlert } from '../alerts/SuccessAlert';
import { DialogPopupProducts } from '../dialogs/DialogPopupProducts';

export const Products = () => {
	const columns = [
		{ field: '_id', headerName: 'ID', width: 90 },
		{
			field: 'name',
			headerName: 'PRODUCT NAME',
			width: 300,
		},
		{
			field: 'model',
			headerName: 'CATEGORY',
			width: 150,
		},
		{
			field: 'price',
			headerName: 'PRICE',
			width: 150,
		},
		{
			field: 'edit',
			headerName: 'EDIT',
			width: 120,
			renderCell: params => {
				return (
					<>
						<Button
							href={'/admin/products/' + params.row._id}
							type='button'
							variant='contained'
						>
							Edit
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
							onClick={() => handleDelete(params.row._id)}
						/>
					</>
				);
			},
		},
	];

	const [products, setProducts] = useState([]);
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [title, setTitle] = useState('');
	const [open, setOpen] = useState(false);
	const [productId, setProductId] = useState();

	const handleDelete = id => {
		setProductId(id);
		setOpen(true);
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await apiCallsService.getProductsRequest();

			if (response.error) {
				setTitle('Error Loading Products');
				setShowErrorAlert(true);
				return;
			}

			setProducts(response);
		};

		fetchData();
	}, []);

	return (
		<>
			<DialogPopupProducts
				open={open}
				setOpen={setOpen}
				productId={productId}
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
				PRODUCT MENU
			</Typography>
			<Divider />
			<Button
				href='/admin/newproduct'
				type='button'
				variant='contained'
				sx={{ marginBottom: '50px', marginLeft: '50px', marginTop: '23px' }}
			>
				ADD NEW PRODUCT
			</Button>
			<Box
				sx={{
					width: '1100px',
					paddingLeft: '50px',
					paddingRight: '10px',
				}}
			>
				<DataGrid
					rows={products}
					getRowId={row => row._id}
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
