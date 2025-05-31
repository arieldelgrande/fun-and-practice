import { UserDataSource, UserRepository } from "../../domain";
import { PaginationProps } from "../../types";
import { Users } from "../../types/user.types";

export class UserRepositoryImp implements UserRepository {
  constructor(private readonly userDataSource: UserDataSource) {}

  getUser(pagination: PaginationProps): Promise<Users> {
    return this.userDataSource.getUser(pagination);
  }
}
