import { Component, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/application/users/get-users-service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  constructor(private getUsersService: GetUsersService) { }

  users : any[] =  [];
  ngOnInit(): void {
    this.getUsersService.getAllUsers().subscribe((result)=>{
      console.log(result);
      this.users = result.rows;
    },(error)=>{
      console.log(error)
    })
  }

}
