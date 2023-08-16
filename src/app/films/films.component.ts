import { Component, Input } from '@angular/core';
import { Film } from '../models/film-model';
import { FilmService } from '../film-service.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @Input()
  film!: Film;
  likedFilms: Film[] = [];
  constructor(protected filmService: FilmService) {
    console.log(this.film)
  }

  addToLikes(film: Film) {
  this.likedFilms.push(film)
  }
}
