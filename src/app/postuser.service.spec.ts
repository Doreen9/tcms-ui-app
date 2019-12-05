import { TestBed } from '@angular/core/testing';

import { PostuserService } from './postuser.service';

describe('PostuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostuserService = TestBed.get(PostuserService);
    expect(service).toBeTruthy();
  });
});
