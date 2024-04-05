import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Product from "./pages/Product/Product";
import NavBar from "./components/NavBar/NavBar";
import ChatBot from "./pages/ChatBot/ChatBot.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* <Route path="/products" element={} /> */}
          <Route path="/products" element={<Product />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
