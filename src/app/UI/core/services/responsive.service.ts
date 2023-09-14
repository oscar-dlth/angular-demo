import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponsiveService {

  constructor(private breakpointObserver: BreakpointObserver) {}

  public get isTablet$() {
    return this.breakpointObserver.observe([Breakpoints.Small]).pipe(map((state: BreakpointState) => state.matches));
  }

  public get isMobile$() {
    return this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(map((state: BreakpointState) => state.matches));
  }

  public get isDesktop$() {
    return this.breakpointObserver.observe([Breakpoints.Medium]).pipe(map((state: BreakpointState) => state.matches));
  }

  public get isLarge$() {
    return this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).pipe(map((state: BreakpointState) => !state.matches));
  }
}
