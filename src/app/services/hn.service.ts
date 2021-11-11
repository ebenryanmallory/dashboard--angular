import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HN } from '../interfaces/hn';

const base = 'https://hacker-news.firebaseio.com/v0';

@Injectable({
  providedIn: 'root',
})

export class HNService {

  constructor(private http: HttpClient) {}

  getList(): Observable<number[]> {
    return this.http.get<number[]>(
        `${base}/newstories.json?print=pretty&limitToFirst=10&orderBy=%22$key%22`
      )
  }
  getArticle(articleID:number): Observable<any> {
    return this.http.get(
        `${base}/item/${articleID}.json?print=pretty`
      )
  }
}
