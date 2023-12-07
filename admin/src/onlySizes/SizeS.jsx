import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	IconButton,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { sizes } from '../data';

export const SizeS = ({ prodctInfo, setProdctInfo }) => {
	const [checked, setChecked] = useState(false);
	const [itemsDisabled, setItemsDisabled] = useState(false);
	const [productSizeInfo, setProductSizeInfo] = useState({});
	const [info, setInfo] = useState([
		{ name: '', hex: '', limitedEdition: '', inStock: 1 },
	]);

	useEffect(() => {
		if (checked) {
			setProductSizeInfo(prev => ({
				...prev,
				sizeFull: sizes[1].sizeFull,
				sizeShort: sizes[1].label,
			}));
		}

		if (!checked) {
			const updateProduct = { ...productSizeInfo };
			delete updateProduct.sizeShort;
			delete updateProduct.sizeFull;
			setProductSizeInfo(updateProduct);
			setProductSizeInfo({});
		}
	}, [checked]);

	const handleAddItem = () => {
		setInfo([...info, { name: '', hex: '', limitedEdition: '', inStock: '' }]);
	};

	const handleRemoveItem = () => {
		if (info.length > 0) {
			const updatedInfo = [...info];
			updatedInfo.pop();
			setInfo(updatedInfo);

			if (productSizeInfo.hasOwnProperty('info')) {
				const updatedProductSizeInfo = [...productSizeInfo.info];
				updatedProductSizeInfo.pop();
				setProductSizeInfo(updatedProductSizeInfo);
			}
		}
	};

	const handleChange = e => {
		setChecked(e.target.checked);
	};

	const handleChangeInput = (e, index) => {
		const updateInfo = [...info];
		e.target.name === 'inStock'
			? (info[index][e.target.name] = Number(e.target.value))
			: (info[index][e.target.name] = e.target.value);

		setProductSizeInfo(prev => ({
			...prev,
			info: updateInfo,
		}));
	};

	const handleModelTypeChange = e => {
		setProductSizeInfo(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleClick = () => {
		const updateProductOptions = [...prodctInfo.options];
		updateProductOptions.push(productSizeInfo);

		setProdctInfo(prev => ({
			...prev,
			options: updateProductOptions,
		}));

		setItemsDisabled(true);
	};
	return (
		<>
			<FormControlLabel
				control={<Checkbox />}
				checked={checked}
				disabled={itemsDisabled}
				label='S'
				sx={{ width: '60px' }}
				onChange={handleChange}
			/>
			{checked && (
				<>
					<Grid container alignItems='center' gap='30px' marginTop='30px'>
						<TextField
							label='MODEL PARAMETRS'
							name='modelTypeInfo'
							multiline
							fullWidth
							rows={3}
							disabled={itemsDisabled}
							onChange={handleModelTypeChange}
							sx={{ width: '500px', maxWidth: '100%' }}
						/>
					</Grid>
					<Typography
						variant='body2'
						gutterBottom
						sx={{ margin: '30px 0 10px' }}
					>
						INFO
					</Typography>
					<Box sx={{ display: 'flex' }}>
						<IconButton
							aria-label='add'
							onClick={handleAddItem}
							disabled={itemsDisabled}
						>
							<ControlPointOutlinedIcon />
						</IconButton>
						<IconButton
							aria-label='delete'
							onClick={handleRemoveItem}
							disabled={itemsDisabled}
						>
							<DeleteOutlineOutlinedIcon />
						</IconButton>
					</Box>
					{info.map((item, index) => (
						<Stack
							key={item + index}
							direction='row'
							alignItems='center'
							justifyContent='flex-start'
							gap='30px'
							sx={{ margin: '20px 10px 8px 0' }}
						>
							<Stack direction='column' gap='15px'>
								<TextField
									label='COLOR NAME'
									variant='outlined'
									size='small'
									type='text'
									name='name'
									disabled={itemsDisabled}
									onChange={e => handleChangeInput(e, index)}
									sx={{ width: '100%', maxWidth: '100%' }}
								/>
								<TextField
									label='COLOR HEX'
									variant='outlined'
									size='small'
									type='text'
									name='hex'
									disabled={itemsDisabled}
									onChange={e => handleChangeInput(e, index)}
									sx={{ width: '100%', maxWidth: '100%' }}
								/>
							</Stack>
							<Stack direction='column' gap='15px'>
								<TextField
									label='LIMITED EITION'
									variant='outlined'
									size='small'
									type='text'
									name='limitedEdition'
									disabled={itemsDisabled}
									onChange={e => handleChangeInput(e, index)}
									sx={{ width: '100%', maxWidth: '100%' }}
								/>
								<TextField
									label='IN STOCK'
									variant='outlined'
									size='small'
									type='number'
									name='inStock'
									disabled={itemsDisabled}
									onChange={e => handleChangeInput(e, index)}
									sx={{ width: '100%', maxWidth: '100%' }}
								/>
							</Stack>
						</Stack>
					))}
					<Box>
						<Button
							onClick={handleClick}
							type='button'
							variant='contained'
							disabled={itemsDisabled}
							sx={{ margin: '20px 20px 20px 0' }}
						>
							ADD INFO DATA
						</Button>
						{itemsDisabled && <span>ADDED</span>}
					</Box>
				</>
			)}
		</>
	);
};
