import * as React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import { Terms } from './pages/Terms';
import { Products } from './pages/Products';
import logo from './assets/logo.svg';
import { Main } from './pages/Main';
import { Box, Divider, Grid } from '@mui/material';
import { SideBar } from './components/Sidebar';
import { Categories } from './pages/Categories';
import { NewProduct } from './pages/NewProduct';
import { Socials } from './pages/Socials';
import { Heroes } from './pages/Heroes';
import { Hero } from './pages/Hero';
import { Login } from './pages/Login';
import { useState } from 'react';
import { useEffect } from 'react';
import authService from './services/auth.service';
import { Orders } from './pages/Orders';
import { OrdersItem } from './pages/OrdersItem';
import { CurrentProduct } from './pages/CurrentProduct';

function App() {
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const authToken = authService.getAuthToken();

		authToken && setCurrentUser(authToken);
	}, []);

	const Layout = () => {
		return (
			<Grid container spacing='2' sx={{ height: '100vh' }}>
				<Box width='210px' sx={{ borderRight: '1px solid rgba(0,0,0,.2)' }}>
					<Box sx={{ padding: '32px 0 20px 32px' }}>
						<img src={logo} alt='logo' />
					</Box>
					<Divider />
					<SideBar />
				</Box>
				<Box width='calc(100% - 210px)' position='relative'>
					<Outlet />
				</Box>
			</Grid>
		);
	};

	const router = createBrowserRouter(
		[
			{
				path: '/',
				element: currentUser ? <Layout /> : <Login />,
				children: [
					{
						path: '/',
						element: <Main />,
					},
					{
						path: '/login',
						element: <Login />,
					},
					{
						path: '/terms',
						element: <Terms />,
					},
					{
						path: '/products',
						element: <Products />,
					},
					{
						path: '/products/:item',
						element: <CurrentProduct />,
					},
					{
						path: '/newproduct',
						element: <NewProduct />,
					},
					{
						path: '/socials',
						element: <Socials />,
					},
					{
						path: '/categories',
						element: <Categories />,
					},
					{
						path: '/heroes',
						element: <Heroes />,
					},
					{
						path: '/hero',
						element: <Hero />,
					},
					{
						path: '/hero/:item',
						element: <Hero />,
					},
					{
						path: '/orders',
						element: <Orders />,
					},
					{
						path: '/orders/:item',
						element: <OrdersItem />,
					},
				],
			},
		],
		{
			basename: '/admin',
		}
	);

	return <RouterProvider router={router} />;
}

export default App;
