import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
