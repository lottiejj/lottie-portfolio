import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFileComponent } from './film-file.component';

describe('FilmFileComponent', () => {
  let component: FilmFileComponent;
  let fixture: ComponentFixture<FilmFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmFileComponent]
    });
    fixture = TestBed.createComponent(FilmFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
