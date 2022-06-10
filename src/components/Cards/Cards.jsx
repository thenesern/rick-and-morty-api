import React, { useState } from "react";
/* import { useHistory } from "react-router-dom"; */

const Cards = ({ data }) => {
  const [episodes, setEpisodes] = useState(data?.data?.results);
  /*   const history = useHistory();
   */
  /*   const handlePush = ({ id }) => {
    history.push(`/asd`);
  };
 */
  return (
    <div className="container mt-10 mx-auto flex flex-wrap gap-3">
      {episodes.map((episode) => (
        <>
          <button
            /*   onClick={handlePush} */
            key={episode.id}
            className={
              episode?.episode?.split("E")[1] === "01" &&
              episode?.episode?.split("E")[0] !== "S01"
                ? "p-5 rounded-sm bg-zinc-900 cursor-pointer"
                : "p-5 rounded-sm bg-zinc-900 cursor-pointer"
            }
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
          {episode?.episode?.split("E")[1] === "01" &&
          episode?.episode?.split("E")[0] !== "S01" ? (
            <div className="2xl:w-full xl:w-full lg:w-full md-w-full"></div>
          ) : (
            ""
          )}
        </>
      ))}
    </div>
  );
};

export default Cards;
