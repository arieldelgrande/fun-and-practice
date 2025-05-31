import express, { Express, Router } from "express";
import { ServerProps } from "../types";

export class Server {
  private readonly app: Express = express();
  private readonly port: number;
  private readonly router: Router;

  constructor({ port, router }: ServerProps) {
    this.port = port;
    this.router = router;
  }

  public start() {
    this.app.use(express.urlencoded({ extended: true }));
  }
}
