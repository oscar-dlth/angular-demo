import { Component, OnInit } from '@angular/core';
import { HomeFacadeService } from './facade/home-facade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private homeFacadeService: HomeFacadeService) { }

  ngOnInit(): void {

  }
}
