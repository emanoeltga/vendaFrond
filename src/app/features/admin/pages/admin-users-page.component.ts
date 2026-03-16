import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { DataTableComponent } from '../../../shared/components/data-table.component';
import { UsersService } from '../../../core/services/domain-services';

@Component({ standalone: true, imports: [DataTableComponent, AsyncPipe], template: `<h1 class='page-title'>Admin Usuários</h1><app-data-table [columns]='columns' [rows]='rows$ | async ?? []'/>` })
export class AdminUsersPageComponent {
  private service = inject(UsersService);
  columns = ['id', 'name', 'email', 'active'];
  rows$ = this.service.list({ page: 1, pageSize: 20 }).pipe(map((res) => res.items as unknown as Record<string, unknown>[]));
}
