import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UserGateway } from 'src/app/domain/models/user/gateway/user-gateway';
import { UsersApiService } from 'src/app/infrastructure/driven-adapters/users-api/users-api.service';
import { HttpClientModule } from '@angular/common/http';
import { GetUsersUseCase } from 'src/app/application/users/get-users-use-case';
import { SharedModule } from '../../shared/shared.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetUsersUseCase,
    {
      provide: UserGateway,
      useClass: UsersApiService
    }
  ]
})
export class UsersModule { }
