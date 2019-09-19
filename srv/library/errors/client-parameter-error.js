export class ClientError {
    constructor(code, item = null) {
        this.code = code;
        this.item = item;
    }
}

export default class ClientErrorResponse {
    constructor(errors) {
        this.errors = errors;
    }
}
