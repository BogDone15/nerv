import {
	Box,
	Button,
	Checkbox,
	CircularProgress,
	Divider,
	FormControlLabel,
	Grid,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import apiCallsService from '../services/apiCalls.service';
import { ErrorAlert } from '../alerts/ErrorAlert';
import { SuccessAlert } from '../alerts/SuccessAlert';
import { useLocation } from 'react-router-dom';

export const Hero = () => {
	const [heroTypeValue, setHeroTypeValue] = useState('');

	const [heroImageName, setHeroImageName] = useState('');
	const [heroImageUrl, setHeroImageUrl] = useState('');
	const [heroImageLoading, setHeroImageLoading] = useState(false);

	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [title, setTitle] = useState('');
	const [currentCategoryId, setCurrentCategoryId] = useState();
	const [loading, setLoading] = useState(false);

	const [checkedLcok, setCheckedLcok] = useState(false);

	const location = useLocation();
	const pathName = location.pathname.split('/')[2];

	useEffect(() => {
		async function fetchCategoriesData() {
			setHeroImageLoading(true);

			const response = await apiCallsService.getCategoriesRequest();

			if (response.error) {
				setTitle('Fetch Error Data');
				setShowErrorAlert(true);
				setHeroImageLoading(false);
				return;
			}

			const currentCategory = response.find(item => item.id === pathName);

			setHeroImageLoading(false);
			setHeroImageUrl(currentCategory.img);
			setCurrentCategoryId(currentCategory.id);
			setHeroTypeValue(currentCategory.type);
			setCheckedLcok(currentCategory.lock);
		}

		pathName && fetchCategoriesData();
	}, [pathName]);

	const handleClick = async e => {
		e.preventDefault();

		setShowErrorAlert(false);
		setShowSuccessAlert(false);

		if (!heroTypeValue.length || !heroImageUrl) {
			return;
		}

		setLoading(true);

		if (pathName) {
			const response = await apiCallsService.putCategoryRequest(
				currentCategoryId,
				{
					img: heroImageUrl,
					type: heroTypeValue,
					lock: checkedLcok,
				}
			);

			if (response.error) {
				setLoading(false);
				setTitle('Submit Error');
				setShowErrorAlert(true);
				return;
			}

			setTitle('Submit Success');
			setShowSuccessAlert(true);
			setLoading(false);
			return;
		}

		const response = await apiCallsService.postCategoriesRequest({
			img: heroImageUrl,
			type: heroTypeValue,
			lock: checkedLcok,
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

	const handleChange = async e => {
		setHeroImageLoading(true);
		const formData = new FormData();
		formData.append('file', e.target.files[0]);

		const response = await apiCallsService.postFileUploadRequest(formData);

		if (response.error) {
			setTitle('Error Image Load');
			setShowErrorAlert(true);
			setHeroImageLoading(false);
			return;
		}

		setHeroImageName(e.target.files[0].name);
		setHeroImageUrl(response.url);
		setHeroImageLoading(false);
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
						HERO
					</Typography>
					<Divider />

					<form
						style={{
							padding: '21px 10px 8px 50px',
							borderRight: '1px solid rgba(0, 0, 0, 0.12)',
						}}
					>
						<Stack direction='column' gap='15px' marginBottom='20px'>
							<TextField
								label='HERO TYPE'
								variant='outlined'
								size='small'
								type='text'
								disabled={
									heroTypeValue === 'spec armr' || heroTypeValue === 'items'
										? true
										: false
								}
								value={heroTypeValue}
								onChange={e => setHeroTypeValue(e.target.value)}
								sx={{ width: '300px' }}
							/>
							<FormControlLabel
								control={<Checkbox />}
								checked={checkedLcok}
								label='LOCK'
								sx={{ width: '60px' }}
								onChange={e => setCheckedLcok(e.target.checked)}
							/>
							<input
								accept='image/*'
								style={{ display: 'none' }}
								id='raised-button-file-corp'
								multiple
								type='file'
								onChange={handleChange}
							/>
							<label htmlFor='raised-button-file-corp'>
								<Button
									variant='raised'
									component='span'
									sx={{
										background: '#1976d2',
										color: '#fff',
										padding: '6px 16px',
										width: '300px',
									}}
								>
									Choose HERO IMAGE
								</Button>
							</label>
							{heroImageLoading && (
								<CircularProgress
									sx={{
										width: '20px !important',
										height: '20px !important',
										margin: '20px 0 20px 120px',
									}}
								/>
							)}
							{heroImageUrl && (
								<>
									<Box
										component='img'
										sx={{
											height: 'auto',
											width: '200px',
											margin: '20px 0 10px',
										}}
										alt='image'
										src={heroImageUrl}
									/>
									<Typography>{heroImageName}</Typography>
								</>
							)}
						</Stack>

						<Button
							type='submit'
							variant='contained'
							onClick={handleClick}
							disabled={!heroTypeValue.length || !heroImageUrl}
						>
							{!loading && <span>SUBMIT</span>}
							{loading && (
								<CircularProgress
									sx={{ width: '20px !important', height: '20px !important' }}
								/>
							)}
						</Button>
					</form>
				</Box>
			</Grid>
		</>
	);
};
