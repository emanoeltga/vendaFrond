import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, startWith, switchMap } from 'rxjs/operators';
import { CatalogService } from '../../../core/services/domain-services';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, NgFor, CurrencyPipe, RouterLink],
  template: `<h1 class='page-title'>Catálogo</h1><form class='card' [formGroup]='filterForm'><input placeholder='buscar produtos' formControlName='term' /></form><section class='grid' style='grid-template-columns:repeat(auto-fill,minmax(220px,1fr));margin-top:1rem'><article class='card' *ngFor='let p of products$ | async'><h3>{{p.name}}</h3><p>{{p.variants[0]?.price | currency:'BRL'}}</p><a [routerLink]="['/produto', p.id]">Ver produto</a></article></section>`
})
export class CatalogPageComponent {
  private service = inject(CatalogService);
  filterForm = new FormGroup({ term: new FormControl('') });
  products$ = this.filterForm.valueChanges.pipe(
    startWith(this.filterForm.value),
    switchMap((value) => this.service.listProducts({ term: value.term ?? '', page: 1, pageSize: 12 })),
    map((res) => res.items)
  );
}
