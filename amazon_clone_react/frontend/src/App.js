import Navbar from './components/header/Navbar';
import Benner from './components/benner/Benner';
import Homepage from './components/homepage/Homepage';
import Panelbar from './components/panel/panelbar';


function App() {
  return (
    <>
      <Navbar/>
      <Panelbar/>
      <Benner/>
      <Homepage/>
    </>
  );
}

export default App;
