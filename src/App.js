import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Character } from './pages/Character';
import { Home } from './pages/Home';
// import { ThemeProvider } from 'styled-components';
// import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/ThemeProvider';

function App() {
  return (
    <>
      {/* <GlobalStyles />
      <ThemeProvider theme={theme}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character" element={<Character />} />
            {/* <Route path="/shop/:catalog/:id" element={<Product />} />
          <Route path="/order" element={<Order />} /> */}
            {/* <Route path="/success" element={<Success />} /> */}
            {/* <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/:catalog" element={<Catalog />} /> */}
          </Routes>
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
