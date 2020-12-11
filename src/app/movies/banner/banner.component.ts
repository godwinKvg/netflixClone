import { MoviesService } from '../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { requests } from '../../requests';
import { Subscription } from 'rxjs';
import * as movieTrailer from 'movie-trailer';


let apiLoaded = false;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  interval;

  movie;
  imageUrl: string;
  subscriptions: Subscription[] = []

  trailerUrl: string;


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    const randomRequestFetchUrl = this.randomfetchUrl(requests)

    this.subscriptions.push(this.moviesService.getMovies(randomRequestFetchUrl.url).subscribe(

      data => {
        this.interval = setInterval(
          () => {
            this.movie = data.results[Math.floor(Math.random() * Math.floor(data.results.length))];
            this.imageUrl = 'https://image.tmdb.org/t/p/original/' + this.movie?.backdrop_path;
          }, 5000)
      }
      ,
      error => {
        console.log(`%c${error}, '%cIt seems that there is an error`, "background:black ; color: white", "color: red; font-size:25px");

      }
    ))


    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

  randomfetchUrl(obj) {
    const keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
  };




  truncateDescription(description) {
    return description?.substring(0, 150) + '...' || ''
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
      error => console.log(`%c${error}, '%cMovie not Found or error Occured`, "background:black ; color: white ;font-size:25px", "color: red; font-size:25px")
    )
  }


  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe())

    clearInterval(this.interval)
  }
}
