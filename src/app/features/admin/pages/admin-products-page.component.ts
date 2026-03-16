import { Component, inject } from '@angular/core';
import { DataTableComponent } from '../../../shared/components/data-table.component';
import { AsyncPipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';
import { AdminProductsService } from '../../../core/services/domain-services';

@Component({ standalone: true, imports: [DataTableComponent, AsyncPipe], template: `<h1 class='page-title'>Admin Produtos</h1><app-data-table [columns]='columns' [rows]='rows$ | async'/>` })
export class AdminProductsPageComponent {
  private service = inject(AdminProductsService);
  columns = ['id', 'name', 'active'];
  rows$ = this.service.list({ page: 1, pageSize: 20 }).pipe(map((res) => res!.items as unknown as Record<string, unknown>[]), startWith([] as Record<string, unknown>[]));
}
