import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Tmdb } from '../interfaces/tmdb';

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styleUrls: ['./tmdb.component.css']
})
export class TmdbComponent implements OnInit {

  movies = [];

  constructor(private movieService: MoviesService) { }
 
  ngOnInit() {
    this.movies = [];
    // this.movies = this.movieService.getMovies();
  }

}
