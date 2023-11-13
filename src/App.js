import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './pages/products';
import Cart from './pages/cart';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      {/* routes */}
      <Routes>
        <Route index path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
