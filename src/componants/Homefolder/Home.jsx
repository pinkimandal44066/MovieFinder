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
    <div>
      {allMovie.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            {newData?.map((movie) => (
              <div
                key={movie.imdbID}
                className="flex  mt-12 text-black gap-20 border-2 border-red-600"
              >
                <Link to={`/moviedetailspage/${movie.imdbID}`}>
                  <img src={movie.Poster} />
                  <p className="text-2xl p-3">Title: {movie.Title}</p>
                  <p className="text-2xl p-3">movie: {movie.Type}</p>
                  <p className="text-2xl p-3">year: {movie.Year}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="pagination-controls">
            <button onClick={prevPage}>Previous</button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={nextPage}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
