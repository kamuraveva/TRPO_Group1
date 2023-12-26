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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealerShipController = void 0;
const common_1 = require("@nestjs/common");
const dealer_ship_service_1 = require("./dealer-ship.service");
const create_dealer_ship_dto_1 = require("./dto/create-dealer-ship.dto");
const update_dealer_ship_dto_1 = require("./dto/update-dealer-ship.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let DealerShipController = class DealerShipController {
    constructor(dealerShipService) {
        this.dealerShipService = dealerShipService;
    }
    create(createDealerShipDto, req) {
        return this.dealerShipService.create(createDealerShipDto, +req.user.id);
    }
    findAll() {
        return this.dealerShipService.findAll();
    }
    findOne(id) {
        return this.dealerShipService.findOne(+id);
    }
    update(id, updateDealerShipDto, req) {
        return this.dealerShipService.update(+id, updateDealerShipDto, +req.user.id);
    }
    remove(id) {
        return this.dealerShipService.remove(+id);
    }
};
exports.DealerShipController = DealerShipController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dealer_ship_dto_1.CreateDealerShipDto, Object]),
    __metadata("design:returntype", void 0)
], DealerShipController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DealerShipController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DealerShipController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dealer_ship_dto_1.UpdateDealerShipDto, Object]),
    __metadata("design:returntype", void 0)
], DealerShipController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DealerShipController.prototype, "remove", null);
exports.DealerShipController = DealerShipController = __decorate([
    (0, common_1.Controller)('dealer-ship'),
    __metadata("design:paramtypes", [dealer_ship_service_1.DealerShipService])
], DealerShipController);
//# sourceMappingURL=dealer-ship.controller.js.map