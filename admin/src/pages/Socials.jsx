import React, { useEffect } from 'react';
import {
	Button,
	CircularProgress,
	Divider,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import apiCallsService from '../services/apiCalls.service';
import { ErrorAlert } from '../alerts/ErrorAlert';
import { SuccessAlert } from '../alerts/SuccessAlert';

export const Socials = () => {
	const [instagramValue, setInstagramValue] = useState('');
	const [facebookValue, setFacebookValue] = useState('');
	const [telegramValue, setTelegramValue] = useState('');
	const [loading, setLoading] = useState(false);
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [title, setTitle] = useState('');

	useEffect(() => {
		async function fetchSocialsData() {
			const response = await apiCallsService.getSocialsRequest();

			if (response.error) {
				setTitle('Fetch Error Data');
				setShowErrorAlert(true);
				return;
			}

			setInstagramValue(response.instagram);
			setTelegramValue(response.telegram);
			setFacebookValue(response.facebook);
		}

		fetchSocialsData();
	}, []);

	const handleClick = async e => {
		e.preventDefault();
		setShowErrorAlert(false);
		setShowSuccessAlert(false);

		if (
			!instagramValue.length ||
			!facebookValue.length ||
			!telegramValue.length
		) {
			return;
		}

		setLoading(true);

		const response = await apiCallsService.postSocialsRequest({
			instagram: instagramValue,
			facebook: facebookValue,
			telegram: telegramValue,
		});

		if (response.error) {
			setLoading(false);
			setTitle('Submit Error');
			setShowErrorAlert(true);
			return;
		}

		setTitle('Submit Success');
		setShowSuccessAlert(true);
		setLoading(false);
	};

	return (
		<>
			{showErrorAlert && <ErrorAlert title={title} />}
			{showSuccessAlert && <SuccessAlert title={title} />}
			<Typography
				variant='h4'
				gutterBottom
				sx={{ padding: '21px 10px 8px 50px' }}
			>
				SOCIALS LINK
			</Typography>
			<Divider />
			<form>
				<Grid
					container
					direction='column'
					gap='20px'
					maxWidth='500px'
					sx={{ padding: '23px 10px 6px 50px' }}
				>
					<TextField
						label='Instagram'
						variant='outlined'
						size='small'
						type='text'
						value={instagramValue}
						onChange={e => setInstagramValue(e.target.value)}
					/>
					<TextField
						label='Facebook'
						variant='outlined'
						size='small'
						type='text'
						value={facebookValue}
						onChange={e => setFacebookValue(e.target.value)}
					/>
					<TextField
						label='Telegram'
						variant='outlined'
						size='small'
						type='text'
						value={telegramValue}
						onChange={e => setTelegramValue(e.target.value)}
					/>
				</Grid>
				<Button
					onClick={handleClick}
					type='submit'
					variant='contained'
					sx={{ marginTop: '30px', marginLeft: '50px' }}
					disabled={
						!instagramValue.length ||
						!facebookValue.length ||
						!telegramValue.length
					}
				>
					{!loading && <span>SUBMIT</span>}
					{loading && (
						<CircularProgress
							sx={{ width: '20px !important', height: '20px !important' }}
						/>
					)}
				</Button>
			</form>
		</>
	);
};
