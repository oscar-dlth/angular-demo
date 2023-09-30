import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponsiveService {

  constructor(private breakpointObserver: BreakpointObserver) {}

  public get isTablet$(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.Small]).pipe(map((state: BreakpointState) => state.matches));
  }

  public get isMobile$(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(map((state: BreakpointState) => state.matches));
  }

  public get isDesktop$(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.Medium]).pipe(map((state: BreakpointState) => state.matches));
  }

  public get isLarge$(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).pipe(map((state: BreakpointState) => !state.matches));
  }

  public get isTabletOrMobile$(): Observable<boolean> {
    return combineLatest([this.isTablet$, this.isMobile$]).pipe(map(result => result.some(value => value)));
  }
}
