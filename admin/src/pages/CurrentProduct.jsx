import {
	Box,
	Button,
	Checkbox,
	CircularProgress,
	Divider,
	FormControlLabel,
	Grid,
	IconButton,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { productObject } from '../data';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { OnlySizes } from '../components/OnlySizes';
import { NotOnlySizes } from '../components/NotOnlySizes';
import apiCallsService from '../services/apiCalls.service';
import { ErrorAlert } from '../alerts/ErrorAlert';
import { SuccessAlert } from '../alerts/SuccessAlert';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const CurrentProduct = () => {
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

	const [currentProduct, setCurrentProduct] = useState({});
	const location = useLocation();
	const pathName = location.pathname.split('/')[2];

	const [clothingName, setClothingName] = useState('');
	const [clothingCategory, setClothingCategory] = useState('');
	const [clothingPrice, setClothingPrice] = useState('');
	const [clothingStatus, setClothingStatus] = useState('');
	const [rarity, setRarity] = useState('');
	const [orderDetailsModelDesc, setOrderDetailsModelDesc] = useState('');

	const [technicalInformation, setTechnicalInformation] = useState('');
	const [specification, setSpecification] = useState('');
	const [specificationIndividual, setSpecificationIndividual] = useState('');
	const [careSpecification, setCareSpecification] = useState('');

	useEffect(() => {
		async function fetchProductData() {
			const response = await apiCallsService.getProductsRequest();

			if (response.error) {
				setTitle('Fetch Error Data');
				setShowErrorAlert(true);
				return;
			}

			const currentItem = response.find(item => item._id === pathName);

			setGearImageUrl(currentItem.imgGear);
			setWindowImageUrl(currentItem.imgMain);
			setAppearanceImageSlider(currentItem.imgSliderAppearance);
			setProductImageSlider(currentItem.imgSlider);
			setProductImageSliderZoom(currentItem.imgSliderZoom);
			setCheckedOnlySizes(currentItem.onlySizes);

			setClothingName(currentItem.name);
			setClothingCategory(currentItem.model);
			setClothingPrice(currentItem.price);
			setClothingStatus(currentItem.availability);
			setRarity(currentItem.rarity);
			setOrderDetailsModelDesc(currentItem.desc);

			setTechnicalInformation(currentItem.technicalInformation);
			setSpecification(currentItem.specification);
			setSpecificationIndividual(currentItem.specificationIndividual);
			setCareSpecification(currentItem.careSpecification);

			setCurrentProduct(currentItem);

			setProdctInfo(prev => ({
				...prev,
				name: currentItem.name,
				model: currentItem.model,
				price: Number(currentItem.price),
				availability: currentItem.availability,
				rarity: currentItem.rarity,
				desc: currentItem.desc,
				technicalInformation: currentItem.technicalInformation,
				specification: currentItem.specification,
				specificationIndividual: currentItem.specificationIndividual,
				careSpecification: currentItem.careSpecification,
				imgGear: currentItem.imgGear,
				imgMain: currentItem.imgMain,
				imgSliderAppearance: currentItem.imgSliderAppearance,
				imgSlider: currentItem.imgSlider,
				imgSliderZoom: currentItem.imgSliderZoom,
				onlySizes: currentItem.onlySizes,
			}));
		}
		pathName && fetchProductData();
	}, [pathName]);

	const handleOnlySizesChange = e => {
		const checked = e.target.checked;
		setCheckedOnlySizes(checked);

		setProdctInfo(prev => ({
			...prev,
			onlySizes: checked,
		}));
	};

	const handleRemoveItem = (id, type) => {
		if (type === 'appearanceImage') {
			const filteredImg = appearanceImageSlider.filter(item => item !== id);
			setAppearanceImageSlider(filteredImg);
		}

		if (type === 'productImage') {
			const filteredImg = productImageSlider.filter(item => item !== id);
			setProductImageSlider(filteredImg);
		}

		if (type === 'productImageZoom') {
			const filteredImg = productImageSliderZoom.filter(item => item !== id);
			setProductImageSliderZoom(filteredImg);
		}
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
			newImage.push(response.url);
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
			newImage.push(response.url);
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
			newImage.push(response.url);
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

		const response = await apiCallsService.putProductRequest(
			currentProduct._id,
			prodctInfo
		);

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
				{currentProduct.name}
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
					<TextField
						value={clothingName}
						label='CLOTHING NAME'
						name='name'
						variant='outlined'
						size='small'
						type='text'
						onChange={e => {
							setClothingName(e.target.value);
							setProdctInfo(prev => ({
								...prev,
								[e.target.name]: e.target.value,
							}));
						}}
						sx={{ width: '500px', maxWidth: '100%' }}
					/>
					<TextField
						value={clothingCategory}
						label='CLOTHING CATEGORY'
						name='model'
						variant='outlined'
						size='small'
						type='text'
						onChange={e => {
							setClothingCategory(e.target.value);
							setProdctInfo(prev => ({
								...prev,
								[e.target.name]: e.target.value,
							}));
						}}
						sx={{ width: '500px', maxWidth: '100%' }}
					/>
					<TextField
						value={clothingPrice}
						label='CLOTHING PRICE'
						name='price'
						variant='outlined'
						size='small'
						type='number'
						onChange={e => {
							setClothingPrice(Number(e.target.value));
							setProdctInfo(prev => ({
								...prev,
								[e.target.name]: e.target.value,
							}));
						}}
						sx={{ width: '500px', maxWidth: '100%' }}
					/>
					<TextField
						value={clothingStatus}
						label='CATEGORY STATUS'
						name='availability'
						variant='outlined'
						size='small'
						type='text'
						onChange={e => {
							setClothingStatus(e.target.value);
							setProdctInfo(prev => ({
								...prev,
								[e.target.name]: e.target.value,
							}));
						}}
						sx={{ width: '500px', maxWidth: '100%' }}
					/>
					<TextField
						value={rarity}
						label='RARITY'
						name='rarity'
						variant='outlined'
						size='small'
						type='text'
						onChange={e => {
							setRarity(e.target.value);
							setProdctInfo(prev => ({
								...prev,
								[e.target.name]: e.target.value,
							}));
						}}
						sx={{ width: '500px', maxWidth: '100%' }}
					/>
					<TextField
						value={orderDetailsModelDesc}
						label='ORDER DETAILS MODEL DESC'
						name='desc'
						variant='outlined'
						size='small'
						type='text'
						onChange={e => {
							setOrderDetailsModelDesc(e.target.value);
							setProdctInfo(prev => ({
								...prev,
								[e.target.name]: e.target.value,
							}));
						}}
						sx={{ width: '500px', maxWidth: '100%' }}
					/>
				</Grid>
				<Grid
					container
					gap='20px'
					sx={{
						padding: '10px 20px',
					}}
				>
					<Grid item xs={5}>
						<Typography variant='body2' gutterBottom>
							TECHNICAL INFORMATION
						</Typography>
						<TextField
							multiline
							fullWidth
							rows={10}
							name='technicalInformation'
							value={technicalInformation}
							onChange={e => {
								setTechnicalInformation(e.target.value);
								setProdctInfo(prev => ({
									...prev,
									[e.target.name]: e.target.value,
								}));
							}}
						/>
					</Grid>
					<Grid item xs={5}>
						<Typography variant='body2' gutterBottom>
							SPECIFICATION ROW
						</Typography>
						<TextField
							multiline
							fullWidth
							rows={10}
							name='specification'
							value={specification}
							onChange={e => {
								setSpecification(e.target.value);
								setProdctInfo(prev => ({
									...prev,
									[e.target.name]: e.target.value,
								}));
							}}
						/>
					</Grid>
					<Grid item xs={5}>
						<Typography variant='body2' gutterBottom>
							SPECIFICATION COLUMN
						</Typography>
						<TextField
							multiline
							fullWidth
							rows={10}
							name='specificationIndividual'
							value={specificationIndividual}
							onChange={e => {
								setSpecificationIndividual(e.target.value);
								setProdctInfo(prev => ({
									...prev,
									[e.target.name]: e.target.value,
								}));
							}}
						/>
					</Grid>
					<Grid item xs={5}>
						<Typography variant='body2' gutterBottom>
							CARE SPECIFICATION
						</Typography>
						<TextField
							multiline
							fullWidth
							rows={10}
							name='careSpecification'
							value={careSpecification}
							onChange={e => {
								setCareSpecification(e.target.value);
								setProdctInfo(prev => ({
									...prev,
									[e.target.name]: e.target.value,
								}));
							}}
						/>
					</Grid>
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
						currentProduct={currentProduct}
						prodctInfo={prodctInfo}
						setProdctInfo={setProdctInfo}
						checkedOnlySizes={checkedOnlySizes}
					/>
				) : (
					<NotOnlySizes
						currentProduct={currentProduct}
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
							{appearanceImageSlider.map((item, index) => (
								<Box key={index + item + index} sx={{ width: '200px' }}>
									<Box
										component='img'
										sx={{
											height: 'auto',
											width: '100%',
											margin: '20px 0 10px',
										}}
										alt='image'
										src={item}
									/>
									<IconButton
										aria-label='delete'
										onClick={() => handleRemoveItem(item, 'appearanceImage')}
									>
										<DeleteOutlineOutlinedIcon />
									</IconButton>
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
							{productImageSlider.map((item, index) => (
								<Box key={index + item} sx={{ width: '200px' }}>
									<Box
										component='img'
										sx={{
											height: 'auto',
											width: '100%',
											margin: '20px 0 10px',
										}}
										alt='image'
										src={item}
									/>
									<IconButton
										aria-label='delete'
										onClick={() => handleRemoveItem(item, 'productImage')}
									>
										<DeleteOutlineOutlinedIcon />
									</IconButton>
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
							{productImageSliderZoom.map((item, index) => (
								<Box key={item + index} sx={{ width: '200px' }}>
									<Box
										component='img'
										sx={{
											height: 'auto',
											width: '100%',
											margin: '20px 0 10px',
										}}
										alt='image'
										src={item}
									/>
									<IconButton
										aria-label='delete'
										onClick={() => handleRemoveItem(item, 'productImageZoom')}
									>
										<DeleteOutlineOutlinedIcon />
									</IconButton>
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
