import Navbar from './components/header/Navbar';
import Benner from './components/benner/Benner';
import Homepage from './components/homepage/Homepage';
import Panelbar from './components/panel/panelbar';
import Footer from './components/footer/Footer';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';

function App() {
  return (
    <>
      <Navbar/>
      <Panelbar/>
      <Benner/>
      <Homepage/>
      <Signin />
      <Signup />
      <Footer/>
    </>
  );
}

export default App;
