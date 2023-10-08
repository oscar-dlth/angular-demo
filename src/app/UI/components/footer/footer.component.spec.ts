import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { ResponsiveService } from '../../modules/core/services/responsive.service';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let responsiveService = jasmine.createSpyObj('ResponsiveService', ['isTabletOrMobile$']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        CommonModule
      ],
      declarations: [FooterComponent],
      providers: [
        ResponsiveService,
      ]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    responsiveService.isTabletOrMobile$.and.returnValue(of(false));
    expect(component).toBeTruthy();
  });
});
