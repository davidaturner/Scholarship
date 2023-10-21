import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  movieData : any [] = [];
  selected: any;

  constructor() {
    this.getAllMovies();
  }

  getAllMovies() : any[] {
    if (this.movieData.length == 0) {
      this.movieData[0] = rise_skywalker;
      this.movieData[1] = cats;   
      this.movieData[2] = jumanji;
      this.movieData[3] = frozen2;
    }
    return this.movieData;
  }

  getMovieBySlug(slug: any) {
    return this.movieData.filter((movie) => {
      return movie.slug === slug;
    })
  }
}

export interface Movie {
    title: string | null;
    slug: string | null;
    image: string | null;
    releaseDate: string | null;
    synopsis: string | null;
    tktsAvailable : number;  
}

// movie data using from an api.
const rise_skywalker : Movie = {
  title : 'STAR WARS: The Rise of Skywalker',
  slug :  'star-wars-the-rise-of-skywalker',
  image : 'https://i.ebayimg.com/images/g/qNEAAOSwetdi-9Sg/s-l1200.jpg',
  releaseDate : '12/19/2019',
  synopsis: 'Following a threat of revenge by the resurrected Emperor Palpatine, Kylo Ren obtains a Sith wayfinder that leads to the planet Exegol. There, he finds a physically impaired Palpatine, who reveals that he created Snoke to rule the First Order and lure Kylo to the dark side. Palpatine unveils the Final Order—a massive armada of Sith Star Destroyers—and orders Kylo to find and kill Rey, who is continuing her Jedi training under Resistance leader Leia Organa. Poe Dameron and Finn deliver intelligence from a spy in the First Order that Palpatine is on Exegol; Rey reads in Luke Skywalker\'s notes that a Sith wayfinder can lead them there. Rey, Finn, Poe, Chewbacca, BB-8, and C-3PO depart in the Millennium Falcon to Pasaana, to lead them to a wayfinder.',
  tktsAvailable : 1
}

const cats : Movie = {
  title : 'CATS: The Movie',
  slug :  'cats-the-movie',
  image : 'https://i.ebayimg.com/images/g/pNUAAOSwKO9jDKeP/s-l1600.jpg',
  releaseDate : '12/19/2019',
  synopsis: 'Following a threat of revenge by the resurrected Emperor Palpatine, Kylo Ren obtains a Sith wayfinder that leads to the planet Exegol. There, he finds a physically impaired Palpatine, who reveals that he created Snoke to rule the First Order and lure Kylo to the dark side. Palpatine unveils the Final Order—a massive armada of Sith Star Destroyers—and orders Kylo to find and kill Rey, who is continuing her Jedi training under Resistance leader Leia Organa. Poe Dameron and Finn deliver intelligence from a spy in the First Order that Palpatine is on Exegol; Rey reads in Luke Skywalker\'s notes that a Sith wayfinder can lead them there. Rey, Finn, Poe, Chewbacca, BB-8, and C-3PO depart in the Millennium Falcon to Pasaana, to find a clue that can lead them to a wayfinder',
  tktsAvailable : 1
}

const jumanji : Movie = {
  title : 'JUMANJI: The Next Level',
  slug :  'jumanji-the-next-level',
  image : 'https://m.media-amazon.com/images/I/71AZ4sIFkpL._AC_SL1259_.jpg',
  releaseDate : '12/19/2019',
  synopsis: 'Following a threat of revenge by the resurrected Emperor Palpatine, Kylo Ren obtains a Sith wayfinder that leads to the planet Exegol. There, he finds a physically impaired Palpatine, who reveals that he created Snoke to rule the First Order and lure Kylo to the dark side. Palpatine unveils the Final Order—a massive armada of Sith Star Destroyers—and orders Kylo to find and kill Rey, who is continuing her Jedi training under Resistance leader Leia Organa. Poe Dameron and Finn deliver intelligence from a spy in the First Order that Palpatine is on Exegol; Rey reads in Luke Skywalker\'s notes that a Sith wayfinder can lead them there. Rey, Finn, Poe, Chewbacca, BB-8, and C-3PO depart in the Millennium Falcon to Pasaana, to find a clue that can lead them to a wayfinder',
  tktsAvailable : 1
}

const frozen2 : Movie = {
  title : 'Frozen 2',
  slug :  'frozen-2',
  image : 'https://m.media-amazon.com/images/I/714arK1ZtCL._AC_SL1024_.jpg',
  releaseDate : '12/19/2019',
  synopsis: 'Following a threat of revenge by the resurrected Emperor Palpatine, Kylo Ren obtains a Sith wayfinder that leads to the planet Exegol. There, he finds a physically impaired Palpatine, who reveals that he created Snoke to rule the First Order and lure Kylo to the dark side. Palpatine unveils the Final Order—a massive armada of Sith Star Destroyers—and orders Kylo to find and kill Rey, who is continuing her Jedi training under Resistance leader Leia Organa. Poe Dameron and Finn deliver intelligence from a spy in the First Order that Palpatine is on Exegol; Rey reads in Luke Skywalker\'s notes that a Sith wayfinder can lead them there. Rey, Finn, Poe, Chewbacca, BB-8, and C-3PO depart in the Millennium Falcon to Pasaana, to find a clue that can lead them to a wayfinder',
  tktsAvailable : 1
}
