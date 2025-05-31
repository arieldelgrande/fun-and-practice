import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { CustomErrors } from "./custom-errors.errors";

export class GlobalError {
  static globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    console.log(err.message);

    // res.status(err?.statusCode || 500).json({
    //   error: {
    //     message: err?.message || "Internal Error Server",
    //   },
    // });
  };
}
