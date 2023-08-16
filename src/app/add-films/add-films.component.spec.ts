import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmsComponent } from './add-films.component';

describe('AddFilmsComponent', () => {
  let component: AddFilmsComponent;
  let fixture: ComponentFixture<AddFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFilmsComponent]
    });
    fixture = TestBed.createComponent(AddFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
