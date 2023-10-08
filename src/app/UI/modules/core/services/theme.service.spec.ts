import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { StoreModule } from '@ngrx/store';
import { themeReducer } from '../state/reducers/theme-reducer';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot( themeReducer )
      ]
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
