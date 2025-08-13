import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/" className="nav-link btn btn-danger text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link btn btn-danger text-white">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}
