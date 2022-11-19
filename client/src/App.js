import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Explore from "./components/Explore";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element=<Login /> exact />
        <Route path="/login" element=<Login /> />
        <Route path="/yourtimeline" element=<Timeline /> />
        <Route path="/explore" element=<Explore /> />
      </Routes>
      {/* <header className="App-header">
        <h1>BeSuccessful</h1>

        <p>{!data ? "Loading..." : data}</p>
      </header> */}
    </div>
  );
}

export default App;
