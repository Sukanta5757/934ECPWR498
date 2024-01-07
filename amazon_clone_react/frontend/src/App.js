import Navbar from './components/header/Navbar';
import Benner from './components/benner/Benner';
import Product from './components/product/Product';
// import Panelbar from './components/panel/panelbar';
import Footer from './components/footer/Footer';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Panel from './components/panel/Panel';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Panelbar/> */}
      <Panel/>
      <Benner/>
      <Product/>
      <Signin />
      <Signup />
      <Footer/>
    </>
  );
}

export default App;
