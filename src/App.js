import logo from './logo.svg';
import './app.scss';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop/Index.jsx';
import NavbarComponent from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
