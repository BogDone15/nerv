import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Character } from './pages/Character';
import { Home } from './pages/Home';
// import { ThemeProvider } from 'styled-components';
// import GlobalStyles from './styles/GlobalStyles';
// import { theme } from './styles/ThemeProvider';

function App() {
  return (

      // <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      // </BrowserRouter>

  );
}



export default App;
