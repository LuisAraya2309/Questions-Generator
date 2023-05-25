import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./MainPage";
import { ResultsPage } from "./results/ResultsPage";

export function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
