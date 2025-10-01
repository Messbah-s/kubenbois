import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormInput } from './custom-form-input';

describe('CustomFormInput', () => {
  let component: CustomFormInput;
  let fixture: ComponentFixture<CustomFormInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFormInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFormInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
