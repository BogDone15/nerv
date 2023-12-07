import {
	Box,
	Button,
	Checkbox,
	CircularProgress,
	Divider,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import {
	productInfoInputsData,
	productInfoTextarea,
	productObject,
} from '../data';
import { OnlySizes } from '../components/OnlySizes';
import { NotOnlySizes } from '../components/NotOnlySizes';
import apiCallsService from '../services/apiCalls.service';
import { ErrorAlert } from '../alerts/ErrorAlert';
import { SuccessAlert } from '../alerts/SuccessAlert';

export const NewProduct = () => {
	const [checkedOnlySizes, setCheckedOnlySizes] = useState(true);
	const [loading, setLoading] = useState(false);
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [title, setTitle] = useState('');

	const [gearImageUrl, setGearImageUrl] = useState('');
	const [gearImageName, setGearImageName] = useState('');
	const [gearImageLoading, setGearImageLoading] = useState(false);

	const [appearanceImageLoading, setAppearanceImageLoading] = useState(false);

	const [windowImageUrl, setWindowImageUrl] = useState('');
	const [windowImageName, setWindowImageName] = useState('');
	const [windowImageLoading, setWindowImageLoading] = useState(false);

	const [productImageLoading, setProductImageLoading] = useState(false);

	const [zoomProductImageLoading, setZoomProductImageLoading] = useState(false);

	const [prodctInfo, setProdctInfo] = useState(productObject);

	const [appearanceImageSlider, setAppearanceImageSlider] = useState([]);
	const [productImageSlider, setProductImageSlider] = useState([]);
	const [productImageSliderZoom, setProductImageSliderZoom] = useState([]);

	const handleChangeInputs = (e, title) => {
		setProdctInfo(prev => ({
			...prev,
			[title]:
				title === 'price'
					? Number(e.target.value)
					: e.target.value && title === 'model'
					? e.target.value.toLowerCase()
					: e.target.value,
		}));
	};

	const handleOnlySizesChange = e => {
		const checked = e.target.checked;
		setCheckedOnlySizes(checked);

		setProdctInfo(prev => ({
			...prev,
			onlySizes: checked,
		}));
	};

	const handleImageChange = async (e, type) => {
		if (type === 'gearImage') {
			setGearImageLoading(true);
		}

		if (type === 'windowImage') {
			setWindowImageLoading(true);
		}

		if (type === 'appearanceImage') {
			setAppearanceImageLoading(true);
		}

		if (type === 'productImage') {
			setProductImageLoading(true);
		}

		if (type === 'productImageZoom') {
			setZoomProductImageLoading(true);
		}

		const formData = new FormData();
		formData.append('file', e.target.files[0]);

		const response = await apiCallsService.postFileUploadRequest(formData);

		if (response.error) {
			setTitle('Error Image Load');
			setShowErrorAlert(true);
			setGearImageLoading(false);
			setWindowImageLoading(false);
			setAppearanceImageLoading(false);
			setProductImageLoading(false);
			setZoomProductImageLoading(false);
			return;
		}

		if (type === 'gearImage') {
			setGearImageName(e.target.files[0].name);
			setGearImageUrl(response.url);
			setProdctInfo(prev => ({
				...prev,
				imgGear: response.url,
			}));
			setGearImageLoading(false);
		}

		if (type === 'windowImage') {
			setWindowImageName(e.target.files[0].name);
			setWindowImageUrl(response.url);
			setProdctInfo(prev => ({
				...prev,
				imgMain: response.url,
			}));
			setWindowImageLoading(false);
		}

		if (type === 'appearanceImage') {
			const newImage = [...appearanceImageSlider];
			newImage.push({ url: response.url, name: e.target.files[0].name });
			setAppearanceImageSlider(newImage);

			const newImageUrlOnly = newImage.map(item => item.url);

			setProdctInfo(prev => ({
				...prev,
				imgSliderAppearance: newImageUrlOnly,
			}));
			setAppearanceImageLoading(false);
		}

		if (type === 'productImage') {
			const newImage = [...productImageSlider];
			newImage.push({ url: response.url, name: e.target.files[0].name });
			setProductImageSlider(newImage);

			const newImageUrlOnly = newImage.map(item => item.url);

			setProdctInfo(prev => ({
				...prev,
				imgSlider: newImageUrlOnly,
			}));
			setProductImageLoading(false);
		}

		if (type === 'productImageZoom') {
			const newImage = [...productImageSliderZoom];
			newImage.push({ url: response.url, name: e.target.files[0].name });
			setProductImageSliderZoom(newImage);

			const newImageUrlOnly = newImage.map(item => item.url);

			setProdctInfo(prev => ({
				...prev,
				imgSliderZoom: newImageUrlOnly,
			}));
			setZoomProductImageLoading(false);
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setShowErrorAlert(false);
		setLoading(true);

		const response = await apiCallsService.postProductsRequest(prodctInfo);

		if (response.error) {
			setTitle('Submit Error');
			setShowErrorAlert(true);
			setLoading(false);
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
				PRODUCT CARDS
			</Typography>
			<Divider />
			<form>
				<Grid
					container
					gap='20px'
					sx={{
						padding: '10px 20px',
						marginTop: '20px',
					}}
				>
					{productInfoInputsData.map(item => (
						<TextField
							key={item.name}
							label={item.label}
							name={item.name}
							variant='outlined'
							size='small'
							type={item.type}
							onChange={e => handleChangeInputs(e, item.title)}
							sx={{ width: '500px', maxWidth: '100%' }}
						/>
					))}
				</Grid>
				<Grid
					container
					gap='20px'
					sx={{
						padding: '10px 20px',
					}}
				>
					{productInfoTextarea.map(item => (
						<Grid item xs={5} key={item.name}>
							<Typography variant='body2' gutterBottom>
								{item.name}
							</Typography>
							<TextField
								multiline
								fullWidth
								rows={10}
								name={item.name}
								onChange={e => handleChangeInputs(e, item.title)}
							/>
						</Grid>
					))}
				</Grid>
				<FormControlLabel
					control={<Checkbox />}
					checked={checkedOnlySizes}
					onChange={handleOnlySizesChange}
					label='Only Sizes'
					sx={{ margin: ' 20px 0 0 10px' }}
				/>
				{checkedOnlySizes ? (
					<OnlySizes
						prodctInfo={prodctInfo}
						setProdctInfo={setProdctInfo}
						checkedOnlySizes={checkedOnlySizes}
					/>
				) : (
					<NotOnlySizes
						prodctInfo={prodctInfo}
						setProdctInfo={setProdctInfo}
						checkedOnlySizes={checkedOnlySizes}
					/>
				)}
				<Grid
					container
					direction='column'
					sx={{ margin: '20px 10px 30px 20px' }}
				>
					<input
						accept='image/*'
						style={{ display: 'none' }}
						id='raised-button-gear'
						multiple
						type='file'
						onChange={e => handleImageChange(e, 'gearImage')}
					/>
					<label htmlFor='raised-button-gear'>
						<Button
							variant='raised'
							component='span'
							sx={{
								background: '#1976d2',
								color: '#fff',
								padding: '6px 16px',
								minWidth: '64px',
								width: '400px',
								marginTop: '20px',
							}}
						>
							Choose GEAR PRODUCT IMAGE
						</Button>
					</label>
					{gearImageLoading && (
						<CircularProgress
							sx={{
								width: '20px !important',
								height: '20px !important',
								margin: '20px 0 20px 120px',
							}}
						/>
					)}
					{gearImageUrl && (
						<>
							<Box
								component='img'
								sx={{
									height: 'auto',
									width: '200px',
									margin: '20px 0 10px',
								}}
								alt='image'
								src={gearImageUrl}
							/>
							<Typography>{gearImageName}</Typography>
						</>
					)}
					<input
						accept='image/*'
						style={{ display: 'none' }}
						id='raised-button-appearance'
						multiple
						type='file'
						onChange={e => handleImageChange(e, 'appearanceImage')}
					/>
					<label htmlFor='raised-button-appearance'>
						<Button
							variant='raised'
							component='span'
							sx={{
								background: '#1976d2',
								color: '#fff',
								padding: '6px 16px',
								minWidth: '64px',
								width: '400px',
								marginTop: '20px',
							}}
						>
							Choose APPEARANCE IMAGE SLIDER
						</Button>
					</label>
					{appearanceImageLoading && (
						<CircularProgress
							sx={{
								width: '20px !important',
								height: '20px !important',
								margin: '20px 0 20px 120px',
							}}
						/>
					)}
					{appearanceImageSlider && (
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: '2rem',
								alignItems: 'flex-start',
							}}
						>
							{appearanceImageSlider.map(item => (
								<Box key={item.url} sx={{ width: '200px' }}>
									<Box
										component='img'
										sx={{
											height: 'auto',
											width: '100%',
											margin: '20px 0 10px',
										}}
										alt='image'
										src={item.url}
									/>
									<Typography>{item.name}</Typography>
								</Box>
							))}
						</Box>
					)}

					<input
						accept='image/*'
						style={{ display: 'none' }}
						id='raised-button-window'
						multiple
						type='file'
						onChange={e => handleImageChange(e, 'windowImage')}
					/>
					<label htmlFor='raised-button-window'>
						<Button
							variant='raised'
							component='span'
							sx={{
								background: '#1976d2',
								color: '#fff',
								padding: '6px 16px',
								minWidth: '64px',
								width: '400px',
								marginTop: '20px',
							}}
						>
							Choose WINDOW + PREVIEW PRODUCT IMAGE
						</Button>
					</label>
					{windowImageLoading && (
						<CircularProgress
							sx={{
								width: '20px !important',
								height: '20px !important',
								margin: '20px 0 20px 120px',
							}}
						/>
					)}
					{windowImageUrl && (
						<>
							<Box
								component='img'
								sx={{
									height: 'auto',
									width: '200px',
									margin: '20px 0 10px',
								}}
								alt='image'
								src={windowImageUrl}
							/>
							<Typography>{windowImageName}</Typography>
						</>
					)}

					<input
						accept='image/*'
						style={{ display: 'none' }}
						id='raised-button-product'
						multiple
						type='file'
						onChange={e => handleImageChange(e, 'productImage')}
					/>
					<label htmlFor='raised-button-product'>
						<Button
							variant='raised'
							component='span'
							sx={{
								background: '#1976d2',
								color: '#fff',
								padding: '6px 16px',
								minWidth: '64px',
								width: '400px',
								marginTop: '20px',
							}}
						>
							Choose PRODUCT IMAGE SLIDER
						</Button>
					</label>
					{productImageLoading && (
						<CircularProgress
							sx={{
								width: '20px !important',
								height: '20px !important',
								margin: '20px 0 20px 120px',
							}}
						/>
					)}
					{productImageSlider && (
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: '2rem',
								alignItems: 'flex-start',
							}}
						>
							{productImageSlider.map(item => (
								<Box key={item.url} sx={{ width: '200px' }}>
									<Box
										component='img'
										sx={{
											height: 'auto',
											width: '100%',
											margin: '20px 0 10px',
										}}
										alt='image'
										src={item.url}
									/>
									<Typography>{item.name}</Typography>
								</Box>
							))}
						</Box>
					)}

					<input
						accept='image/*'
						style={{ display: 'none' }}
						id='raised-button-productZoom'
						multiple
						type='file'
						onChange={e => handleImageChange(e, 'productImageZoom')}
					/>
					<label htmlFor='raised-button-productZoom'>
						<Button
							variant='raised'
							component='span'
							sx={{
								background: '#1976d2',
								color: '#fff',
								padding: '6px 16px',
								minWidth: '64px',
								width: '400px',
								marginTop: '20px',
							}}
						>
							Choose ZOOM PRODUCT IMAGE SLIDER
						</Button>
					</label>
					{zoomProductImageLoading && (
						<CircularProgress
							sx={{
								width: '20px !important',
								height: '20px !important',
								margin: '20px 0 20px 120px',
							}}
						/>
					)}
					{productImageSliderZoom && (
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: '2rem',
								alignItems: 'flex-start',
							}}
						>
							{productImageSliderZoom.map(item => (
								<Box key={item.url} sx={{ width: '200px' }}>
									<Box
										component='img'
										sx={{
											height: 'auto',
											width: '100%',
											margin: '20px 0 10px',
										}}
										alt='image'
										src={item.url}
									/>
									<Typography>{item.name}</Typography>
								</Box>
							))}
						</Box>
					)}

					<Button
						onClick={handleSubmit}
						type='submit'
						variant='contained'
						sx={{ marginTop: '30px', maxWidth: '160px' }}
						// disabled={!expancionText}
					>
						{!loading && <span>SUBMIT</span>}
						{loading && (
							<CircularProgress
								sx={{ width: '20px !important', height: '20px !important' }}
							/>
						)}
					</Button>
				</Grid>
			</form>
		</>
	);
};
