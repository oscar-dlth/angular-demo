import { Component } from '@angular/core';
import { ResponsiveService } from '../../modules/core/services/responsive.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  constructor(public responsiveService: ResponsiveService) {}
}
