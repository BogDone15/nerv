import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/ThemeProvider';

function App() {
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}

export default App;
