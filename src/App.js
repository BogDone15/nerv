import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Character } from './pages/Character';
import { Checkout } from './pages/Checkout';
import { Corporation } from './pages/Corporation';
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
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/item" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/corporation" element={<Corporation />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ored-granted" element={<OrderGranted />} />
          <Route path="/ored-error" element={<OrderError />} />
        </Routes>
        {/* </BrowserRouter> */}
      </ThemeProvider>
    </>
  );
}

export default App;
