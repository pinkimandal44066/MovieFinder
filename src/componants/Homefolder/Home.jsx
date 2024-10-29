import { useEffect, useState } from "react";
import { useAuthContext } from "../../contextfolder/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allMovie, getAllMovie, search } = useAuthContext();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;
  const newData = search?.data?.length === 0 ? allMovie?.data : search?.data;

  useEffect(() => {
    getAllMovie(currentPage);
  }, [currentPage]);

  // Total pages
  const totalPages = Math.ceil(allMovie.total / moviesPerPage);

  // Handle page change
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="p-6 mt-16 bg-gray-900 text-white">
      {allMovie.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newData?.map((movie) => (
              <Link
                to={`/moviedetailspage/${movie.imdbID}`}
                key={movie.imdbID}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={movie.Poster}
                  alt={`${movie.Title} Poster`}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{movie.Title}</h2>
                  <p className="text-md">Type: {movie.Type}</p>
                  <p className="text-md">Year: {movie.Year}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevPage}
              className="bg-yellow-400  text-white py-2 px-4 rounded hover:bg-white hover:text-black
               transition duration-200"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              className="bg-yellow-400 
               text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-200"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
