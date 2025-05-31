import { PaginationProps } from "../../types";
import { UserEntity } from "../entity";

export abstract class UserDataSource {
  abstract getUser(pagination: PaginationProps): Promise<UserEntity>;
}
