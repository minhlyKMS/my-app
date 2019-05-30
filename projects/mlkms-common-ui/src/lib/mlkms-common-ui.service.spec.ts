import { TestBed } from '@angular/core/testing';

import { MlkmsCommonUiService } from './mlkms-common-ui.service';

describe('MlkmsCommonUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MlkmsCommonUiService = TestBed.get(MlkmsCommonUiService);
    expect(service).toBeTruthy();
  });
});
