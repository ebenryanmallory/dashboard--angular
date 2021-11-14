import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movie'

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styleUrls: ['./tmdb.component.css']
})

export class TmdbComponent implements OnInit {

  baseURL = 'https://www.themoviedb.org/t/p/w440_and_h660_face/';
  movies: Movie[] = [];

  getFullPath = (posterpath: string) => {
    return `background-image: url(${this.baseURL + posterpath});`;
  }
  constructor(private movieService: MoviesService) { }
 
  ngOnInit() {
    this.movieService.getMovies()
    .subscribe(tmdb => {
      this.movies = tmdb['results'].slice(0, 6) || [];
    })
  }

}
