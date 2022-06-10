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
  const [pages, setPages] = useState([]);

  // Fetching episodes from the API via axios
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
      .then((result) => setEpisodes(result));
  }, [page, search]);

  // Setting the page length
  useEffect(() => {
    for (let i = 0; i < episodes?.data?.info?.pages; i++) {
      pages.push(i + 1);
    }
  }, [pages, episodes?.data?.info?.pages]);

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
          pages={pages}
          length={episodes?.data?.info?.pages}
        />
      </div>
    </div>
  );
}

export default App;
