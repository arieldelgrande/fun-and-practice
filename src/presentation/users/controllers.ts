import { Request, Response } from "express";
import { GetUsers, UserRepository } from "../../domain";

export class UserController {
  constructor(private readonly userRespository: UserRepository) {}

  private handleErrors(err: any, resp: Response) {
    // if (err instanceof CustomErrors) throw err;
  }

  public getUser = (req: Request, resp: Response) => {
    const pagination = req.body.pagination;

    new GetUsers(this.userRespository)
      .execute(pagination)
      .then((data) => resp.status(200).send(data))
      .catch((err) => this.handleErrors(err, resp));
  };
}
