import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "pages/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/detail/1" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
