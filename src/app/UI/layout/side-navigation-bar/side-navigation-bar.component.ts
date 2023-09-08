import { Component, OnInit } from '@angular/core';
import { LayoutFacadeService } from '../facade/layout-facade.service';

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.sass']
})
export class SideNavigationBarComponent implements OnInit {
  constructor(public layoutFacade: LayoutFacadeService) { }

  ngOnInit(): void {
  }
}
