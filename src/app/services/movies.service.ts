import { IMovie } from './../models/IMovie.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(url): Observable<IMovie> {
    return this.http.get<IMovie>(url)
  }

}
