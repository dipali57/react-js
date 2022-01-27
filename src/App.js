import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./webpages/List";
import Information from "./webpages/Information";

import "./App.css";
function App() {
  const [book, setBook] = useState({});
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List setBook={setBook} />} />
        <Route path="/details" element={<Information book={book} />} />
      </Routes>
    </Router>
  );
}

export default App;
