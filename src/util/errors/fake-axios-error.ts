export class FakeAxiosError extends Error {

    constructor(public response: object) {
        super();
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}