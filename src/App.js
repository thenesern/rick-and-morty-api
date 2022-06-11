import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import Pagination from "./components/Pagination/Pagination";
import Episode from "./components/Episode/Episode";
// Axios
import axios from "axios";
import Character from "./components/Character/Character";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/episode/:id" element={<Episode />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);
  const [pages, setPages] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // Fetching episodes from the API via axios
  useEffect(() => {
    setIsFetching(true);
    try {
      axios
        .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
        .then((result) => setEpisodes(result));
      setIsFetching(false);
    } catch (err) {
      setIsFetching(false);
      console.log(err);
    }
  }, [page, search]);

  // Setting the page length
  useEffect(() => {
    const array = [];
    for (let i = 0; i < episodes?.data?.info?.pages; i++) {
      array.push(i + 1);
    }
    setPages([...array]);
  }, [episodes?.data?.info?.pages]);

  return (
    <div>
      <div style={{ minHeight: "90vh" }}>
        {isFetching ? (
          <p className="w-full text-center py-10 my-10">Loading...</p>
        ) : (
          <Cards data={episodes} search={search} setSearch={setSearch} />
        )}
      </div>
      <Pagination
        setPage={setPage}
        page={page}
        pages={pages}
        length={episodes?.data?.info?.pages}
      />
    </div>
  );
};

export default App;
