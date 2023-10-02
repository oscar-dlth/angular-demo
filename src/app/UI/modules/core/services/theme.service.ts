import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateTheme } from '../state/actions/theme-actions';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private isDarkThemeSource: Observable<boolean>;

  constructor(private store: Store<{isDarkTheme: boolean}>) {
    this.isDarkThemeSource = store.select('isDarkTheme');
  }

  get isDarkTheme$(){
    return this.isDarkThemeSource;
  }

  updateTheme(isDarkTheme: boolean){
    this.store.dispatch(updateTheme({ isDarkTheme }));
  }
}
