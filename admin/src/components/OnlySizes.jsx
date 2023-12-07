import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { SizeXS } from '../onlySizes/SizeXS';
import { SizeS } from '../onlySizes/SizeS';
import { SizeChart } from './SizeChart';
import { SizeM } from '../onlySizes/SizeM';
import { SizeL } from '../onlySizes/SizeL';
import { SizeXL } from '../onlySizes/SizeXl';

export const OnlySizes = ({ prodctInfo, setProdctInfo, currentProduct }) => {
	const [checkedSizeChart, setCheckedSizeChart] = useState(true);

	const handleSizeChartChange = e => {
		setCheckedSizeChart(e.target.checked);
	};

	return (
		<>
			<Box sx={{ margin: '20px 10px 8px 20px' }}>
				<Typography variant='body2' gutterBottom sx={{ marginBottom: '10px' }}>
					SIZES
				</Typography>
				<SizeXS
					prodctInfo={prodctInfo}
					setProdctInfo={setProdctInfo}
					currentProduct={currentProduct}
				/>
				<SizeS
					prodctInfo={prodctInfo}
					setProdctInfo={setProdctInfo}
					currentProduct={currentProduct}
				/>
				<SizeM
					prodctInfo={prodctInfo}
					setProdctInfo={setProdctInfo}
					currentProduct={currentProduct}
				/>
				<SizeL
					prodctInfo={prodctInfo}
					setProdctInfo={setProdctInfo}
					currentProduct={currentProduct}
				/>
				<SizeXL
					prodctInfo={prodctInfo}
					setProdctInfo={setProdctInfo}
					currentProduct={currentProduct}
				/>
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
					prodctInfo={prodctInfo}
					setProdctInfo={setProdctInfo}
					currentProduct={currentProduct}
				/>
			)}
		</>
	);
};
