export interface TableType {
  last_updated: string;
  case_id: number;
  phone: string;
  dni: string;
  group: string;
  order: string;
  case_duration: string;
  status: string;
}

export interface TablePagination {
  current: number;
  pageSize: number;
  total: number;
}