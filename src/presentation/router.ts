import { Router } from "express";
import { UserRouter } from "./users/router";

export class AppRouter {
  static get router() {
    const router = Router();

    router.use("/users", UserRouter.router);

    return router;
  }
}
