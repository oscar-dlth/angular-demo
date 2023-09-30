import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../modules/core/services/responsive.service';
import { ThemeService } from '../../modules/core/services/theme.service';

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
