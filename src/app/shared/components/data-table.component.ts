import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgFor],
  template: `<div class='card'><table><thead><tr><th *ngFor='let col of columns'>{{ col }}</th></tr></thead><tbody><tr *ngFor='let row of rows || []'><td *ngFor='let col of columns'>{{ row[col] }}</td></tr></tbody></table></div>`,
  styles: [`table{width:100%;border-collapse:collapse}th,td{padding:.5rem;border-bottom:1px solid #eee;text-align:left}`]
})
export class DataTableComponent {
  @Input({ required: true }) columns: string[] = [];
  @Input({ required: true }) rows: any[] | null = null;
}
