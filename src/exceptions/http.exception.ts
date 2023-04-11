export class HttpException extends Error {
    public readonly status: number;

    constructor(msg: string) {
        super(msg);

        this.status = 400;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, HttpException.prototype);
    }

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    public static isHttpException(candidate: any) : candidate is HttpException {
        return candidate instanceof HttpException;
    }
}