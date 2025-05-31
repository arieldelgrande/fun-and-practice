import { Order } from "../../types";
import { CustomErrors } from "../errors/custom-errors.errors";

export class CreateUserDto {
  public static pagination(data: any) {
    if (typeof data.limit !== "number") {
      throw new Error("limit must be a number");
    }
    if (typeof data.offset !== "number") {
      throw new Error("offset must be a number");
    }
    if (!Object.values(Order).includes(data.order ?? Order.ASC)) {
      return CustomErrors.BadRequest("order must be ASC or DESC");
    }

    return {
      order: data.order || Order.ASC,
      limit: data.limit || 10,
      offset: data.offset || 0,
    };
  }
}
