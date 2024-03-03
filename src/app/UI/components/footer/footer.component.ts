import { Component } from '@angular/core';
import { FooterFacadeService } from './facade/footer-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  constructor(public footerFacadeService: FooterFacadeService) {}

  public isNotDesktop$(): Observable<Boolean>{
    return this.footerFacadeService.isNotDesktop$();
  }
}
