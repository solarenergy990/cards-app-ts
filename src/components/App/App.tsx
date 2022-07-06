import Container from '../Container/Container';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Dashboard />
      </Container>
    </>
  );
};

export default App;
