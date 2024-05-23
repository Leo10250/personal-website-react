import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route
            path="/personal-website-react"
            exact
            element={<Home />}
          ></Route>
          <Route
            path="/personal-website-react/services"
            element={<Sercives />}
          ></Route>
          <Route
            path="/personal-website-react/products"
            element={<Products />}
          ></Route>
          <Route
            path="/personal-website-react/sign-up"
            element={<SignUp />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
