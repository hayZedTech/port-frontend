import React, { useState } from "react";
import PropTypes from "prop-types";

const Pagination = ({ onPageChange }) => {
    

  const totalPages = 10;
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (newPage) => {
    const nextPage = newPage > totalPages ? 1 : newPage;
    setActivePage(nextPage);
    onPageChange(nextPage);
  };

  return (
    <nav className="container d-flex justify-content-center fixed-bottom">
      <ul className="pagination flex-wrap">
        <li className={`page-item ${activePage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link bg-danger text-white"
            onClick={() => handlePageChange(activePage - 1)}
            disabled={activePage === 1}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className={`page-item ${activePage === index + 1 ? "active" : ""}`}>
            <button
              className="page-link alert alert-primary py-2 px-4 mx-1"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${activePage === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link bg-success text-white px-4"
            onClick={() => handlePageChange(activePage + 1)}
            disabled={activePage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
