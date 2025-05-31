import { UserDataSource } from "../../domain";
import { PaginationProps } from "../../types";
import { Users } from "../../types/user.types";

export class UserDataSourceImp implements UserDataSource {
  async getUser(pagination: PaginationProps): Promise<Users> {
    //Todo: here connect to data base
    console.log(pagination);

    const test = await new Promise((res, rej) => res("ariel"));
    return test as Users;
  }
}
