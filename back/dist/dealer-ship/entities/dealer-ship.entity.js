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
exports.DealerShip = void 0;
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let DealerShip = class DealerShip {
};
exports.DealerShip = DealerShip;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DealerShip.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DealerShip.prototype, "vehicle_brand", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DealerShip.prototype, "brand_model", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DealerShip.prototype, "vin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DealerShip.prototype, "year_of_manufacture", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DealerShip.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'price', nullable: false, precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], DealerShip.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'creator_id' }),
    __metadata("design:type", Number)
], DealerShip.prototype, "creatorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.dealerShipsCreator),
    (0, typeorm_1.JoinColumn)({ name: 'creator_id' }),
    __metadata("design:type", user_entity_1.User)
], DealerShip.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'editor_id' }),
    __metadata("design:type", Number)
], DealerShip.prototype, "editorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.dealerShipsEditor),
    (0, typeorm_1.JoinColumn)({ name: 'editor_id' }),
    __metadata("design:type", user_entity_1.User)
], DealerShip.prototype, "editor", void 0);
exports.DealerShip = DealerShip = __decorate([
    (0, typeorm_1.Entity)('dealerShip')
], DealerShip);
//# sourceMappingURL=dealer-ship.entity.js.map