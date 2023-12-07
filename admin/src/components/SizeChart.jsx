import React, { useState } from 'react';
import {
	Box,
	Button,
	Grid,
	IconButton,
	TextField,
	Typography,
} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { useEffect } from 'react';

export const SizeChart = ({ prodctInfo, setProdctInfo, currentProduct }) => {
	const [columns, setColumns] = useState([{ id: 1, inputs: [''] }]);
	const [nextId, setNextId] = useState(2);
	const [showText, setShowText] = useState(false);

	useEffect(() => {
		if (currentProduct?.sizeChart?.length > 0) {
			const currentSizeCahrt = currentProduct?.sizeChart.map((item, index) => {
				return { id: index + 1, inputs: item };
			});

			setColumns(currentSizeCahrt);
			setNextId(currentProduct.sizeChart.length + 1);
		}
	}, [currentProduct?.sizeChart, currentProduct?.sizeChart?.length]);

	const handleAddColumn = () => {
		const newColumn = { id: nextId, inputs: [''] };
		setColumns([...columns, newColumn]);
		setNextId(prev => prev + 1);
	};

	const handleInputChange = (colId, inputIndex, e) => {
		const { value } = e.target;

		const updatedColumns = columns.map(col =>
			col.id === colId
				? {
						...col,
						inputs: col.inputs.map((input, index) =>
							index === inputIndex ? value : input
						),
				  }
				: col
		);
		setColumns(updatedColumns);
	};

	const handleRemoveColumn = id => {
		const updatedColumns = columns.filter(col => col.id !== id);
		setColumns(updatedColumns);
	};

	const addInput = id => {
		const updatedColumns = columns.map(col =>
			col.id === id ? { ...col, inputs: [...col.inputs, ''] } : col
		);
		setColumns(updatedColumns);
	};

	const handleClick = () => {
		const updateSizeChart = [...prodctInfo.sizeChart];

		columns.forEach(item => {
			updateSizeChart.push(item.inputs);
		});

		setProdctInfo(prev => ({
			...prev,
			sizeChart: updateSizeChart,
		}));

		setShowText(true);
	};

	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
				<Grid
					container
					alignItems='center'
					marginLeft='10px'
					marginBottom='5px'
					sx={{ cursor: 'pointer' }}
					width='auto'
					onClick={handleAddColumn}
				>
					<IconButton>
						<ControlPointOutlinedIcon />
					</IconButton>
					<Typography variant='body2'>ADD COLUMN</Typography>
				</Grid>
			</Box>

			{columns.map(col => (
				<Grid
					key={col.id}
					container
					alignItems='center'
					gap='20px'
					marginLeft='20px'
					marginBottom='20px'
				>
					{col.inputs.map((input, index) => (
						<TextField
							key={index}
							variant='outlined'
							size='small'
							type='text'
							sx={{ width: '150px', maxWidth: '100%' }}
							name='text'
							value={input}
							onChange={e => handleInputChange(col.id, index, e)}
						/>
					))}
					<IconButton aria-label='delete' onClick={() => addInput(col.id)}>
						<ControlPointOutlinedIcon />
					</IconButton>
					<IconButton
						aria-label='delete'
						onClick={() => handleRemoveColumn(col.id)}
					>
						<DeleteOutlineOutlinedIcon />
					</IconButton>
				</Grid>
			))}
			<Box>
				<Button
					onClick={handleClick}
					type='button'
					variant='contained'
					disabled={showText}
					sx={{ margin: '20px' }}
				>
					ADD SIZE CHART
				</Button>
				{showText && <span>ADDED</span>}
			</Box>
		</>
	);
};
