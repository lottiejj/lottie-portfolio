import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film-model';
import { FilmService } from '../film-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  film!: Film;
filmTitle: string = '';
constructor(private filmService: FilmService) {

}

ngOnInit(): void {
  this.filmService.getFilmsFromHttp().pipe().subscribe(res => console.log(res))
}

onSearch($event: any) {
console.log($event)
this.filmTitle = $event;

}

onClickSearch() {
  this.filmService.filmByTitle(this.filmTitle).pipe().subscribe(res => {
    this.film = {id: res.imdbID,
    name: res.Title,
    genre: res.Genre,
    image: res.Poster,
  releaseYear: res.Year,
plot: res.Plot}
console.log(res)
  })
}
}
