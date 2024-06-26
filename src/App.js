import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Sercives from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/services" element={<Sercives />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
