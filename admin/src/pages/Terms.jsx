import {
	Box,
	Button,
	CircularProgress,
	Divider,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { typeData } from '../data';
import { useState } from 'react';
import apiCallsService from '../services/apiCalls.service';
import { ErrorAlert } from '../alerts/ErrorAlert';
import { SuccessAlert } from '../alerts/SuccessAlert';

export const Terms = () => {
	const [termsData, setTermsData] = useState(typeData);
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState('');

	const [corporationImageName, setCorporationImageName] = useState('');
	const [corporationImageUrl, setCorporationImageUrl] = useState('');
	const [corporationImageLoading, setCorporationImageLoading] = useState(false);

	const [contactsImageName, setContactsImageName] = useState('');
	const [contactsImageUrl, setContactsImageUrl] = useState('');
	const [contactsImageLoading, setContactsImageLoading] = useState(false);

	useEffect(() => {
		async function fetchTermsData() {
			setShowErrorAlert(false);
			setShowSuccessAlert(false);

			const response = await apiCallsService.getTermsRequest();

			if (response.error) {
				setTitle('Fetch Error Data');
				setShowErrorAlert(true);
				return;
			}

			if (response.length > 0) {
				setCorporationImageUrl(response[0].image);
				setContactsImageUrl(response[1].image);
				setTermsData(response);
			}
		}

		fetchTermsData();
	}, []);

	const handleImageChange = async (e, type) => {
		const formData = new FormData();
		formData.append('file', e.target.files[0]);

		const response = await apiCallsService.postFileUploadRequest(formData);

		if (response.error) {
			setTitle('Error Image Load');
			setShowErrorAlert(true);
			return;
		}

		if (type === 'corporation') {
			setCorporationImageName(e.target.files[0].name);
			setCorporationImageUrl(response.url);
			termsData[0].image = response.url;
		} else {
			setContactsImageName(e.target.files[0].name);
			setContactsImageUrl(response.url);
			termsData[1].image = response.url;
		}
	};

	const handleChange = (e, index, field) => {
		const updatedTypes = [...termsData];
		updatedTypes[index][field] = e.target.value;
		setTermsData(updatedTypes);
	};

	console.log(termsData);

	const handleClick = async e => {
		e.preventDefault();
		setShowErrorAlert(false);
		setShowSuccessAlert(false);

		const response = await apiCallsService.postTermsRequest(termsData);

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
			<Grid container direction='row' alignItems='flex-start'>
				<Box width='calc(100% - 430px)' sx={{ paddingBottom: '50px' }}>
					<Typography
						variant='h4'
						sx={{
							padding: '21px 10px 20px 50px',
							borderRight: '1px solid rgba(0, 0, 0, 0.12)',
						}}
					>
						Terms
					</Typography>
					<Divider />
					<form
						style={{
							padding: '21px 10px 8px 50px',
							borderRight: '1px solid rgba(0, 0, 0, 0.12)',
						}}
					>
						{termsData.map((item, index) => (
							<Box key={index} sx={{ marginBottom: '50px' }}>
								<Typography
									variant='h5'
									sx={{ marginBottom: '30px', textTransform: 'uppercase' }}
								>
									{item.type}
								</Typography>
								<Box sx={{ marginBottom: '20px' }}>
									<Typography variant='body2' gutterBottom>
										SIGNITURE
									</Typography>
									<TextField
										variant='outlined'
										size='medium'
										fullWidth
										type='text'
										value={item.signature}
										onChange={e => handleChange(e, index, 'signature')}
									/>
								</Box>
								<Box sx={{ marginBottom: '20px' }}>
									<Typography variant='body2' gutterBottom>
										MAIN TEXT
									</Typography>
									<TextField
										multiline
										fullWidth
										rows={10}
										value={item.mainText}
										onChange={e => handleChange(e, index, 'mainText')}
									/>
								</Box>
							</Box>
						))}
						<Button type='submit' variant='contained' onClick={handleClick}>
							SUBMIT
						</Button>
					</form>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
					}}
				>
					<Box width='400px' sx={{ paddingLeft: '30px', paddingTop: '90px' }}>
						<input
							accept='image/*'
							style={{ display: 'none' }}
							id='raised-button-file-corp'
							multiple
							type='file'
							onChange={e => handleImageChange(e, 'corporation')}
						/>
						<label htmlFor='raised-button-file-corp'>
							<Button
								variant='raised'
								component='span'
								sx={{
									background: '#1976d2',
									color: '#fff',
									padding: '6px 16px',
									minWidth: '64px',
									width: '100%',
									marginTop: '20px',
								}}
							>
								Choose photo CORPORATION
							</Button>
						</label>
						{corporationImageLoading && (
							<CircularProgress
								sx={{
									width: '20px !important',
									height: '20px !important',
									margin: '20px 0 20px 120px',
								}}
							/>
						)}
						{corporationImageUrl && (
							<>
								<Box
									component='img'
									sx={{
										height: 'auto',
										width: '200px',
										margin: '20px 0 10px',
									}}
									alt='image'
									src={corporationImageUrl}
								/>
								<Typography>{corporationImageName}</Typography>
							</>
						)}
					</Box>
					<Box width='400px' sx={{ paddingLeft: '30px', paddingTop: '260px' }}>
						<input
							accept='image/*'
							style={{ display: 'none' }}
							id='raised-button-file-contacts'
							multiple
							type='file'
							onChange={e => handleImageChange(e, 'contacts')}
						/>
						<label htmlFor='raised-button-file-contacts'>
							<Button
								variant='raised'
								component='span'
								sx={{
									background: '#1976d2',
									color: '#fff',
									padding: '6px 16px',
									minWidth: '64px',
									width: '100%',
									marginTop: '20px',
								}}
							>
								Choose photo CONTACTS
							</Button>
						</label>
						{contactsImageLoading && (
							<CircularProgress
								sx={{
									width: '20px !important',
									height: '20px !important',
									margin: '20px 0 20px 120px',
								}}
							/>
						)}
						{contactsImageUrl && (
							<>
								<Box
									component='img'
									sx={{
										height: 'auto',
										width: '200px',
										margin: '20px 0 10px',
									}}
									alt='image'
									src={contactsImageUrl}
								/>
								<Typography>{contactsImageName}</Typography>
							</>
						)}
					</Box>
				</Box>
			</Grid>
		</>
	);
};
