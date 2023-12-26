"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonModule = void 0;
const common_1 = require("@nestjs/common");
const singleton_service_1 = require("./singleton.service");
const first_singleton_service_1 = require("./first-singleton.service");
const second_singleton_service_1 = require("./second-singleton.service");
const singleton_controller_1 = require("./singleton.controller");
let SingletonModule = class SingletonModule {
};
exports.SingletonModule = SingletonModule;
exports.SingletonModule = SingletonModule = __decorate([
    (0, common_1.Module)({
        providers: [{
                provide: singleton_service_1.SingletonService,
                useValue: singleton_service_1.SingletonService.getInstance(),
            },
            first_singleton_service_1.FirstSingletonService,
            second_singleton_service_1.SecondSingletonService
        ],
        controllers: [singleton_controller_1.SingletonController],
    })
], SingletonModule);
//# sourceMappingURL=singleton.module.js.map