import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { Film } from './models/film-model';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private ROOT_URL = "http://www.omdbapi.com/?apikey=dbe93ea2&";
  constructor(private http: HttpClient) { }
  addFilm(film: Film) {
    return this.http.post(this.ROOT_URL, film);
  }

  getFilmsFromHttp() {
    return this.http.get<Film[]>(this.ROOT_URL).pipe(this.addDelay);
  }

  filmByTitle(title: string) {
    return this.http.get<any>(`${this.ROOT_URL}t=${title}`)
  }

  filmFromHttp(id: number) {
    return this.http.get<Film>(`${this.ROOT_URL}/${id}`);
  }
  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }
}
