import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests.js/Requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

//import { Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Neflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fectchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
