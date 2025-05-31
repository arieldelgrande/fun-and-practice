export class CustomErrors extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
  ) {
    super();
  }

  static BadRequest(message: string) {
    return new CustomErrors(400, message);
  }

  static InternalErrorServer(message: string) {
    return new CustomErrors(500, message);
  }
}
