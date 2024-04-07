import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainLayoutFacadeService } from './facade/main-layout-facade.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {

  constructor(public mainLayoutFacadeService: MainLayoutFacadeService){}

  ngOnInit(): void {

  }
}
