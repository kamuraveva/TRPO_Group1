"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonController = void 0;
const common_1 = require("@nestjs/common");
const first_singleton_service_1 = require("./first-singleton.service");
const second_singleton_service_1 = require("./second-singleton.service");
let SingletonController = class SingletonController {
    constructor(firstSingletonService, secondSingletonService) {
        this.firstSingletonService = firstSingletonService;
        this.secondSingletonService = secondSingletonService;
    }
    getDataFromFirstService() {
        return this.firstSingletonService.getData();
    }
    getDataFromSecondService() {
        return this.secondSingletonService.getData();
    }
};
exports.SingletonController = SingletonController;
__decorate([
    (0, common_1.Get)('fromFirstService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], SingletonController.prototype, "getDataFromFirstService", null);
__decorate([
    (0, common_1.Get)('fromSecondService'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], SingletonController.prototype, "getDataFromSecondService", null);
exports.SingletonController = SingletonController = __decorate([
    (0, common_1.Controller)('data'),
    __metadata("design:paramtypes", [first_singleton_service_1.FirstSingletonService,
        second_singleton_service_1.SecondSingletonService])
], SingletonController);
//# sourceMappingURL=singleton.controller.js.map