export class EmptyStackError extends Error {
    constructor() {
        super('Stack is empty');
    }
}
