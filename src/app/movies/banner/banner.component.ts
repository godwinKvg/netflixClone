import { MoviesService } from '../../services/movies.service';
import { Component, OnDestroy } from '@angular/core';
import { requests } from '../../requests';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnDestroy {

  movie;
  imageUrl: string;
  subscription: Subscription

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    const randomRequestFetchUrl = this.randomfetchUrl(requests)

    this.subscription = this.moviesService.getMovies(randomRequestFetchUrl.url).subscribe(
      data => {
        this.movie = data.results[Math.floor(Math.random() * Math.floor(data.results.length))];
        this.imageUrl = 'https://image.tmdb.org/t/p/original/' + this.movie?.backdrop_path;

      },
      error => {
        console.log(`%c${error}, '%cIt seems that there is an error` ,"background:black ; color: white", "color: red; font-size:25px");

      }
    )
  }

  randomfetchUrl(obj) {
    const keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
  };



  truncateDescription(description) {
    return description?.substring(0, 150) + '...' || ''
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
