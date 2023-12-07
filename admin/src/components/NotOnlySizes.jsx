import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	IconButton,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SizeChart } from './SizeChart';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { TechInfo } from './TechInfo';
import { useLocation } from 'react-router-dom';
import { TechInfoNotOnlySizes } from './TechInfoNotOnlySizes';

export const NotOnlySizes = ({
	prodctInfo,
	setProdctInfo,
	checkedOnlySizes,
	currentProduct,
}) => {
	const [checkedSizeChart, setCheckedSizeChart] = useState(true);
	const [itemsDisabled, setItemsDisabled] = useState(false);

	const [inputs, setInputs] = useState([
		{
			id: 1,
			sizeShort: '',
			sizeFull: '',
			info: {
				ifNoSizeText: '',
				name: '',
				hex: '',
				limitedEdition: '',
				inStock: 1,
				modelTypeInfo: '',
			},
		},
	]);
	const [nextId, setNextId] = useState(2);

	const handleAddItem = () => {
		setInputs(prev => [
			...prev,
			{
				id: nextId,
				sizeShort: '',
				sizeFull: '',
				info: {
					ifNoSizeText: '',
					name: '',
					hex: '',
					limitedEdition: '',
					inStock: 1,
					modelTypeInfo: '',
				},
			},
		]);
		setNextId(prev => prev + 1);
	};

	const location = useLocation();
	const pathName = location.pathname.split('/')[2];

	useEffect(() => {
		if (pathName) {
			if (currentProduct.sizeChart.length > 0) setCheckedSizeChart(true);

			const productsWithoutSizes = currentProduct.options.filter(
				item => !item.hasOwnProperty('sizes')
			);

			let filteredProducts = [];

			productsWithoutSizes.forEach((item, index) => {
				const newObj = {
					id: index + 1,
					sizeShort: '',
					sizeFull: '',
					info: {
						ifNoSizeText: '',
						name: '',
						hex: '',
						limitedEdition: '',
						inStock: 1,
						modelTypeInfo: '',
					},
				};

				filteredProducts.push(newObj);
			});

			setInputs(filteredProducts);

			setNextId(currentProduct.sizeChart.length + 1);
		} else {
			setCheckedSizeChart(false);
		}
	}, [pathName, currentProduct?.sizeChart.length, currentProduct?.options]);

	useEffect(() => {
		if (!checkedOnlySizes) {
			setProdctInfo(prev => ({
				...prev,
				options: [],
			}));
		}
	}, [checkedOnlySizes]);

	const handleRemoveItem = id => {
		if (inputs.length > 0) {
			const filteredInputs = inputs.filter(item => item.id !== id);

			setInputs(filteredInputs);
		}
	};

	const handleChangeInput = (e, index) => {
		e.target.name === 'inStock'
			? (inputs[index].info[e.target.name] = Number(e.target.value))
			: (inputs[index].info[e.target.name] = e.target.value);
	};

	const handleSizeChartChange = e => {
		setCheckedSizeChart(e.target.checked);
	};

	const handleClick = () => {
		const updateProductOptions = [...prodctInfo.options, ...inputs];

		setProdctInfo(prev => ({
			...prev,
			options: updateProductOptions,
		}));

		setItemsDisabled(true);
	};

	return (
		<>
			<Box sx={{ margin: '20px 10px 8px 0' }}>
				<Typography
					variant='body2'
					gutterBottom
					sx={{ marginBottom: '10px', marginLeft: '20px' }}
				>
					SIZES AND NO SIZES
				</Typography>
				{pathName ? (
					<TechInfoNotOnlySizes
						prodctInfo={prodctInfo}
						setProdctInfo={setProdctInfo}
						checkedOnlySizes={checkedOnlySizes}
						currentProduct={currentProduct}
					/>
				) : (
					<TechInfo
						prodctInfo={prodctInfo}
						setProdctInfo={setProdctInfo}
						checkedOnlySizes={checkedOnlySizes}
					/>
				)}
			</Box>
			<Typography
				variant='body2'
				gutterBottom
				sx={{ margin: '30px 0 10px 20px' }}
			>
				NO SIZES
			</Typography>
			<Box sx={{ display: 'flex', marginLeft: '10px' }}>
				<IconButton
					aria-label='add'
					onClick={handleAddItem}
					disabled={itemsDisabled}
				>
					<ControlPointOutlinedIcon />
				</IconButton>
			</Box>
			{inputs.map((item, index) => (
				<Stack
					key={item.id}
					direction='row'
					alignItems='center'
					justifyContent='flex-start'
					gap='30px'
					sx={{ margin: '20px 10px 8px 20px' }}
				>
					<Stack direction='column' gap='15px'>
						<TextField
							label='ADDITIONAL TEXT'
							variant='outlined'
							size='small'
							type='text'
							name='ifNoSizeText'
							disabled={itemsDisabled}
							onChange={e => handleChangeInput(e, index)}
							sx={{ width: '100%', maxWidth: '100%' }}
						/>
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
					<TextField
						label='MODEL PARAMETRS'
						name='modelTypeInfo'
						multiline
						fullWidth
						rows={3}
						disabled={itemsDisabled}
						onChange={e => handleChangeInput(e, index)}
						sx={{ width: '500px', maxWidth: '100%' }}
					/>
					<IconButton
						disabled={itemsDisabled}
						aria-label='delete'
						onClick={() => handleRemoveItem(item.id)}
					>
						<DeleteOutlineOutlinedIcon />
					</IconButton>
				</Stack>
			))}
			<Box>
				<Button
					onClick={handleClick}
					type='button'
					variant='contained'
					disabled={itemsDisabled}
					sx={{ margin: '20px' }}
				>
					ADD NO SIZES DATA
				</Button>
				{itemsDisabled && <span>ADDED</span>}
			</Box>
			<Box sx={{ margin: '20px 10px 8px 20px' }}>
				<FormControlLabel
					control={<Checkbox />}
					checked={checkedSizeChart}
					onChange={handleSizeChartChange}
					label='SIZE CHART'
					sx={{ marginBottom: '10px' }}
				/>
			</Box>
			{checkedSizeChart && (
				<SizeChart
					currentProduct={currentProduct}
					prodctInfo={prodctInfo}
					setProdctInfo={setProdctInfo}
				/>
			)}
		</>
	);
};
