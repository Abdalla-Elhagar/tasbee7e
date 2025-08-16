import { Route, Routes } from "react-router";
import "./App.css";

import { AzkarDataContext } from "./context/azkarDataContext";
import Home from "./pages/Home";
import Tasbee7Page from "./pages/Tasbee7Page";
import { AzkarIdContext } from "./context/azkarIdContext";

function App() {
  return (
    <AzkarDataContext>
      <AzkarIdContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasbee7" element={<Tasbee7Page />} />
      </Routes>
      </AzkarIdContext>
    </AzkarDataContext>
  );
}

export default App;
