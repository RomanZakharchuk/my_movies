import {axiosService} from "./axios.service";
import {api_key, urls} from "../constats";

const moviesService = {
    getMovies: (page=1) => axiosService.get(`${urls.movies}?page=${page}&api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`),
    getMoviesWithGenres: (genre, page = 1) => axiosService.get(`${urls.movies}?page=${page}&api_key=${api_key}&with_genres=${genre}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`),
    getGenres: () => axiosService.get(`${urls.genres}?api_key=${api_key}&language=en-US`)
}

export {moviesService};