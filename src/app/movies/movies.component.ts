import { Component, OnInit } from '@angular/core';
import { requests } from '../requests';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  requests = requests;
  constructor() { }

  ngOnInit(): void {
    console.log(
      "%cDon't Copy/Paste anything that you aren't %caware of here OK :) ?!!!! ", "background:black ; color: white ;font-size:30px", "color: red; font-size:40px;padding:20px"
    );

  }

}
