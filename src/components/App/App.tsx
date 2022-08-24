import Container from '../Container/Container';

import Navigation from '../Navigation/Navigation';
import Cards from '../../Views/Cards/Cards';

const App = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Cards />
      </Container>
    </>
  );
};

export default App;
