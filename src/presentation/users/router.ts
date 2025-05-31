import { Router } from "express";
import { UserController } from "./controllers";

export class UserRouter {
  static get router() {
    const router = Router();

    const userController = new UserController();

    router.get("/", userController.getUser);

    return router;
  }
}
