import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div className="w-full flex justify-center">
      <form className="w-2/5 flex gap-2">
        <input
          className="px-5 py-3 w-full bg-gray-100  outline-none rounded-sm"
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
          placeholder="Search for an episode"
        />
      </form>
    </div>
  );
};

export default Search;
