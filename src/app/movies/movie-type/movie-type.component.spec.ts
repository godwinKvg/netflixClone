import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTypeComponent } from './movie-type.component';

describe('MovieTypeComponent', () => {
  let component: MovieTypeComponent;
  let fixture: ComponentFixture<MovieTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
