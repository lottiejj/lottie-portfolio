import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpeningComponent } from './opening/opening.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmsComponent } from './add-films/add-films.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmFileComponent } from './films/film-file/film-file.component';
import { AddFilmComponent } from './films/add-film/add-film.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpeningComponent,
    NavbarComponent,
    FilmsComponent,
    AddFilmsComponent,
    FilmFileComponent,
    AddFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
