import React, { useState, useEffect, useLayoutEffect } from "react";
// Components
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
// Axios
import axios from "axios";

function App() {
  const [episodes, setEpisodes] = useState(null);
  const [page, setPage] = useState(1);

  // Fetching episodes from the API via axios
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
      .then((result) => setEpisodes(result));
  }, [page]);

  return (
    <div>
      <NavBar />
      <div>
        <Search />
        <div>
          {/*  <Filters /> */}
          <Cards data={episodes} />
        </div>
      </div>
    </div>
  );
}

export default App;
