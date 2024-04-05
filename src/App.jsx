import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Product from "./pages/Product/Product";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* <Route path="/products" element={} /> */}
          <Route path="/products" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
