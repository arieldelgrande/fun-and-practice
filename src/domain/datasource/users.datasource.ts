import { PaginationProps } from "../../types";
import { Users } from "../../types/user.types";

export abstract class UserDataSource {
  abstract getUser(pagination: PaginationProps): Promise<Users>;
}
