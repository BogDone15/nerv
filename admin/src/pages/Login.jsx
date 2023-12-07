import React, { useState } from 'react';
import authService from '../services/auth.service';
import {
	Box,
	Button,
	CircularProgress,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorBlock, setErrorBlock] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleLogin = async e => {
		e.preventDefault();
		setLoading(true);
		setErrorBlock(false);

		const response = await authService.login(username, password);

		if (response) {
			setErrorBlock(true);
			setLoading(false);
			return;
		}

		setLoading(false);
		navigate('/');
		window.location.reload();
	};

	return (
		<Grid
			container
			alignItems='center'
			justifyContent='center'
			direction='column'
			sx={{ padding: '10px', height: '100vh' }}
		>
			<Typography variant='h2'>Nerv</Typography>
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '300px',
				}}
			>
				<TextField
					variant='outlined'
					size='small'
					type='text'
					placeholder='Username'
					onChange={e => setUsername(e.target.value)}
					sx={{ width: '100%', marginTop: '20px' }}
				/>
				<TextField
					variant='outlined'
					size='small'
					type='password'
					placeholder='Password'
					onChange={e => setPassword(e.target.value)}
					sx={{ width: '100%', marginTop: '20px' }}
				/>

				{errorBlock && (
					<Box sx={{ color: 'red' }}>
						<span>Incorrect username or password</span>
					</Box>
				)}
				<Button
					type='submit'
					variant='contained'
					onClick={handleLogin}
					sx={{ marginTop: '30px', width: '150px' }}
					disabled={!username || !password}
				>
					{!loading && <span>Log in</span>}
					{loading && (
						<CircularProgress
							sx={{ width: '20px !important', height: '20px !important' }}
						/>
					)}
				</Button>
			</form>
		</Grid>
	);
};
