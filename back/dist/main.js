"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const my_logger_service_1 = require("./my-logger/my-logger.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true,
    });
    app.setGlobalPrefix('api');
    app.enableCors();
    app.useLogger(app.get(my_logger_service_1.MyLogger));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map