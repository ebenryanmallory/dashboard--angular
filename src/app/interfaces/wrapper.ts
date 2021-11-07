import { Tmdb } from './tmdb'

export interface Wrapper {
    page: number,
    results: Array<Tmdb>
  }