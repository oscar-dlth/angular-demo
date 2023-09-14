import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserGateway } from 'src/app/domain/models/user/gateway/user-gateway';
import { UsersApiService } from 'src/app/infrastructure/driven-adapters/users-api/users-api.service';
import { HttpClientModule } from '@angular/common/http';
import { GetUsersService } from 'src/app/application/users/get-users-service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetUsersService,
    {
      provide: UserGateway,
      useClass: UsersApiService
    }
  ]
})
export class UsersModule { }
