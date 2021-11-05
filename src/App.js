import "./App.css";
import React from "react";
import Row from "./Components/Row";
import requests from "./requests";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINAL"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      ></Row>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movied" fetchURL={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
