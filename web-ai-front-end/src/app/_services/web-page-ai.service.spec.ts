import { TestBed } from '@angular/core/testing';

import { WebPageAiService } from './web-page-ai.service';

describe('WebPageAiService', () => {
  let service: WebPageAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebPageAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
