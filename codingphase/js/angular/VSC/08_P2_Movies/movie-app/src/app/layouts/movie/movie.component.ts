import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService, Movie } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieSelected: Movie = {
    title: null,
    slug: null,
    image: null,
    releaseDate: null,
    synopsis: null,
    tktsAvailable : 0
  }

  constructor(service: MoviesService, private route: ActivatedRoute) {
    this.route.params.subscribe(() => {
      this.movieSelected = service.getMovieBySlug(this.route.snapshot.params['title'])[0];
    })
  }

  ngOnInit(): void { }

}
