import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertComponent } from './albert.component';

describe('AlbertComponent', () => {
  let component: AlbertComponent;
  let fixture: ComponentFixture<AlbertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
