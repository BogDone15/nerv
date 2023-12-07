import { Alert } from '@mui/material';
import React from 'react';

export const ErrorAlert = ({ title }) => {
	return (
		<Alert
			variant='filled'
			severity='error'
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
