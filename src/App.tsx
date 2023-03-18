import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "@pages/auth/register/Register";
import Product from "@pages/product/Product";
import Explore from "@pages/explore/Explore";
import Login from "@pages/auth/login/Login";
import Home from "@pages/home/Home";
import Cart from "@pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pd" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
