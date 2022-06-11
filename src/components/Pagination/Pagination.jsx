import React, { useEffect, useState } from "react";

const Pagination = ({ setPage, page, length, pages }) => {
  let prev = () => {
    setPage((x) => x - 1);
  };
  let next = () => {
    setPage((x) => x + 1);
  };
  let custom = (number) => {
    setPage(number);
  };
  return (
    <div className="container mx-auto my-10 px-4 2xl:px-12 flex justify-between">
      <button
        onClick={prev}
        disabled={page === 1 ? true : false}
        className={
          page === 1
            ? "bg-rose-800 text-white px-6 xl:px-8 py-3 rounded-full opacity-50"
            : "bg-rose-800 text-white px-6 xl:px-8 py-3 rounded-full"
        }
      >
        Prev
      </button>
      <div className="flex gap-2">
        {pages?.map((p, i) => (
          <button
            onClick={() => custom(p)}
            className={
              page === p
                ? "bg-rose-800 text-white px-5 py-3 rounded-full"
                : "bg-white text-black px-5 py-3 rounded-full"
            }
            key={i}
          >
            {p}
          </button>
        ))}
      </div>
      <button
        onClick={next}
        disabled={page === length ? true : false}
        className={
          page === length
            ? "bg-rose-800 text-white px-6 xl:px-8 py-3 rounded-full opacity-50"
            : "bg-rose-800 text-white px-6 xl:px-8 py-3 rounded-full"
        }
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
