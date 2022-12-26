import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
    person: 'person',
}

export const movieType = {
    popular:'popular',
    top_rated:'top_rated',
    upcoming:'upcoming',
    latest:'latest',
    now_playing:'now_playing',
    // similar:'similar'
}

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  latest: "latest",
  on_the_air: "on_the_air",
  airing_today: "airing_today",
//   similar: "similar"
};
export const peopleType = {
    popular:'popular'
    // latest:'latest'
}


const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getPeopleList: (type, params) => {
    const url = "person/" + peopleType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  recommendations: (cate, id) => {
    const url = category[cate] + "/" + id + "/recommendations";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
  getById: (cate, id) => {
     const url = cate + "/" + id;
     return axiosClient.get(url, { params: {} });
  }
};

export default tmdbApi;

 