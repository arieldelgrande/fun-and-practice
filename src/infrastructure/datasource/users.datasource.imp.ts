import { UserDataSource } from "../../domain";
import { PaginationProps } from "../../types";
import { Users } from "../../types/user.types";

export class UserDataSourceImp implements UserDataSource {
  getUser(pagination: PaginationProps): Promise<Users> {
    //Todo: here connect to data base
    throw new Error("Method not implemented.");
  }
}
