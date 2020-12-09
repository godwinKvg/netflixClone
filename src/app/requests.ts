import { environment } from './../environments/environment';

const APIKEY = environment.APIKEY

const baseUrl = 'https://api.themoviedb.org/3';


export const
    requests = {
        fetchTrending: { url: `${baseUrl}/trending/all/week?api_key=${APIKEY}&language=en-US`, title: 'TRENDING' },
        fetchNetflixOriginals: { url: `${baseUrl}/discover/tv?api_key=${APIKEY}&with_networks=213`, title: 'NETFLIX ORIGINALS', isLargeRow: true },
        fetchTopRated: { url: `${baseUrl}/movie/top_rated?api_key=${APIKEY}&language=en-US`, title: 'TOP RATED' },
        /*  fetchActionMovies: { url: `${baseUrl}/discover/movie/api_key=${APIKEY}&with_genres=27`, title: 'ACTION MOVIE' },
         fetchDocumentoriesMovies: { url: `${baseUrl}/discover/movie/api_key=${APIKEY}&with_genres=99`, title: 'DOCUMENTORIES' }, */

    };