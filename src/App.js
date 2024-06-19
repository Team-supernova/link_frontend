import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/Navbar";
import Services from "./pages/services/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
      </Routes>
    </Router>
  );
}

export default App;
