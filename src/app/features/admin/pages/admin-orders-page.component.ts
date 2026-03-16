import { Component, inject } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { DataTableComponent } from '../../../shared/components/data-table.component';
import { AdminOrdersService } from '../../../core/services/domain-services';

@Component({ standalone: true, imports: [DataTableComponent, AsyncPipe], template: `<h1 class='page-title'>Admin Pedidos</h1><app-data-table [columns]='columns' [rows]='rows$ | async'/>` })
export class AdminOrdersPageComponent {
  private service = inject(AdminOrdersService);
  columns = ['id', 'status', 'paymentStatus', 'total'];
  rows$ = this.service.list({ page: 1, pageSize: 20 }).pipe(map((res) => res!.items as unknown as Record<string, unknown>[]), startWith([] as Record<string, unknown>[]));
}
