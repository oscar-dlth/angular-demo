import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationStateService {

  private isCollapsedSource: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  constructor() { }

  public get isCollapsed$(){
    return this.isCollapsedSource.asObservable();
  }

  public get isCollapsed(){
    return this.isCollapsedSource.value;
  }

  public expandSideNavigation(){
    this.isCollapsedSource.next(false);
  }

  public collapseSideNavigation(){
    this.isCollapsedSource.next(true);
  }
}
