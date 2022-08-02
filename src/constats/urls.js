const baseURL = 'https://api.themoviedb.org/3';
const api_key = '05353009914a9c0e8768cad280fbf5d5';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';
const language = 'en-US';

const urls = {
    movies: '/discover/movie',
    genres: '/genre/movie/list',
    movieId: '/movie'
}

export {
    baseURL,
    api_key,
    urls,
    IMAGE_PATH,
    language
}