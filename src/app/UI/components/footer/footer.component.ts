import { Component } from '@angular/core';
import { ResponsiveService } from '../../core/services/responsive.service';
import { Observable, combineLatest, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  constructor(public responsiveService: ResponsiveService) {}
}
