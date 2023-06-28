
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path="/Cart" exact element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
