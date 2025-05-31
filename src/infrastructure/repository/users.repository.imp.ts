import { UserDataSource, UserEntity, UserRepository } from "../../domain";
import { PaginationProps } from "../../types";

export class UserRepositoryImp implements UserRepository {
  constructor(private readonly userDataSource: UserDataSource) {}

  getUser(pagination: PaginationProps): Promise<UserEntity> {
    return this.userDataSource.getUser(pagination);
  }
}
