import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

export const TechInfo = ({ prodctInfo, setProdctInfo, checkedOnlySizes }) => {
	const [itemsDisabled, setItemsDisabled] = useState(false);
	const [inputs, setInputs] = useState([
		{
			id: 1,
			sizeShort: '',
			sizeFull: '',
			sizes: {
				name: '',
				hex: '',
				limitedEdition: '',
				inStock: 1,
				modelTypeInfo: '',
				sizeShort: '',
				sizeFull: '',
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
				sizes: {
					name: '',
					hex: '',
					limitedEdition: '',
					inStock: 1,
					modelTypeInfo: '',
					sizeShort: '',
					sizeFull: '',
				},
			},
		]);
		setItemsDisabled(false);
		setNextId(prev => prev + 1);
	};

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
			? (inputs[index].sizes[e.target.name] = Number(e.target.value))
			: (inputs[index].sizes[e.target.name] = e.target.value);
	};

	const handleClick = () => {
		const propertiesToSplit = ['sizeShort', 'sizeFull', 'modelTypeInfo'];
		const filteredInfo = prodctInfo.options;

		inputs.forEach(item => {
			const wordsArrays = propertiesToSplit.map(property =>
				item.sizes[property].split(',')
			);
			const numberOfWords = wordsArrays[0].length;

			const updatedObjects = Array.from(
				{ length: numberOfWords },
				(_, index) => {
					const newObj = {};
					propertiesToSplit.forEach((property, i) => {
						newObj[property] = wordsArrays[i][index];
					});
					return { ...item.sizes, ...newObj };
				}
			);

			filteredInfo.push({
				sizeShort: '',
				sizeFull: '',
				sizes: updatedObjects,
				info: {
					name: updatedObjects[0].name,
					hex: updatedObjects[0].hex,
				},
			});

			setProdctInfo(prev => ({
				...prev,
				options: filteredInfo,
			}));
			setItemsDisabled(true);
		});
	};

	return (
		<>
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
					</Stack>
					<Stack direction='column' gap='15px'>
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
						<TextField
							label='Sizes Short'
							variant='outlined'
							size='small'
							type='text'
							name='sizeShort'
							disabled={itemsDisabled}
							onChange={e => handleChangeInput(e, index)}
							sx={{ width: '100%', maxWidth: '100%' }}
						/>
						<TextField
							label='Sizes Full'
							variant='outlined'
							size='small'
							type='text'
							name='sizeFull'
							disabled={itemsDisabled}
							onChange={e => handleChangeInput(e, index)}
							sx={{ width: '100%', maxWidth: '100%' }}
						/>
					</Stack>
					<Stack direction='column' gap='15px'>
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
					</Stack>
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
					ADD SIZES AND NO SIZES
				</Button>
				{itemsDisabled && <span>ADDED</span>}
			</Box>
		</>
	);
};
