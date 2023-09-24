import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../core/services/responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

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
  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit(): void {

  }

  get isMobile$(){
    return this.responsiveService.isMobile$;
  }

  edit(data: any){
    console.log(data);
  }

}
