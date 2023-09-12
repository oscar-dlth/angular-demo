import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationStateService {

  private sideNavigationExpandedWidth =  250;
  private sideNavigationCollapsedWith = 10;
  private isSideNavigationBarCollapsedSource: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  private sideNavigationBarWithSource: BehaviorSubject<number> = new BehaviorSubject<number>(250);

  constructor() { }

  get isSideNavigationBarCollapsed$(){
    return this.isSideNavigationBarCollapsedSource.asObservable();
  }

  get sideNavigationBarWith$(){
    return this.sideNavigationBarWithSource.asObservable();
  }

  public toggleSideNavigationCollapsedState(){
    const newIsCollapsed = !this.isSideNavigationBarCollapsedSource.value;
    this.isSideNavigationBarCollapsedSource.next(newIsCollapsed);

    let newValueWidth = this.sideNavigationCollapsedWith;

    if(!newIsCollapsed){
      newValueWidth = this.sideNavigationExpandedWidth;
    }

    this.sideNavigationBarWithSource.next(newValueWidth);
  }
}
