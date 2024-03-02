import { Component } from '@angular/core';
import { FooterFacadeService } from './facade/footer-facade.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  constructor(public footerFacade: FooterFacadeService) {}

  public isNotDesktop$(): Observable<Boolean>{
    return this.footerFacade.isNotDesktop$().pipe(map(isNotDesktop => isNotDesktop));
  }
}
