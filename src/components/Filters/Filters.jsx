import React from "react";

const Filters = ({
  status,
  species,
  gender,
  setGender,
  setStatus,
  setSpecies,
}) => {
  return (
    <div className="mx-auto">
      <h2 className="text-center font-semibold mb-3">Filters</h2>
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-center bg-slate-100 py-1">Status</h3>
          <ul className="flex flex-wrap gap-3">
            <li>
              <button
                onClick={(e) => {
                  if (status === e.target.value) {
                    setStatus("");
                  } else {
                    setStatus(e.target.value);
                  }
                }}
                value="Alive"
                className={
                  status === "Alive"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Alive
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (status === e.target.value) {
                    setStatus("");
                  } else {
                    setStatus(e.target.value);
                  }
                }}
                value="Dead"
                className={
                  status === "Dead"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Dead
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (status === e.target.value) {
                    setStatus("");
                  } else {
                    setStatus(e.target.value);
                  }
                }}
                value="Unknown"
                className={
                  status === "Unknown"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Unknown
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-center bg-slate-100 py-1">Species</h3>
          <ul className="flex flex-wrap gap-3">
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Human"
                className={
                  species === "Human"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Human
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Alien"
                className={
                  species === "Alien"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Alien
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Humanoid"
                className={
                  species === "Humanoid"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Humanoid
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Poopybutthole"
                className={
                  species === "Poopybutthole"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Poopybutthole
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Mythological"
                className={
                  species === "Mythological"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Mythological
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Animal"
                className={
                  species === "Animal"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Animal
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Disease"
                className={
                  species === "Disease"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Disease
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Robot"
                className={
                  species === "Robot"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Robot
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Cronenberg"
                className={
                  species === "Cronenberg"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Cronenberg
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Planet"
                className={
                  species === "Planet"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Planet
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (species === e.target.value) {
                    setSpecies("");
                  } else {
                    setSpecies(e.target.value);
                  }
                }}
                value="Unknown"
                className={
                  species === "Unknown"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Unknown
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-center bg-slate-100 py-1">Gender</h3>
          <ul className="flex flex-wrap gap-3">
            <li>
              <button
                onClick={(e) => {
                  if (gender === e.target.value) {
                    setGender("");
                  } else {
                    setGender(e.target.value);
                  }
                }}
                value="Male"
                className={
                  gender === "Male"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Male
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (gender === e.target.value) {
                    setGender("");
                  } else {
                    setGender(e.target.value);
                  }
                }}
                value="Female"
                className={
                  gender === "Female"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Female
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (gender === e.target.value) {
                    setGender("");
                  } else {
                    setGender(e.target.value);
                  }
                }}
                value="Genderless"
                className={
                  gender === "Genderless"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Genderless
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  if (gender === e.target.value) {
                    setGender("");
                  } else {
                    setGender(e.target.value);
                  }
                }}
                value="Unknown"
                className={
                  gender === "Unknown"
                    ? "border-2 p-3 rounded-full px-5 py-2 bg-black text-white"
                    : "border-2 p-3 rounded-full px-5 py-2"
                }
              >
                Unknown
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
