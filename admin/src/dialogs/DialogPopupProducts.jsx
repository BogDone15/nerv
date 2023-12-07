import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import React from 'react';
import apiCallsService from '../services/apiCalls.service';

export const DialogPopupProducts = ({
	open,
	setOpen,
	productId,
	setTitle,
	setShowErrorAlert,
	setShowSuccessAlert,
}) => {
	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = async () => {
		setOpen(false);
		setShowErrorAlert(false);
		setShowSuccessAlert(false);

		const response = await apiCallsService.deleteProductsRequest(productId);
		if (response.error) {
			setTitle('Error Delete');
			setShowErrorAlert(true);
			return;
		}

		setTitle('Success Delete');
		setShowSuccessAlert(true);
		window.location.reload();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title'>{'Are you sure?'}</DialogTitle>
			<DialogContent></DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Disagree</Button>
				<Button onClick={handleDelete} autoFocus>
					Agree
				</Button>
			</DialogActions>
		</Dialog>
	);
};
