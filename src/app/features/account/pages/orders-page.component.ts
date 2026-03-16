import { Component, inject } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { DataTableComponent } from '../../../shared/components/data-table.component';
import { OrdersService } from '../../../core/services/domain-services';

@Component({ standalone: true, imports: [DataTableComponent, AsyncPipe], template: `<h1 class='page-title'>Meus pedidos</h1><app-data-table [columns]='columns' [rows]='rows$ | async'/>` })
export class OrdersPageComponent {
  private orders = inject(OrdersService);
  columns = ['id', 'status', 'paymentStatus', 'total'];
  rows$ = this.orders.history({ page: 1, pageSize: 20 }).pipe(map((res) => res!.items as unknown as Record<string, unknown>[]), startWith([] as Record<string, unknown>[]));
}
