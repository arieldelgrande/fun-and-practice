import { Order, PaginationProps } from "../../types";
import { CustomErrors } from "../errors/custom-errors.errors";
import { Number } from "../validations/type.validations";

export class CreateUserDto {
  @Number()
  public offset: number = 10;

  private static limit: number = 10;
  private static order: string = Order.ASC;

  constructor({ offset, limit, order }: PaginationProps) {
    this.offset = offset;
  }
  //   public static pagination(data: any) {
  //     data = {
  //       offset: this.offset,
  //       limit: this.limit,
  //       order: this.order,
  //       ...data,
  //     };

  //     if (typeof data.limit !== "number") {
  //       return CustomErrors.BadRequest("limit must be a number");
  //     }
  //     if (typeof data.offset !== "number") {
  //       throw new Error("offset must be a number");
  //     }
  //     if (!Object.values(Order).includes(data.order)) {
  //       return CustomErrors.BadRequest("order must be ASC or DESC");
  //     }

  //     return {
  //       order: data.order,
  //       limit: data.limit,
  //       offset: data.offset,
  //     };
  //   }
}
