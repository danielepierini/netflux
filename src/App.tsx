import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests.js/Requests";

//import { Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>daniele programador!!!!</h1>
      <Row title="Neflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fectchTrending} />
  
    </div>
  );
}

export default App;
