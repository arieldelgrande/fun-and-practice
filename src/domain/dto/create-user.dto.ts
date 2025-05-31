import { Order, PaginationProps } from "../../types";
import { Number } from "../validations/type.validations";

export class CreateUserDto {
  @Number()
  public offset: number;

  @Number()
  public limit: number;

  order: string = Order.ASC;

  constructor({ offset, limit, order }: PaginationProps) {
    this.offset = offset;
    this.limit = limit;
  }

  public props() {
    const keys: string[] = (this as any).__number_props__ || [];
    const result: Record<string, any> = {};

    for (const key of keys) {
      result[key] = (this as any)[key];
    }
    console.log(this, keys);
    return {
      offset: this.offset,
      limit: this.limit,
    };
  }
}
