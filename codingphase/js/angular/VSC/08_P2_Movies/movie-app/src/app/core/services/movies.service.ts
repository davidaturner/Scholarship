import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  rise_skywalker : Movie = {
    title : 'STAR WARS: The Rise of Skywalker',
    slug :  'star-wars-the-rise-of-skywalker',
    image : 'https://i.ebayimg.com/images/g/qNEAAOSwetdi-9Sg/s-l1200.jpg',
    tktsAvailable : 1
  }

  cats : Movie = {
    title : 'CATS: The Movie',
    slug :  'cats-the-movie',
    image : 'https://i.ebayimg.com/images/g/pNUAAOSwKO9jDKeP/s-l1600.jpg',
    tktsAvailable : 1
  }

  jumanji : Movie = {
    title : 'JUMANJI: The Next Level',
    slug :  'jumanji-the-next-level',
    image : 'https://m.media-amazon.com/images/I/71AZ4sIFkpL._AC_SL1259_.jpg',
    tktsAvailable : 1
  }

  frozen2 : Movie = {
    title : 'Frozen 2',
    slug :  'frozen-2',
    image : 'https://m.media-amazon.com/images/I/714arK1ZtCL._AC_SL1024_.jpg',
    tktsAvailable : 1
  }

  movieData : any [] = [
    this.rise_skywalker,
    this.cats,   
    this.jumanji,
    this.frozen2,
  ]

  selected: any;

  constructor() { }
  getAllMovies() : any[] {
    return this.movieData;
  }

  getMovieBySlug(slug:string) {
    return this.movieData.filter((movie) => {
      return movie.slug === slug;
    })
  }
}

export interface Movie {
    title: string | null;
    slug: string | null;
    image: string | null;
    tktsAvailable : number;  
}
