import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div className="flex mb-6 mx-auto">
      <form className="flex mx-0 gap-2 ">
        <input
          className="w-fit mx-0 px-3 py-3 bg-gray-100 outline-none rounded-sm "
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
