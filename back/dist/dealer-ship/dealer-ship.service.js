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
var DealerShipService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealerShipService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dealer_ship_entity_1 = require("./entities/dealer-ship.entity");
const typeorm_2 = require("@nestjs/typeorm");
let DealerShipService = DealerShipService_1 = class DealerShipService {
    constructor(dealerShipRepository) {
        this.dealerShipRepository = dealerShipRepository;
        this.logger = new common_1.Logger(DealerShipService_1.name);
    }
    async create(createDealerShipDto, userId) {
        this.logger.log(`создание автомобиля с vin ${createDealerShipDto.vin}`);
        const isExist = await this.dealerShipRepository.findOne({
            where: {
                vin: createDealerShipDto.vin,
            },
        });
        if (isExist)
            throw new common_1.BadRequestException('автомобиль с таким vin уже существует.');
        const newDealerShip = {
            brand_model: createDealerShipDto.brand_model,
            vehicle_brand: createDealerShipDto.vehicle_brand,
            vin: createDealerShipDto.vin,
            year_of_manufacture: createDealerShipDto.year_of_manufacture,
            color: createDealerShipDto.color,
            price: createDealerShipDto.price,
            creator: {
                id: userId,
            },
            editor: {
                id: userId,
            },
        };
        return await this.dealerShipRepository.save(newDealerShip);
    }
    async findAll() {
        this.logger.log(`получение списка автомобилей`);
        return await this.dealerShipRepository.find();
    }
    async findOne(id) {
        this.logger.log(`получение автомобиля с идентификатором ${id}`);
        const dealerShip = await this.dealerShipRepository.findOne({
            where: {
                id: id,
            },
        });
        if (!dealerShip)
            throw new common_1.NotFoundException('автомобиль не найден.');
        return dealerShip;
    }
    async update(id, updateDealerShipDto, userId) {
        this.logger.log(`обновление информации об автомобиле с идентификатором ${id}`);
        await this.findOne(id);
        return await this.dealerShipRepository.update(id, {
            brand_model: updateDealerShipDto.brand_model,
            vehicle_brand: updateDealerShipDto.vehicle_brand,
            vin: updateDealerShipDto.vin,
            year_of_manufacture: updateDealerShipDto.year_of_manufacture,
            color: updateDealerShipDto.color,
            price: updateDealerShipDto.price,
            editor: {
                id: userId,
            },
        });
    }
    async remove(id) {
        this.logger.log(`удаление информации об автомобиле с идентификатором ${id}`);
        await this.findOne(id);
        return await this.dealerShipRepository.delete(id);
    }
};
exports.DealerShipService = DealerShipService;
exports.DealerShipService = DealerShipService = DealerShipService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(dealer_ship_entity_1.DealerShip)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DealerShipService);
//# sourceMappingURL=dealer-ship.service.js.map