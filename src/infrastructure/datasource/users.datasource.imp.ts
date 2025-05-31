import { UserDataSource, UserEntity } from "../../domain";
import { PaginationProps } from "../../types";

export class UserDataSourceImp implements UserDataSource {
  getUser(pagination: PaginationProps): Promise<UserEntity> {
    //Todo: here connect to data base
    throw new Error("Method not implemented.");
  }
}
