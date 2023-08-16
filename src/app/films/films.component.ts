import { Component, Input } from '@angular/core';
import { Film } from '../models/film-model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @Input()
  film!: Film;
  constructor() {
    console.log(this.film)
  }
}
