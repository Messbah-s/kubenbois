import { TestBed } from '@angular/core/testing';

import { AppInfoHttpService } from './app-info-http.service';

describe('AppInfoHttp', () => {
  let service: AppInfoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppInfoHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
