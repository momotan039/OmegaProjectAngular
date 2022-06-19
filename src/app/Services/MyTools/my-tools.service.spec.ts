import { TestBed } from '@angular/core/testing';

import { MyToolsService } from './my-tools.service';

describe('MyToolsService', () => {
  let service: MyToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
