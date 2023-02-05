import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";

function App(): JSX.Element {
  const [location, setLocation] = useState<{ city: string; state: string }>({
    city: "",
    state: "",
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home location={location} setLocation={setLocation} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
