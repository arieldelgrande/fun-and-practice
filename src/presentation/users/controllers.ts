import { Request, Response } from "express";
import { UserRepository } from "../../domain";

export class UserController {
  constructor(private readonly userRespository: UserRepository) {}

  public getUser = (req: Request, resp: Response) => {
    resp.status(200).json({
      ok: true,
      message: "Hello from user controller",
    });
  };
}
