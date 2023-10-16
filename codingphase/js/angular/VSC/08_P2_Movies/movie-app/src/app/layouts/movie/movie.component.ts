import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieSelected: string | null = "";
  constructor(service: MoviesService, private route: ActivatedRoute) {
    this.movieSelected = service.getMovieBySlug('star-wars-the-rise-of-skywalker')[0];
    console.log(this.movieSelected);
  }

  ngOnInit(): void {
  }

}
