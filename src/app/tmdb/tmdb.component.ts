import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movie'

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styleUrls: ['./tmdb.component.css']
})

export class TmdbComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MoviesService) { }
 
  ngOnInit() {
    this.movieService.getMovies()
    .subscribe(tmdb => {
      this.movies = tmdb['results'].slice(0, 6) || [];
    })
  }

}
