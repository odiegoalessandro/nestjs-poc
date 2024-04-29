export interface Paginated<T = unknown> {
  page: number;
  totalPerPage: number;
  totalPages: number;
  totalItems: number;
  items: T[];
}

export type PaginatedOutput<T = unknown> = Promise<Paginated<T>>;
export type NoPaginatedOutput<T = unknown> = Promise<T>;

export interface PaginatedControllerOutput<T = unknown> {
  data: Paginated<T> | null;
  error: any | null;
}

export interface NoPaginatedControllerOutput<T = unknown> {
  data: T | null;
  error: any | any;
}
