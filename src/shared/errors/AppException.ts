export class AppException {
  public readonly body: object
  public readonly statusCode: number

  constructor(data: { body: object, statusCode: number }) {
    Object.assign(this, data)
  }
}