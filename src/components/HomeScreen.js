import React from "react";
import requests from "../Requests";
import "./assets/HomeScreen.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />

      <Banner />

      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentary movies" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default HomeScreen;
