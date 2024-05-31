import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWQ0NmI2NTZhYWI3OGIxZDAyNTRkNDAzMmU0OTEzZCIsInN1YiI6IjY2NTM2ZGZiNjI3N2FkMjgwNjE3NTE3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3gGdTZUqROF5xxkIRlkPa3yC9nbhEhZqe4PRWNR4_6k",
  },
  params: {
    page: 1,
    include_adult: false,
    language: "en-US",
  },
};

export const fetchMovies = async () => {
  const response = await axios.get(`3/trending/movie/day`, options);
  return response.data;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCastById = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/credits`, options);
  return response.data;
};

export const fetchMovieReviewsById = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, options);
  return response.data;
};

export const fetchMoviesByQuery = async (query) => {
  const response = await axios.get(`3/search/movie?query=${query}`, options);
  return response.data;
};