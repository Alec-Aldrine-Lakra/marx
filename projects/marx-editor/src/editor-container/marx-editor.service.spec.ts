import { TestBed } from '@angular/core/testing';

import { MarxEditorService } from './marx-editor.service';

describe('MarxEditorService', () => {
  let service: MarxEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarxEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
