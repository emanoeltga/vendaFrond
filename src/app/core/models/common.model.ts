export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
}

export interface ApiFilter {
  term?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}
