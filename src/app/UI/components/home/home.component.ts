import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../modules/core/services/responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit(): void {

  }
}
