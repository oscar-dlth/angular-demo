import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../core/services/responsive.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  constructor(public responsiveService: ResponsiveService) { }

  ngOnInit(): void {
  }
}
