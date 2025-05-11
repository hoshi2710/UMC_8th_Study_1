export class DuplicateUserEmailError extends Error {
    errorCode = "U001";
  
    constructor(reason, data) {
      super(reason);
      this.reason = reason;
      this.data = data;
    }
  }
export class UserNotFoundError extends Error {
    errorCode = "U002";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
}
}
export class StoreNotFoundError extends Error {
    errorCode = "S001";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
      }
}

export class DuplicateStoreNameError extends Error {
    errorCode = "S002";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
      }
}

export class FoodTypeNotFoundError extends Error {
    errorCode = "F001";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
      }
}

export class LocationNotFoundError extends Error {
    errorCode = "L001";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
      }
}

export class MissionNotFoundError extends Error {
    errorCode = "M001";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
      }
}
export class MissionAlreadyCompletedError extends Error {
    errorCode = "M002";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
      }
}
export class WrongVerificationCodeError extends Error {
    errorCode = "M003";

    constructor(reason, data) {
        super(reason);
        this.reason = reason;
        this.data = data;
      }
}