import { Router } from "express";
import { UserRouter } from "./users/router";
import { UserMiddlewares } from "./middlewares/user.middlewares";

export class AppRouter {
  static get router() {
    const router = Router();
    router.use(UserMiddlewares.pagination);
    router.use("/users", UserRouter.router);

    return router;
  }
}
