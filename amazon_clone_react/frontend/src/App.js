import React from 'react';
import Signin from './components/signin/Signin';
import Signupage from './pages/Signupage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Homepage/>
      <Signin />
      <Signupage />
    </>
  );
}

export default App;
