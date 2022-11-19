import "./App.css";
import React from "react";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <header className="App-header">
        <h1>BeSuccessful</h1>

        <p>{!data ? "Loading..." : data}</p>
      </header> */}
    </div>
  );
}

export default App;
