import { MoviesService } from './../services/movies.service';
import { Component, OnDestroy } from '@angular/core';
import { requests } from '../requests';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnDestroy {

  movie;
  imageUrl
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies(requests.fetchTopRated.url).subscribe(
      data => {
        this.movie = data.results[Math.floor(Math.random() * Math.floor(data.results.length))];
        this.imageUrl = 'https://image.tmdb.org/t/p/original/' + this.movie?.backdrop_path;

      },
      error => {
        console.log(error, 'Movie taking error');

      }
    )
  }


  truncateDescription(description) {
    return description?.substring(0, 150) + '...'
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
