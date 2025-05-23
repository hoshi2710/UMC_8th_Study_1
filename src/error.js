export class DuplicateUserEmailError extends Error {
  errorCode = "U001";
  statusCode = 409;
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
export class UserNotFoundError extends Error {
  errorCode = "U002";
  statusCode = 404;

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
export class StoreNotFoundError extends Error {
  errorCode = "S001";
  statusCode = 404;
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class DuplicateStoreNameError extends Error {
  errorCode = "S002";
  statusCode = 409;
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class FoodTypeNotFoundError extends Error {
  errorCode = "F001";
  statusCode = 404;
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class LocationNotFoundError extends Error {
  errorCode = "L001";
  statusCode = 404;
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

export class MissionNotFoundError extends Error {
  errorCode = "M001";
  statusCode = 404;
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
export class MissionAlreadyCompletedError extends Error {
  errorCode = "M002";
  statusCode = 409;
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
export class WrongVerificationCodeError extends Error {
  errorCode = "M003";
  statusCode = 401;
  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}