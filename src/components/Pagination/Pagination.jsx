import React from "react";

const Pagination = ({ setPage, page, length }) => {
  let prev = () => {
    setPage((x) => x - 1);
  };
  let next = () => {
    setPage((x) => x + 1);
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
      {page !== length && (
        <button
          onClick={next}
          className="bg-rose-800 text-white px-8 py-3 rounded-full"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
