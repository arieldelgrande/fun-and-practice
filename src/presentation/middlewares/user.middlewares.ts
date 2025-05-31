import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../../domain/dto/create-user.dto";
import { CustomErrors } from "../../domain";

export class UserMiddlewares {
  public static pagination(req: Request, resp: Response, next: NextFunction) {
    const body = req.body;
    try {
      const pagination = new CreateUserDto(body).props();

      // console.log(pagination);
    } catch (error) {
      next(error);
    }
    // if (pagination instanceof CustomErrors) {
    //   resp.status(pagination.statusCode).send(pagination.message);
    //   return;
    // }
    // console.log(pagination.offset, "paginations");

    // req.body = {
    //   ...req.body,
    //   ...pagination,
    // };
    next();
  }
}
