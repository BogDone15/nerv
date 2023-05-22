import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Character } from './pages/Character';
import { Checkout } from './pages/Checkout';
import { Corporation } from './pages/Corporation';
import { Failure } from './pages/Failure';
import { Home } from './pages/Home';
import { Order } from './pages/Order';
import { OrderError } from './pages/OrderError';
import { OrderGranted } from './pages/OrderGranted';
import { Product } from './pages/Product';
import { Terms } from './pages/Terms';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/ThemeProvider';

function App() {
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<HashRouter>
					{/* <BrowserRouter> */}
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/character' element={<Character />} />
						<Route path='/character/:id' element={<Product />} />
						<Route path='/order' element={<Order />} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/corporation' element={<Corporation />} />
						<Route path='/terms' element={<Terms />} />
						<Route path='/order-granted' element={<OrderGranted />} />
						<Route path='/order-error' element={<OrderError />} />
						<Route path='/failure' element={<Failure />} />
					</Routes>
				</HashRouter>
				{/* </BrowserRouter> */}
			</ThemeProvider>
		</>
	);
}

export default App;
