class Result<T> {

    private readonly _value: T | undefined;
    private readonly _isSuccess: boolean;
    private readonly _error: Error;

    private constructor(isSuccess: boolean, error?: Error, value?: T) {
        this._value = value;
        this._isSuccess = isSuccess;
        this._error = error ? error : new Error();
    }

    public static success<U>(value: U): Result<U> {
        return new Result<U>(true, undefined, value);
    }

    public static failed<U>(error: Error): Result<U> {
        return new Result<U>(false,error);
    }

    get value(): T | undefined {
        return this._value;
    }


    get isSuccess(): boolean {
        return this._isSuccess;
    }

    get error(): Error {
        return this._error;
    }
}

export default Result;