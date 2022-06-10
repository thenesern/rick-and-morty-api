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
    <div className="container mx-auto my-10 px-12 flex justify-between">
      {page !== 1 ? (
        <button
          onClick={prev}
          className="bg-rose-800 text-white px-8 py-3 rounded-full"
        >
          Prev
        </button>
      ) : (
        <div></div>
      )}
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
      {page !== length ? (
        <button
          onClick={next}
          className="bg-rose-800 text-white px-8 py-3 rounded-full"
        >
          Next
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Pagination;
