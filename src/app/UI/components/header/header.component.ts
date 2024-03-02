import { Component, OnInit } from '@angular/core';
import { HeaderFacadeService } from './facade/header-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor( public headerFacadeService: HeaderFacadeService) { }

  ngOnInit(): void {
  }

  public getAlignClass$(): Observable<string>{
    return this.headerFacadeService.getAlignClass$();
  }

  public canDisplayUsersLink$(){
    return this.headerFacadeService.canDisplayUsersLink$();
  }

  public updateTheme(isDarkTheme: boolean){
    this.headerFacadeService.updateTheme(isDarkTheme)
  }

  public isDarkTheme$(){
    return this.headerFacadeService.isDarkTheme$();
  }
}
