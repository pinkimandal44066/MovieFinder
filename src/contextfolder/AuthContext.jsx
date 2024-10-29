import axios from "./axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [allMovie, setAllMovie] = useState({
    loading: false,
    data: [],
    total: 0,
  });
  const [movieDetails, setMovieDetails] = useState({ // Fixed typo here
    loading: false,
    data: {},
  });
  const [search, setSearch] = useState({ loading: false, data: [] });

  const getAllMovie = async (num) => {
    setAllMovie({ data: [], loading: true });
    try {
      const { data, status } = await axios.get(
        `?type=movie&apikey=${apiKey}&s=marvel&page=${num}`
      );
      if (status === 200) {
        setAllMovie({
          data: data.Search || [],
          loading: false,
          total: data?.totalResults,
        });
      }
    } catch (error) {
      console.error("Error fetching movies:", error.message);
      setAllMovie((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const getAllMovieDetails = async (id) => {
    setMovieDetails({ data: {}, loading: true });
    try {
      const { data, status } = await axios.get(`?i=${id}&apikey=${apiKey}`);
      if (status === 200) {
        setMovieDetails({ data: data || {}, loading: false });
      }
    } catch (error) {
      console.error("Error fetching movie details:", error.message);
      setMovieDetails({ data: {}, loading: false });
    }
  };

  const getSearch = async (text) => {
    setSearch({ data: [], loading: true });
    try {
      const { data, status } = await axios.get(
        `?type=movie&apikey=${apiKey}&s=${text}`
      );
      if (status === 200) {
        navigate(`/?searchData=${text}`);
        setSearch({
          data: data.Search || [],
          loading: false,
          total: data?.totalResults,
        });
      }
    } catch (error) {
      console.error("Error fetching movies:", error.message);
      setSearch((prevState) => ({ ...prevState, loading: false }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        allMovie,
        getAllMovie,
        getAllMovieDetails,
        movieDetails, // Use the corrected state name here
        getSearch,
        search,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// Export AuthProvider component and hook
export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);
