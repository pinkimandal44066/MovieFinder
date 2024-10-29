import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../contextfolder/AuthContext';

const MovieDetailsPage = () => {
    const { getAllMovieDetails, movieDetails } = useAuthContext();
    const { id } = useParams();

    useEffect(() => {
        getAllMovieDetails(id);
    }, [id]);

    if (!movieDetails) return <div>Loading...</div>;

    const {
        Title,
        Poster,
        Plot,
        Genre,
        Director,
        Actors,
        Country,
        Released,
        Runtime,
        BoxOffice,
        imdbRating,
        imdbVotes,
        Awards,
    } = movieDetails.data;

    return (
        <div className="flex flex-col items-center p-6 bg-gray-900 text-white">
            <div className="max-w-4xl w-full bg-gray-800 shadow-lg rounded-lg p-4 md:flex">
                <img
                    src={Poster}
                    alt={`${Title} Poster`}
                    className="w-full md:w-1/3 rounded-lg object-cover"
                />
                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col space-y-4">
                    <h1 className="text-3xl font-bold"> Title:  {Title}</h1>
                    <p className="text-gray-400 text-sm">Genre: {Genre}</p>
                    <p className="text-lg"> Plot: {Plot}</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                            <span className="font-bold">Director:</span> {Director}
                        </div>
                        <div>
                            <span className="font-bold">Actors:</span> {Actors}
                        </div>
                        <div>
                            <span className="font-bold">Country:</span> {Country}
                        </div>
                        <div>
                            <span className="font-bold">Released:</span> {Released}
                        </div>
                        <div>
                            <span className="font-bold">Runtime:</span> {Runtime}
                        </div>
                        <div>
                            <span className="font-bold">Box Office:</span> {BoxOffice}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-4">
                        <div className="bg-yellow-500 text-gray-900 rounded-full px-3 py-1 text-lg font-semibold">
                            IMDb: {imdbRating}
                        </div>
                        <p className="text-sm text-gray-400">Votes: {imdbVotes}</p>
                    </div>

                    <div className="mt-4">
                        <p className="font-semibold">Awards</p>
                        <p>{Awards}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;
