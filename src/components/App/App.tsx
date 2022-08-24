import { Route, Routes, Navigate } from 'react-router-dom';

import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import Cards from '../../Views/Cards/Cards';
import Home from '../../Views/Home/Home';

const App = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
