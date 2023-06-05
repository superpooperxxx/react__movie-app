import axios from 'axios';

const API_KEY = 'f4d7563bac70ce29f889ad2113d63ab8';
const ACCESS_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGQ3NTYzYmFjNzBjZTI5Zjg4OWFkMjExM2Q2M2FiOCIsInN1YiI6IjY0Nzg4YzgxMTc0OTczMDExODZmOGM4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prmXwjR7mIzpbO7DtkruruKd_4ey2GBN9F1e7mnkzFM';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = () =>
  axios.get(`${BASE_URL}/discover/movie`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  });
