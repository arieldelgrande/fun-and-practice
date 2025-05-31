export interface PaginationProps {
  limit: number;
  offset: number;
  order: Order;
}

export enum Order {
  ASC = "ASC",
  DESC = "DESC",
}
