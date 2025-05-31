import express, { Express, Router } from "express";
import cors from "cors";
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
    this.app.use(express.json());
    this.app.use(cors());

    this.app.use(this.router);

    this.app.listen(this.port, () => {
      console.log(`Listening on http://localhost:3000`);
    });
  }
}
