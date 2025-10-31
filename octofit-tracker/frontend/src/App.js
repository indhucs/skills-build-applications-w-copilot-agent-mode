import React from 'react';
import './App.css';
const logo = process.env.PUBLIC_URL + '/octofitapp-small.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
              <img src={logo} alt="OctoFit Logo" className="octofit-logo me-2" />
              OctoFit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container py-3">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/" element={<div className="text-center"><h1 className="display-4">Welcome to OctoFit Tracker!</h1><p className="lead">Track your fitness, join teams, and climb the leaderboard.</p></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
