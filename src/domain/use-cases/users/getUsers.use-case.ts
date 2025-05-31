import { PaginationProps } from "../../../types";
import { Users } from "../../../types/user.types";
import { UserRepository } from "../../repository/users.repository";

interface GetUsersInt {
  execute(pagination: PaginationProps): Promise<Users>;
}

export class GetUsers implements GetUsersInt {
  constructor(private readonly userRepository: UserRepository) {}
  execute(pagination: PaginationProps): Promise<Users> {
    return this.userRepository.getUser(pagination);
  }
}
