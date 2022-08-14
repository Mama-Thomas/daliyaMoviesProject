const apiConfiguration = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: "6086de366ae2e3d65aee559127f9c789",
  ORIGINAL_IMAGE: (imagePathname) =>
    `https://image.tmdb.org/t/p/original${imagePathname}`,
  W500_IMAGE: (imagePathname) =>
    `https://image.tmdb.org/t/p/w500/${imagePathname}}`
};

export default apiConfiguration;