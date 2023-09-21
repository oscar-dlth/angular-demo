import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { ResponsiveService } from '../../core/services/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public themeService: ThemeService, public resposiveService: ResponsiveService) { }

  ngOnInit(): void {
  }
}
