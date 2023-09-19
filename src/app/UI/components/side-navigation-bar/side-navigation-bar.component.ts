import { Component, OnInit } from '@angular/core';
import { SideNavigationFacadeService } from './facade/side-navigation-facade.service';
import { ResponsiveService } from '../../core/services/responsive.service';

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.sass']
})
export class SideNavigationBarComponent implements OnInit {
  constructor(public sideNavigationFacade: SideNavigationFacadeService, public resposiveService: ResponsiveService) { }

  ngOnInit(): void {
  }

  get isCollapsed$() {
    return this.sideNavigationFacade.isSideNavigationBarCollapsed$;
  }
}
