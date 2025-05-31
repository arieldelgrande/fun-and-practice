import { Request, Response } from "express";
import { CustomErrors, GetUsers, UserRepository } from "../../domain";

export class UserController {
  constructor(private readonly userRespository: UserRepository) {}

  private handleErrors(err: any, resp: Response) {
    if (err instanceof CustomErrors) {
      resp.status(err.statusCode).send(err.message);
      return;
    }

    console.error(err);
    throw CustomErrors.InternalErrorServer("Please Check Logs");
  }

  public getUser = (req: Request, resp: Response) => {
    const pagination = req.body;

    new GetUsers(this.userRespository)
      .execute(pagination)
      .then((data) => resp.status(200).send(data))
      .catch((err) => this.handleErrors(err, resp));
  };
}
