import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {
  moviesData: any[];
  constructor(service: MoviesService) {
    // this.moviesData = service.getAllMoviesImageURLs();
    this.moviesData = service.getAllMovies();
  }

  ngOnInit(): void {
  }

}
