// import React, { useState } from 'react';
import Container from '../Container/Container';
import Dashboard from '../Dashboard/Dashboard';

// import StatusContext from '../../context/context';

const App = () => {
  // const [status, setStatus] = useState('');
  
  return (
    <Container>
      {/* <StatusContext.Provider value={{ status, setStatus }}> */}
        <Dashboard />
      {/* </StatusContext.Provider> */}
    </Container>
  );
};

export default App;
