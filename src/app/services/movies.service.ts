import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TMDB } from '../interfaces/movie';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})

export class MoviesService {

  constructor(private http: HttpClient) {}

  getMovies(): Observable<TMDB> {
    return this.http.get<TMDB>(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${environment.TMDB_API_KEY}`
      )
  }
}
