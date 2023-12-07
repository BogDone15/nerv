import { Alert } from '@mui/material';
import React from 'react';

export const SuccessAlert = ({ title }) => {
	return (
		<Alert
			variant='filled'
			severity='success'
			sx={{
				maxWidth: '290px',
				position: 'fixed',
				left: '50%',
				top: '29px',
				transform: 'translateX(-50%)',
				pointerEvents: 'none',
			}}
		>
			{title}
		</Alert>
	);
};
