export interface PaginationProps {
  limit: number;
  offset: number;
  order: Order;
}

enum Order {
  ASC = "ASC",
  DESC = "DESC",
}
