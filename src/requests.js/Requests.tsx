const API_KEY = "d295320890758f93f678e1ee5c497a35";

const requests = {
  fectchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&swith_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&swith_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&swith_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&swith_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&swith_genres=99`,
};

export default requests;
