import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeeReceipt from "./pages/FeeReceipt";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/fee-receipt" element={<FeeReceipt />} />
      </Routes>
    </Router>
  );
}

export default App;
