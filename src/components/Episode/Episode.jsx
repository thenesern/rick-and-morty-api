import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Filters from "../Filters/Filters";

const Episode = () => {
  const [filtered, setFiltered] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [search, setSearch] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  // Getting the query via useParams Hook
  const params = useParams();

  // We split the query to get the episode number
  const [episode, setEpisode] = useState(params?.id?.split("E")[1]);

  // Fetched Characters
  let [characters, setCharacters] = useState([]);

  // Episode infos
  const [infos, setInfos] = useState("");

  // API
  let api = `https://rickandmortyapi.com/api/episode/${episode}`;

  // Catching the episode changes and set the characters
  useEffect(() => {
    (async function () {
      setIsFetching(true);
      let info;
      // If there is API then try to get the data
      try {
        info = await axios.get(api);
        setInfos(info?.data);
      } catch (err) {
        console.log(err);
      }

      // If there is the info then try to get the characters and set the characters
      if (info) {
        try {
          let fetchedCharacters = await Promise.all(
            info?.data?.characters?.map((character) => {
              setIsFetching(false);
              return axios.get(character);
            })
          );
          setCharacters(fetchedCharacters);
        } catch (err) {
          setIsFetching(false);
          console.log(err);
        }
      }
      setIsFetching(false);
      // IIFE
    })();
  }, [api]);

  // Custom Filter
  useEffect(() => {
    if (search) {
      if (status && species && gender) {
        setFilteredSearch(
          filtered.filter(
            (character) =>
              character?.data?.status?.toLowerCase() ===
                status?.toLowerCase() &&
              character?.data?.species?.toLowerCase() ===
                species?.toLowerCase() &&
              character?.data?.gender?.toLowerCase() === gender?.toLowerCase()
          )
        );
      } else if (status && species && !gender) {
        setFilteredSearch(
          filtered.filter(
            (character) =>
              character?.data?.status?.toLowerCase() ===
                status?.toLowerCase() &&
              character?.data?.species?.toLowerCase() === species?.toLowerCase()
          )
        );
      } else if (status && !species && gender) {
        setFilteredSearch(
          filtered.filter(
            (character) =>
              character?.data?.status?.toLowerCase() ===
                status?.toLowerCase() &&
              character?.data?.gender?.toLowerCase() === gender?.toLowerCase()
          )
        );
      } else if (!status && species && gender) {
        setFilteredSearch(
          filtered.filter(
            (character) =>
              character?.data?.species?.toLowerCase() ===
                species?.toLowerCase() &&
              character?.data?.gender?.toLowerCase() === gender?.toLowerCase()
          )
        );
      } else if (status) {
        setFilteredSearch(
          filtered.filter(
            (character) =>
              character?.data?.status?.toLowerCase() === status?.toLowerCase()
          )
        );
      } else if (species) {
        setFilteredSearch(
          filtered.filter(
            (character) =>
              character?.data?.species?.toLowerCase() === species?.toLowerCase()
          )
        );
      } else if (gender) {
        setFilteredSearch(
          filtered.filter(
            (character) =>
              character?.data?.gender?.toLowerCase() === gender?.toLowerCase()
          )
        );
      }
    } else {
      if (status && species && gender) {
        setFiltered(
          characters?.filter(
            (character) =>
              character?.data?.status?.toLowerCase() ===
                status?.toLowerCase() &&
              character?.data?.species?.toLowerCase() ===
                species?.toLowerCase() &&
              character?.data?.gender?.toLowerCase() === gender?.toLowerCase()
          )
        );
      } else if (status && species && !gender) {
        setFiltered(
          characters?.filter(
            (character) =>
              character?.data?.status?.toLowerCase() ===
                status?.toLowerCase() &&
              character?.data?.species?.toLowerCase() === species?.toLowerCase()
          )
        );
      } else if (status && !species && gender) {
        setFiltered(
          characters?.filter(
            (character) =>
              character?.data?.status?.toLowerCase() ===
                status?.toLowerCase() &&
              character?.data?.gender?.toLowerCase() === gender?.toLowerCase()
          )
        );
      } else if (!status && species && gender) {
        setFiltered(
          characters?.filter(
            (character) =>
              character?.data?.species?.toLowerCase() ===
                species?.toLowerCase() &&
              character?.data?.gender?.toLowerCase() === gender?.toLowerCase()
          )
        );
      } else if (status) {
        setFiltered(
          characters?.filter(
            (character) =>
              character?.data?.status?.toLowerCase() === status?.toLowerCase()
          )
        );
      } else if (species) {
        setFiltered(
          characters?.filter(
            (character) =>
              character?.data?.species?.toLowerCase() === species?.toLowerCase()
          )
        );
      } else if (gender) {
        setFiltered(
          characters?.filter(
            (character) =>
              character?.data?.gender?.toLowerCase() === gender?.toLowerCase()
          )
        );
      }
    }
  }, [status, species, gender]);

  // Custom Search
  useEffect(() => {
    if (search) {
      if (status || gender || species) {
        setFilteredSearch(
          filtered?.filter((character) =>
            character?.data?.name?.toLowerCase().includes(search?.toLowerCase())
          )
        );
      } else {
        setFiltered(
          characters?.filter((character) =>
            character?.data?.name?.toLowerCase().includes(search?.toLowerCase())
          )
        );
      }
    }
  }, [search]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center font-semibold">
        Episode: {infos?.name} ({infos?.episode})
      </h1>
      <p className="text-center font-light p-1">{infos?.air_date}</p>
      <div className="container lg:grid lg:grid-cols-5 my-10 flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 outline-none bg-gray-100"
            type="text"
            placeholder="Search for a character"
          />
          <Filters
            className="mx-auto col-span-1"
            status={status}
            gender={gender}
            species={species}
            setFiltered={setFiltered}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
          />
        </div>
        {isFetching ? (
          <>
            <p></p>
            <p className="w-full text-center">Loading...</p>
            <p></p>
          </>
        ) : (
          <div className="flex col-span-4 flex-wrap justify-start gap-10 mx-auto justify-center">
            {search && (status || gender || species) ? (
              filteredSearch?.map((character) => (
                <NavLink
                  to={`/character/${character?.data?.id}`}
                  key={character?.data?.id}
                  className="rounded-t-xl relative max-h-96 transition duration-300 ease hover:shadow-lg hover:bg-slate-400 hover:text-white border-2 border-neutral-900"
                >
                  <img
                    alt={character?.data?.name}
                    className="w-64 h-64 bg-contain rounded-t-xl"
                    src={character?.data?.image}
                  />
                  {character?.data?.status === "Dead" && (
                    <h1 className="absolute top-1/3 right-1/3 text-4xl font-bold">
                      DEAD
                    </h1>
                  )}
                  <div className="p-2">
                    <h2 className="text-md border-b py-1 font-semibold">
                      {character?.data?.name}
                    </h2>
                    <div>
                      <h4 className="max-w-fit text-yellow-700 py-1">
                        Location:
                        <span> </span>
                        <span>{character?.data?.location?.name}</span>
                      </h4>
                    </div>
                  </div>
                </NavLink>
              ))
            ) : status || species || gender || search ? (
              filtered?.length > 0 ? (
                filtered?.map((character) => (
                  <NavLink
                    to={`/character/${character?.data?.id}`}
                    key={character?.data?.id}
                    className="rounded-t-xl relative max-h-96 transition duration-300 ease hover:shadow-lg hover:bg-slate-400 hover:text-white border-2 border-neutral-900"
                  >
                    <img
                      alt={character?.data?.name}
                      className="w-64 h-64 bg-contain rounded-t-xl"
                      src={character?.data?.image}
                    />
                    {character?.data?.status === "Dead" && (
                      <h1 className="absolute top-1/3 right-1/3 text-4xl font-bold">
                        DEAD
                      </h1>
                    )}
                    <div className="p-2">
                      <h2 className="text-md border-b py-1 font-semibold">
                        {character?.data?.name}
                      </h2>
                      <div>
                        <h4 className="max-w-fit text-yellow-700 py-1">
                          Location:
                          <span> </span>
                          <span>{character?.data?.location?.name}</span>
                        </h4>
                      </div>
                    </div>
                  </NavLink>
                ))
              ) : (
                <p>Not found.</p>
              )
            ) : (
              characters?.map((character) => (
                <NavLink
                  to={`/character/${character?.data?.id}`}
                  key={character?.data?.id}
                  className="rounded-t-xl relative transition duration-300 ease hover:shadow-lg hover:bg-slate-400 hover:text-white border-2 border-neutral-900"
                >
                  <img
                    alt={character?.data?.name}
                    className="w-64 h-64 bg-contain rounded-t-xl"
                    src={character?.data?.image}
                  />
                  {character?.data?.status === "Dead" && (
                    <h1 className="absolute top-1/3 right-1/3 text-4xl font-bold">
                      DEAD
                    </h1>
                  )}
                  <div className="p-2">
                    <h2 className="text-md border-b py-1 font-semibold">
                      {character?.data?.name}
                    </h2>
                    <div>
                      <h4 className="max-w-fit text-yellow-700 py-1">
                        Location:
                        <span> </span>
                        <span>{character?.data?.location?.name}</span>
                      </h4>
                    </div>
                  </div>
                </NavLink>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Episode;
