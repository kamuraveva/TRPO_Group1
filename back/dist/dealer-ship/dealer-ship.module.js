"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealerShipModule = void 0;
const common_1 = require("@nestjs/common");
const dealer_ship_service_1 = require("./dealer-ship.service");
const dealer_ship_controller_1 = require("./dealer-ship.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dealer_ship_entity_1 = require("./entities/dealer-ship.entity");
let DealerShipModule = class DealerShipModule {
};
exports.DealerShipModule = DealerShipModule;
exports.DealerShipModule = DealerShipModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dealer_ship_entity_1.DealerShip])],
        controllers: [dealer_ship_controller_1.DealerShipController],
        providers: [dealer_ship_service_1.DealerShipService],
    })
], DealerShipModule);
//# sourceMappingURL=dealer-ship.module.js.map