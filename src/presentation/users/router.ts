import { Router } from "express";
import { UserController } from "./controllers";
import { UserDataSourceImp } from "../../infrastructure/datasource/users.datasource.imp";
import { UserRepositoryImp } from "../../infrastructure/repository/users.repository.imp";

export class UserRouter {
  static get router() {
    const router = Router();

    const userDataSource = new UserDataSourceImp();
    const userRepository = new UserRepositoryImp(userDataSource);
    const userController = new UserController(userRepository);

    router.get("/", userController.getUser);

    return router;
  }
}
