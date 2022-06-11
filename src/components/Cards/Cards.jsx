import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ data, search }) => {
  const [episodes, setEpisodes] = useState(null);

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

  return (
    <div className="container mt-10 mx-auto flex flex-wrap gap-3 px-4">
      {episodes?.map((episode) => (
        <NavLink to={`/episode/${episode.episode}`}>
          <button
            key={episode?.id}
            className="p-3 rounded-sm bg-zinc-900 cursor-pointer"
          >
            <h2 className="text-sm text-slate-100 border-b">
              {episode?.episode}
            </h2>
            <h2 className="text-2xl text-white border-b p-2">
              {episode?.name}
            </h2>
            <span className="text-sm mx-auto text-white">
              {episode?.air_date}
            </span>
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
