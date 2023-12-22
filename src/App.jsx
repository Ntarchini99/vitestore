import './App.css';
import Productos from './components/Productos/Productos.jsx'
import HomePage from './components/HomePage/HomePage.jsx';
import Nosotros from './components/Nosotros/Nosotros.jsx';
import Header from './components/Header/Header.jsx';
import Envios from './components/Envios/Envios.jsx';
import Footer from './components/Footer/Footer.jsx';



function App() {
  return (
    <>
    <Header/>
      <HomePage />
      <Nosotros/>
     <Productos/>
      <Envios/>
    <Footer/>
    </>
  );
}

export default App;
