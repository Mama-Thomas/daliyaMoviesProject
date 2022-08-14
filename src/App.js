import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Homepage from "./pages/Homepage";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail/Detail";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:category" element={<Catalog />} />
          <Route path="/:category/search/:keyword" element={<Catalog />} />
          <Route path="/:category/:id" element={<Detail />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
