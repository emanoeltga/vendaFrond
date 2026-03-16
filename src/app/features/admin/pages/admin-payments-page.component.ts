import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AdminPaymentsService } from '../../../core/services/domain-services';

@Component({ standalone: true, imports: [AsyncPipe, JsonPipe], template: `<h1 class='page-title'>Admin Pagamentos</h1><pre class='card'>{{ payments$ | async | json }}</pre>` })
export class AdminPaymentsPageComponent { private service = inject(AdminPaymentsService); payments$ = this.service.list({ page: 1, pageSize: 20 }); }
