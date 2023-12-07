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
import React, { useEffect, useState } from 'react';
import { ErrorAlert } from '../alerts/ErrorAlert';
import { SuccessAlert } from '../alerts/SuccessAlert';
import apiCallsService from '../services/apiCalls.service';

export const Main = () => {
	const [checkedImageDesktop, setCheckedImageDesktop] = useState(true);
	const [checkedVideoDesktop, setCheckedVideoDesktop] = useState(false);
	const [checkedImageMobile, setCheckedImageMobile] = useState(true);
	const [checkedVideoMobile, setCheckedVideoMobile] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showErrorAlert, setShowErrorAlert] = useState(false);
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [title, setTitle] = useState('');
	const [expancionText, setExpancionText] = useState('');

	const [desktopImgOrVideoFileName, setDesktopImgOrVideoFileName] =
		useState('image');
	const [mobileImgOrVideoFileName, setmobileImgOrVideoFileName] =
		useState('image');

	const [desktopFileLoading, setDesktopFileLoading] = useState(false);
	const [desktopFileUrl, setDesktopFileUrl] = useState('');
	const [desktopFileName, setDesktopFileName] = useState('');

	const [mobileFileLoading, setMobileFileLoading] = useState(false);
	const [mobileFileName, setMobileFileName] = useState('');
	const [mobileFileUrl, setMobileFileUrl] = useState('');

	useEffect(() => {
		async function fetchMainInfoData() {
			setShowErrorAlert(false);
			setShowSuccessAlert(false);

			const response = await apiCallsService.getMainInfoRequest();

			if (response.error) {
				setTitle('Fetch Error Data');
				setShowErrorAlert(true);
				return;
			}

			if (response.background.type === 'image') {
				setCheckedImageDesktop(true);
				setCheckedVideoDesktop(false);
			} else {
				setCheckedVideoDesktop(true);
				setCheckedImageDesktop(false);
			}

			if (response.mobileBackground.type === 'image') {
				setCheckedImageMobile(true);
				setCheckedVideoMobile(false);
			} else {
				setCheckedVideoMobile(true);
				setCheckedImageMobile(false);
			}

			setDesktopFileUrl(response.background.src);
			setMobileFileUrl(response.mobileBackground.src);
			setExpancionText(response.expancionText);
		}

		fetchMainInfoData();
	}, []);

	const handleChangeDesktop = (type, e) => {
		if (type === 'image') {
			setCheckedImageDesktop(e.target.checked);
			setCheckedVideoDesktop(false);
			setDesktopImgOrVideoFileName('image');
		} else {
			setCheckedVideoDesktop(e.target.checked);
			setCheckedImageDesktop(false);
			setDesktopImgOrVideoFileName('video');
		}
	};

	const handleChangeMobile = (type, e) => {
		if (type === 'image') {
			setCheckedImageMobile(e.target.checked);
			setCheckedVideoMobile(false);
			setmobileImgOrVideoFileName('image');
		} else {
			setCheckedVideoMobile(e.target.checked);
			setCheckedImageMobile(false);
			setmobileImgOrVideoFileName('video');
		}
	};

	const handleClick = async e => {
		e.preventDefault();
		setShowErrorAlert(false);
		setShowSuccessAlert(false);
		setLoading(true);

		const response = await apiCallsService.postMainInfoRequest({
			background: {
				src: desktopFileUrl,
				type: desktopImgOrVideoFileName,
			},
			mobileBackground: {
				src: mobileFileUrl,
				type: mobileImgOrVideoFileName,
			},
			expancionText,
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

	const handleFileChange = async (e, type) => {
		type === 'desktop'
			? setDesktopFileLoading(true)
			: setMobileFileLoading(true);

		const formData = new FormData();
		formData.append('file', e.target.files[0]);

		const response = await apiCallsService.postFileUploadRequest(formData);

		if (response.error) {
			setTitle('Error File Load');
			setShowErrorAlert(true);
			setDesktopFileLoading(false);
			setMobileFileLoading(false);
			return;
		}

		if (type === 'desktop') {
			setDesktopFileName(e.target.files[0].name);
			setDesktopFileUrl(response.url);
		} else {
			setMobileFileName(e.target.files[0].name);
			setMobileFileUrl(response.url);
		}
		setDesktopFileLoading(false);
		setMobileFileLoading(false);
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
				MAIN PAGE
			</Typography>
			<Divider />
			<form>
				<Grid
					container
					direction='column'
					sx={{ padding: '23px 10px 50px 50px' }}
				>
					<Typography variant='body2' sx={{ marginBottom: '20px' }}>
						DESKTOP
					</Typography>
					<Box sx={{ marginBottom: '90px', maxWidth: '270px', width: '100%' }}>
						<FormControlLabel
							control={<Checkbox />}
							checked={checkedImageDesktop}
							label='IMAGE'
							sx={{ width: '60px', marginRight: '60px' }}
							onChange={e => handleChangeDesktop('image', e)}
						/>
						<FormControlLabel
							control={<Checkbox />}
							checked={checkedVideoDesktop}
							label='VIDEO'
							sx={{ width: '60px' }}
							onChange={e => handleChangeDesktop('video', e)}
						/>

						<input
							accept='image/*'
							style={{ display: 'none' }}
							id='raised-button-file'
							multiple
							type='file'
							onChange={e => handleFileChange(e, 'desktop')}
						/>
						<label htmlFor='raised-button-file'>
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
								Choose File DESKTOP
							</Button>
						</label>
						{desktopFileLoading && (
							<CircularProgress
								sx={{
									width: '20px !important',
									height: '20px !important',
									margin: '20px 0 20px 120px',
								}}
							/>
						)}
						{desktopFileUrl && (
							<>
								<Box
									component='img'
									sx={{
										height: 'auto',
										width: '200px',
										margin: '20px 0 10px',
									}}
									alt='image'
									src={desktopFileUrl}
								/>
								<Typography>{desktopFileName}</Typography>
							</>
						)}
					</Box>
					<Typography variant='body2' sx={{ marginBottom: '20px' }}>
						MOBILE
					</Typography>
					<Box sx={{ marginBottom: '30px', maxWidth: '270px', width: '100%' }}>
						<FormControlLabel
							control={<Checkbox />}
							checked={checkedImageMobile}
							label='IMAGE'
							sx={{ width: '60px', marginRight: '60px' }}
							onChange={e => handleChangeMobile('image', e)}
						/>
						<FormControlLabel
							control={<Checkbox />}
							checked={checkedVideoMobile}
							label='VIDEO'
							sx={{ width: '60px' }}
							onChange={e => handleChangeMobile('video', e)}
						/>

						<input
							accept='image/*'
							style={{ display: 'none' }}
							id='raised-button-file-mob'
							multiple
							type='file'
							onChange={e => handleFileChange(e, 'mobile')}
						/>
						<label htmlFor='raised-button-file-mob'>
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
								Choose File MOBILE
							</Button>
						</label>
						{mobileFileLoading && (
							<CircularProgress
								sx={{
									width: '20px !important',
									height: '20px !important',
									margin: '20px 0 20px 120px',
								}}
							/>
						)}
						{mobileFileUrl && (
							<>
								<Box
									component='img'
									sx={{
										height: 'auto',
										width: '200px',
										margin: '20px 0 10px',
									}}
									alt='image'
									src={mobileFileUrl}
								/>
								<Typography>{mobileFileName}</Typography>
							</>
						)}
					</Box>
					<TextField
						label='LATEST EXPANCION TEXT'
						variant='outlined'
						size='small'
						type='text'
						value={expancionText}
						onChange={e => setExpancionText(e.target.value)}
						sx={{ maxWidth: '300px', marginTop: '40px' }}
					/>
					<Button
						onClick={handleClick}
						type='submit'
						variant='contained'
						sx={{ marginTop: '30px', maxWidth: '160px' }}
						disabled={!expancionText}
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
