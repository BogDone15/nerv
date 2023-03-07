import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Character } from './pages/Character';
import { Home } from './pages/Home';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/ThemeProvider';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character" element={<Character />} />
          </Routes>
        {/* </BrowserRouter> */}
      </ThemeProvider>
    </>
  );
}

export default App;
