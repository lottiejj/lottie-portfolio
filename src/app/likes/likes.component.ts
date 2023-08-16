import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film-service.service';
import { Film } from '../models/film-model';
import { FilmsComponent } from '../films/films.component';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
 
constructor(filmService: FilmService) {
}

ngOnInit() {
}
}
