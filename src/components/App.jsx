import React from "react";
import Login from "./Login";

function App() {
  const isLoggedIn = false;
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />} </div>
  );
}

export default App;
