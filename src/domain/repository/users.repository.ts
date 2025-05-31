import { PaginationProps } from "../../types";
import { UserEntity } from "../entity";

export abstract class UserRepository {
  abstract getUser(pagination: PaginationProps): Promise<UserEntity>;
}
