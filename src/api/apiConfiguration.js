import { Movie_API_KEY } from "./keys";

const apiConfiguration = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: Movie_API_KEY,
  ORIGINAL_IMAGE: (imagePathname) =>
    // `https://image.tmdb.org/3/${imagePathname}`,
    `https://image.tmdb.org/t/p/original${imagePathname}`,
  W500_IMAGE: (imagePathname) =>
    `https://image.tmdb.org/t/p/w500/${imagePathname}}`,
};

export default apiConfiguration;