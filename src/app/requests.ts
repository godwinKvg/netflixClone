import { environment } from './../environments/environment';

const APIKEY = environment.APIKEY;

export const requests = {
    fetchNetflixOriginals: {
        url: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
        title: 'NETFLIX ORIGINALS',
        isLargeRow: true,
    },
    fetchTrending: {
        url: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
        title: 'TRENDING',
    },

    fetchTopRated: {
        url: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
        title: 'TOP RATED',
    },
    fetchActionMovies: {
        url: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
        title: 'ACTION MOVIE',
    },
    fetchDocumentoriesMovies: {
        url: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
        title: 'DOCUMENTORIES',
    },
    fetchScienceFiction: {
        url: `/discover/movie?api_key=${APIKEY}&with_genres=878`,
        title: 'SCIENCE FICTION'
    },
};
