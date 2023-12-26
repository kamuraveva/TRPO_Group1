"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger = void 0;
class MyLogger {
    constructor() {
        this.data = Math.random();
    }
    log(message, ...optionalParams) {
        console.log(message + ' ' + this.data);
    }
    error(message, ...optionalParams) { }
    warn(message, ...optionalParams) { }
    debug(message, ...optionalParams) { }
    verbose(message, ...optionalParams) { }
}
exports.MyLogger = MyLogger;
//# sourceMappingURL=my-logger.service.js.map