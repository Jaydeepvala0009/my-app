import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import Myproduct from "./Pages/Myproduct";
import ProductDetails from "./Pages/ProductDetails";
import About from "./Pages/About";
import FindStore from "./Pages/FindStore";
import CustomerService from "./Pages/CustomerService";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="FindStore" element={<FindStore />} />
          <Route path="/CustomerService" element={<CustomerService />} />
          <Route path="Myproduct" element={<Myproduct />} />
          <Route path="Favourites" element={<Favourites />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="/ProductDetails/:productId" element={<ProductDetails />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
