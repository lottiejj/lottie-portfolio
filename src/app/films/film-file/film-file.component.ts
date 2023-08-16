import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmService } from 'src/app/film-service.service';
import { Film } from 'src/app/models/film-model';

@Component({
  selector: 'app-film-file',
  templateUrl: './film-file.component.html',
  styleUrls: ['./film-file.component.scss']
})
export class FilmFileComponent implements OnInit  {
  filmList!: Film[];
  loadingFilmList!: Array<number>;
constructor(private filmService: FilmService) {}

ngOnInit() {
  this.loadingFilmList = new Array(9).fill(0).map((n, index) => index);

 this.filmService.getFilmsFromHttp().pipe().subscribe(res => this.filmList = res);
}
}
