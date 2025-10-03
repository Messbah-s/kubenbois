import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameModal } from './create-game-modal.component';

describe('CreateGameDialog', () => {
  let component: CreateGameModal;
  let fixture: ComponentFixture<CreateGameModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGameModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGameModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
