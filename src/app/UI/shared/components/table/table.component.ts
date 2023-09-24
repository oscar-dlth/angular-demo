import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent {

  @Input() rows: any[];
  @Input() columns: any= [];
  @Input() columnsText: any = {};

  @Input() headerCellCustomTemplates: any = {};
  @Input() dataCellCustomTemplates: any = {};
  @Input() styles: string = '';
}
