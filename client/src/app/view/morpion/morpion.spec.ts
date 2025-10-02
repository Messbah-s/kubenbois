import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Morpion } from './morpion';

describe('Morpion', () => {
  let component: Morpion;
  let fixture: ComponentFixture<Morpion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Morpion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Morpion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
