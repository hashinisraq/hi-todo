import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="home" element={<Home />}>
        </Route>
        <Route path="*" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
