import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Filters from "../Filters/Filters";

const Episode = () => {
  const [filtered, setFiltered] = useState([]);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

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
              return axios.get(character);
            })
          );
          setCharacters(fetchedCharacters);
        } catch (err) {
          console.log(err);
        }
      }
      // IIFE
    })();
  }, [api]);

  // Custom Filter
  useEffect(() => {
    if (status && species && gender) {
      setFiltered(
        characters?.filter(
          (character) =>
            character?.data?.status?.toLowerCase() === status?.toLowerCase() &&
            character?.data?.species?.toLowerCase() ===
              species?.toLowerCase() &&
            character?.data?.gender?.toLowerCase() === gender?.toLowerCase()
        )
      );
    } else if (status && species && !gender) {
      setFiltered(
        characters?.filter(
          (character) =>
            character?.data?.status?.toLowerCase() === status?.toLowerCase() &&
            character?.data?.species?.toLowerCase() === species?.toLowerCase()
        )
      );
    } else if (status && !species && gender) {
      setFiltered(
        characters?.filter(
          (character) =>
            character?.data?.status?.toLowerCase() === status?.toLowerCase() &&
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
  }, [status, species, gender]);

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-semibold">
        Episode: {infos?.name} ({infos?.episode})
      </h1>
      <p className="text-center font-light p-1">{infos?.air_date}</p>
      <div className="container lg:grid  lg:grid-cols-5">
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
        <div className="flex col-span-4 my-10 flex-wrap justify-start gap-10 mx-auto justify-center">
          {status || species || gender ? (
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
      </div>
    </div>
  );
};

export default Episode;
