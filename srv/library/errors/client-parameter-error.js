export class ClientError {
    constructor(code, item = null) {
        this.code = code;
        this.item = item;
    }
}

export default class ClientParameterError extends Error {
    constructor(errors) {
        super();

        this.errors = errors;
    }
}
