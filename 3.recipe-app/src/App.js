import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Recipe from "./components/Recipe";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
