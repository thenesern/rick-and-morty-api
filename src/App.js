import React, { useState, useEffect, useLayoutEffect } from "react";
// Components
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
// Axios
import axios from "axios";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);

  // Fetching episodes from the API via axios
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
      .then((result) => setEpisodes(result));
  }, [page, search]);

  return (
    <div>
      <NavBar />
      <div>
        <Search setSearch={setSearch} />
        <div>
          {/*  <Filters /> */}
          <Cards data={episodes} search={search} />
        </div>
        <Pagination
          setPage={setPage}
          page={page}
          length={episodes?.data?.info?.pages}
        />
      </div>
    </div>
  );
}

export default App;
