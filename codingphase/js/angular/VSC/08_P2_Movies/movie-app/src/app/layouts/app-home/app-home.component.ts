import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {
  moviesData: any[];
  constructor(service: MoviesService, private route: Router) {
    this.moviesData = service.getAllMovies();
  }

  ngOnInit(): void {
  }

  clickedMovie(slug:string) {
    this.route.navigate(['movie', slug]);
  }
}
