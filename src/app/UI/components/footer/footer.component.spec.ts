import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { FooterFacadeService } from './facade/footer-facade.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let footerFacadeServiceSpy = jasmine.createSpyObj('FooterFacadeService', ['isNotDesktop$']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        CommonModule
      ],
      declarations: [
        FooterComponent
      ],
      providers: [
        {
          provide: FooterFacadeService,
          useValue: footerFacadeServiceSpy
        }
      ]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    footerFacadeServiceSpy.isNotDesktop$.and.returnValue(of(false));
    expect(component).toBeTruthy();
  });
});
