import { Injectable } from '@angular/core';
import { Tmdb } from '../interfaces/tmdb';
import { Wrapper } from '../interfaces/wrapper';
import { MOVIES } from '../mocks/movies.mock';
import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })

export class MoviesService {

  constructor() {} // private http: HttpClient) {}

  /* getMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Array<Wrapper>> (
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${environment.TMDB_API_KEY}`
      )
      .do(response => console.log(response))
      .pipe(map((movies) => movies || [] ));
  } */
  getMovies(): Wrapper { return MOVIES }
}
