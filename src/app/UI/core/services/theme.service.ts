import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private isDarkThemeSource = new BehaviorSubject<boolean>(true);

  constructor() { }

  get isDarkTheme$(){
    return this.isDarkThemeSource.asObservable();
  }

  updateTheme(isDarkTheme: boolean){
    this.isDarkThemeSource.next(isDarkTheme);
  }
}
