import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import apiCallsService from '../services/apiCalls.service';
import { ErrorAlert } from '../alerts/ErrorAlert';
import { SuccessAlert } from '../alerts/SuccessAlert';
import { DialogPopup } from '../dialogs/DialogPopup';
import { Link } from 'react-router-dom';

export const Heroes = () => {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'type',
			headerName: 'HERO TYPE',
			width: 200,
		},
		{
			field: 'lock',
			headerName: 'LOCK',
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
							component={Link}
							to={'/hero/' + params.row.id}
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
						<DeleteIcon onClick={() => handleDelete(params.id)} />
					</>
				);
			},
		},
	];

	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [categoriesList, setCategoriesList] = useState([]);
	const [categoryId, setCategoryId] = useState();
	const [title, setTitle] = useState('');
	const [open, setOpen] = useState(false);

	const handleDelete = id => {
		setCategoryId(id);
		setOpen(true);
	};

	useEffect(() => {
		async function fetchCategoriesData() {
			setShowErrorAlert(false);
			setShowSuccessAlert(false);

			const response = await apiCallsService.getCategoriesRequest();

			if (response.error) {
				setTitle('Fetch Error Data');
				setShowErrorAlert(true);
				return;
			}
			setCategoriesList(response);
		}

		fetchCategoriesData();
	}, []);

	return (
		<>
			<DialogPopup
				open={open}
				setOpen={setOpen}
				categoryId={categoryId}
				setShowErrorAlert={setShowErrorAlert}
				setShowSuccessAlert={setShowSuccessAlert}
				setTitle={setTitle}
			/>
			{showErrorAlert && <ErrorAlert title={title} />}
			{showSuccessAlert && <SuccessAlert title={title} />}
			<Grid container direction='row' alignItems='flex-start'>
				<Box width='100%' sx={{ paddingBottom: '50px' }}>
					<Typography
						variant='h4'
						sx={{
							padding: '21px 10px 20px 50px',
							borderRight: '1px solid rgba(0, 0, 0, 0.12)',
						}}
					>
						HEROES
					</Typography>
					<Divider />

					<Button
						component={Link}
						to='/hero'
						type='button'
						variant='contained'
						sx={{ marginBottom: '50px', marginLeft: '50px', marginTop: '23px' }}
					>
						ADD HERO
					</Button>
					<Box
						sx={{
							width: '750px',
							marginLeft: '50px',
						}}
					>
						<DataGrid
							rows={categoriesList}
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
				</Box>
			</Grid>
		</>
	);
};
