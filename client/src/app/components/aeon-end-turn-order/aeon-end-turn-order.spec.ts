import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeonEndTurnOrder } from './aeon-end-turn-order';

describe('AeonEndTurnOrder', () => {
  let component: AeonEndTurnOrder;
  let fixture: ComponentFixture<AeonEndTurnOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeonEndTurnOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeonEndTurnOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
