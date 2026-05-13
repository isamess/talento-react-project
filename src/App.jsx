import './App.css';
import{Route, Routes} from 'react-router-dom';
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'; 
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx';



function App() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
                     
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/carrito" element={<h1>Carrito</h1>} />
      </Routes>
    </main>
    <Footer/>
    </>
  );
};

export default App;
