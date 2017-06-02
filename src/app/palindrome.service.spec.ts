import { TestBed, inject } from '@angular/core/testing';

import { PalindromeService } from './palindrome.service';

describe('PalindromeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PalindromeService]
    });
  });

  it('should be created', inject([PalindromeService], (service: PalindromeService) => {
    expect(service).toBeTruthy();
  }));
});
