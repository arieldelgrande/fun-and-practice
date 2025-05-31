import { Router } from "express";

export interface ServerProps {
  router: Router;
  port: number;
}
