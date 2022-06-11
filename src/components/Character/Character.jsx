import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Character = () => {
  const [character, setCharacter] = useState({});
  const { gender, location, name, origin, species, status, image } = character;

  // Getting the query via useParams Hook
  const params = useParams();

  // We split the query to get the episode number
  const [id, setId] = useState(params?.id);

  // If id changed then get the character
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setCharacter(res?.data));
  }, [id]);

  return (
    <div className="container mx-auto flex justify-center gap-10 items-center bg-slate-100 p-20 rounded-xs">
      <img
        alt={name}
        className=" w-100 rounded-full border-2 border-stone-500 drop-shadow-2xl"
        src={image}
      />
      <div className="w-96 h-full border p-3  border-neutral-300 rounded-xl ">
        <p className="p-2 font-semibold text-2xl text-gray-800 border-b mx-2">
          {name}
        </p>
        <ul className="p-2 flex flex-col gap-2">
          <li className="font-semibold">
            Status: <span className="font-light">{status}</span>
          </li>
          <li className="font-semibold">
            Gender: <span className="font-light">{gender}</span>
          </li>
          <li className="font-semibold">
            Origin: <span className="font-light">{origin?.name}</span>
          </li>
          <li className="font-semibold">
            Species: <span className="font-light">{species}</span>
          </li>
          <li className="font-semibold">
            Location: <span className="font-light">{location?.name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Character;
