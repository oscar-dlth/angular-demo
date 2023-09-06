import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.sass']
})
export class SideNavigationBarComponent implements OnInit {

  collapsed: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public collapseToggle(){
    this.collapsed =  !this.collapsed;
  }

}
