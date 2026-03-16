import { HttpParams } from '@angular/common/http';
import { ApiFilter } from '../models/common.model';

export abstract class ApiBaseService {
  protected toParams(filter: ApiFilter = {}): HttpParams {
    return Object.entries(filter).reduce((params, [key, value]) => {
      if (value === undefined || value === null || value === '') return params;
      return params.set(key, value.toString());
    }, new HttpParams());
  }
}
