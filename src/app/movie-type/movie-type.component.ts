import { MoviesService } from './../services/movies.service';
import { Component, Input, OnDestroy } from '@angular/core';
import * as movieTrailer from 'movie-trailer';

let apiLoaded = false;

@Component({
  selector: 'app-movie-type',
  templateUrl: './movie-type.component.html',
  styleUrls: ['./movie-type.component.scss']
})

export class MovieTypeComponent implements OnDestroy {
  @Input() title: string;
  @Input() fetchUrl: string;
  @Input() isLargeRow: boolean;

  baseUrl = 'https://image.tmdb.org/t/p/original/';

  trailerUrl: string;
  movies: any;
  lastTrailerUrl: string;

  subscriptions: any[];
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies(this.fetchUrl).subscribe(
      data => {
        this.movies = data.results;
      },
      error => {
        this.movies = null;
      }
    )
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }



  }


  onMovieClicked(movie) {
    if (this.trailerUrl) {
      this.setTrailerUrl("");
    }
    else {
      this.playYoutubeTrailer(movie?.title || movie?.name || '');
    }
  }

  setTrailerUrl(url) {
    this.trailerUrl = url;
  }

  playYoutubeTrailer(search) {
    movieTrailer(search).then(
      result => {
        this.setTrailerUrl(result.split('?v=')[1])
      }
    ).catch(
      error => console.log('Movie not Found or error Occured', error)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.map(
      sub => sub.unsubscribe()
    )

  }

}
