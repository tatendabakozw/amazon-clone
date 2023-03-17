import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/home/Home";
import Login from "@pages/auth/login/Login";
import Register from "@pages/auth/register/Register";
import Cart from "@pages/cart/Cart";
import Explore from "@pages/explore/Explore";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
