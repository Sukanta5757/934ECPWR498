import React from 'react';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Homepage/>
      <Signin />
      <Signup />
    </>
  );
}

export default App;
