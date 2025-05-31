import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../../domain/dto/create-user.dto";
import { CustomErrors } from "../../domain";

export class UserMiddlewares {
  public static pagination(req: Request, resp: Response, next: NextFunction) {
    const body = req.body;
    const pagination = CreateUserDto.pagination(body);

    if (pagination instanceof CustomErrors) {
      resp.status(pagination.statusCode).send(pagination.message);
      return;
    }

    req.body = {
      ...req.body,
      ...pagination,
    };
    next();
  }
}
