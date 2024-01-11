// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageFirst from "./pages/pageFirst";
import PageSecond from "./pages/pageSecond";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for PageFirst */}
        <Route path="/" element={<PageFirst />} />

        {/* Route for PageSecond */}
        <Route path="/page-second" element={<PageSecond />} />
      </Routes>
    </Router>
  );
}

export default App;
