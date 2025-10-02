import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboRally } from './robo-rally';

describe('RobotRally', () => {
  let component: RoboRally;
  let fixture: ComponentFixture<RoboRally>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboRally]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboRally);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
