import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, isPrevPageAvailable, isNextPageAvailable }) => {
  return (
    <div>
      <button onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && <span>&larr;</span>}
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && <span>&rarr;</span>}
        Next
      </button>
    </div>
  );
};

export default Pagination;
