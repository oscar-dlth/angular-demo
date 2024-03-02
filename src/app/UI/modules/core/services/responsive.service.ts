import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Distribution } from 'src/app/UI/common/enums';

@Injectable()
export class ResponsiveService {

  constructor(private breakpointObserver: BreakpointObserver) {}

  public get currentDistribution(): Observable<Distribution>{
    return combineLatest([
      this.isDesktop$,
      this.isTablet$,
      this.isMobile$
    ]).pipe(
      map(([isDesktop, isTablet, isMobile]) => {
        if (isDesktop) {
          return Distribution.Desktop;
        }

        if (isTablet) {
          return Distribution.Tablet;
        }

        if(isMobile){
          return Distribution.Mobile
        }

        return Distribution.Desktop;
      })
    );
  }

  private get isTablet$(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.Small]).pipe(map((state: BreakpointState) => {
       return state.matches
    }));
  }

  private get isMobile$(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(map((state: BreakpointState) => {
      return state.matches;
    }));
  }

  private get isDesktop$(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.Medium]).pipe(map((state: BreakpointState) => {
      return state.matches;
    }));
  }
}
