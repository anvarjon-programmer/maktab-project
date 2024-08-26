import React, { useState } from 'react'
import { wins } from '../services/BMSWins';

const Yutuqlar = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(wins.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentImages = wins.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-4 py-2 mx-1 border rounded ${currentPage === i ? 'bg-teal-700 text-white' : 'bg-white text-teal-700'}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <section className="px-4">

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 bg-gray-100">
          {currentImages.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={`Gallery image ${index + 1}`}
                className="w-full object-cover h-[200px] sm:h-[250px] lg:h-[300px] transition-opacity duration-300 hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-white text-lg font-semibold text-center">19-maktab erishgan yutuqlari</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handlePreviousPage}
            className={`px-4 py-2 mx-2 text-white bg-teal-700 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {renderPageNumbers()}

          <button
            onClick={handleNextPage}
            className={`px-4 py-2 mx-2 text-white bg-teal-700 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Yutuqlar