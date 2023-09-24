import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../core/services/responsive.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  dummyData = [
    {
      id: '1',
      code: '123code',
      nickName: 'carin'
    },
    {
      id: '2',
      code: '456code',
      nickName: 'omar'
    }
  ];

  constructor(public responsiveService: ResponsiveService) { }

  users : any[] =  [];
  ngOnInit(): void {
  }

  get isMobile$(){
    return this.responsiveService.isMobile$;
  }

  edit(data: any){
    console.log(data);
  }

}
