import React from "react";

const Search = () => {
  return (
    <div className="w-full flex justify-center">
      <input
        className="px-5 py-3 bg-gray-100 w-2/5 outline-none rounded-sm"
        type="text"
        placeholder="Search for a character"
      />
    </div>
  );
};

export default Search;
