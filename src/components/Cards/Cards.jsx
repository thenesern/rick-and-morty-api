import React, { useEffect, useState } from "react";
// Router
import { NavLink } from "react-router-dom";
// Components
import Search from "../Search/Search";

const Cards = ({ data, search, setSearch }) => {
  const [season, setSeason] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Sets the data to this state coming from main state
  useEffect(() => {
    if (search) {
      if (Number(search) || search.toLowerCase().includes("s" || "e")) {
        setEpisodes(
          data?.data?.results?.filter((e) =>
            e?.episode.toLowerCase().includes(search?.toLowerCase())
          )
        );
      } else {
        setEpisodes(
          data?.data?.results.filter((e) =>
            e?.name?.toLowerCase().includes(search?.toLowerCase())
          )
        );
      }
    } else {
      setEpisodes(data?.data?.results);
    }
  }, [data, search]);

  useEffect(() => {
    if (season) {
      setFiltered(
        episodes?.filter((e) => e?.episode?.split("E")[0] === season)
      );
    } else {
      setFiltered([]);
    }
  }, [season]);

  return (
    <div className="container mt-10 mx-auto flex flex-wrap gap-3 px-4 lg:grid lg:grid-cols-5 md:justify-center">
      <div className="flex flex-col">
        <Search setSearch={setSearch} />
        <h2 className="text-center font-semibold pb-5">Filters</h2>
        <ul className="flex flex-wrap gap-2 justify-center">
          <li>
            <button
              value="Season 1"
              onClick={(e) => {
                if (season === "S01") {
                  setSeason("");
                } else {
                  setSeason("S01");
                }
              }}
              disabled={
                episodes?.filter((e) => e?.episode.split("E")[0] === "S01")
                  .length === 0
                  ? true
                  : false
              }
              className={
                season === "S01"
                  ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                  : episodes?.filter((e) => e?.episode.split("E")[0] === "S01")
                      .length === 0
                  ? "border-2 p-3 rounded-full px-5 py-2 opacity-50"
                  : "border-2 p-3 rounded-full px-5 py-2"
              }
            >
              Season 1
            </button>
          </li>
          <li>
            <button
              value="Season 2"
              onClick={(e) => {
                if (season === "S02") {
                  setSeason("");
                } else {
                  setSeason("S02");
                }
              }}
              disabled={
                episodes?.filter((e) => e?.episode.split("E")[0] === "S02")
                  .length === 0
                  ? true
                  : false
              }
              className={
                season === "S02"
                  ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                  : episodes?.filter((e) => e?.episode.split("E")[0] === "S02")
                      .length === 0
                  ? "border-2 p-3 rounded-full px-5 py-2 opacity-50"
                  : "border-2 p-3 rounded-full px-5 py-2"
              }
            >
              Season 2
            </button>
          </li>
          <li>
            <button
              value="Season 3"
              onClick={(e) => {
                if (season === "S03") {
                  setSeason("");
                } else {
                  setSeason("S03");
                }
              }}
              disabled={
                episodes?.filter((e) => e?.episode.split("E")[0] === "S03")
                  .length === 0
                  ? true
                  : false
              }
              className={
                season === "S03"
                  ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                  : episodes?.filter((e) => e?.episode.split("E")[0] === "S03")
                      .length === 0
                  ? "border-2 p-3 rounded-full px-5 py-2 opacity-50"
                  : "border-2 p-3 rounded-full px-5 py-2"
              }
            >
              Season 3
            </button>
          </li>
          <li>
            <button
              value="Season 4"
              onClick={(e) => {
                if (season === "S04") {
                  setSeason("");
                } else {
                  setSeason("S04");
                }
              }}
              disabled={
                episodes?.filter((e) => e?.episode.split("E")[0] === "S04")
                  .length === 0
                  ? true
                  : false
              }
              className={
                season === "S04"
                  ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                  : episodes?.filter((e) => e?.episode.split("E")[0] === "S04")
                      .length === 0
                  ? "border-2 p-3 rounded-full px-5 py-2 opacity-50"
                  : "border-2 p-3 rounded-full px-5 py-2"
              }
            >
              Season 4
            </button>
          </li>
          <li>
            <button
              value="Season 5"
              onClick={(e) => {
                if (season === "S05") {
                  setSeason("");
                } else {
                  setSeason("S05");
                }
              }}
              disabled={
                episodes?.filter((e) => e?.episode.split("E")[0] === "S05")
                  .length === 0
                  ? true
                  : false
              }
              className={
                season === "S05"
                  ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                  : episodes?.filter((e) => e?.episode.split("E")[0] === "S05")
                      .length === 0
                  ? "border-2 p-3 rounded-full px-5 py-2 opacity-50"
                  : "border-2 p-3 rounded-full px-5 py-2"
              }
            >
              Season 5
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row xl:col-span-4 lg:col-span-4 2xl:col-span-4 xl:flex-wrap lg:flex-wrap md:flex-wrap mx-auto 2xl:flex-wrap justify-start md:justify-center gap-2 mt-3">
        {filtered.length > 0
          ? filtered?.map((episode) => (
              <NavLink to={`/episode/${episode?.episode}`} key={episode?.id}>
                <button className="p-3 rounded-sm bg-zinc-900 cursor-pointer w-full md:w-36 lg:w-48 xl:w-64 h-36">
                  <h2 className="text-md text-slate-100 border-b">
                    {episode?.episode}
                  </h2>
                  <h2 className="text-md text-white border-b p-2">
                    {episode?.name}
                  </h2>
                  <span className="text-xs mx-auto text-white">
                    {episode?.air_date}
                  </span>
                </button>
              </NavLink>
            ))
          : episodes?.map((episode) => (
              <NavLink to={`/episode/${episode?.episode}`} key={episode?.id}>
                <button className="p-3 rounded-sm bg-zinc-900 cursor-pointer w-full md:w-36 lg:w-48 xl:w-64 h-36 ">
                  <h2 className="text-md text-slate-100 border-b">
                    {episode?.episode}
                  </h2>
                  <h2 className="text-md text-white border-b p-2">
                    {episode?.name}
                  </h2>
                  <span className="text-xs mx-auto text-white">
                    {episode?.air_date}
                  </span>
                </button>
              </NavLink>
            ))}
      </div>
    </div>
  );
};

export default Cards;
