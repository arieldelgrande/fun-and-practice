import { Request, Response } from "express";

export class UserController {
  public getUser = (req: Request, resp: Response) => {
    resp.status(200).json({
      ok: true,
      message: "Hello from user controller",
    });
  };
}
