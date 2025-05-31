import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export class GlobalError {
  static globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    res.status(err?.statusCode || 500).json({
      error: {
        message: err?.message || "Internal Error Server",
      },
    });
  };
}
