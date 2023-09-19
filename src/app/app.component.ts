import { Component, ViewChild } from '@angular/core';
import { ThemeService } from './UI/core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public themeService: ThemeService){

  }
}
