import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateDealerShipDto } from './dto/create-dealer-ship.dto';
import { UpdateDealerShipDto } from './dto/update-dealer-ship.dto';
import { Repository } from 'typeorm';
import { DealerShip } from './entities/dealer-ship.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DealerShipService {
  private readonly logger = new Logger(DealerShipService.name);
  constructor (
    @InjectRepository(DealerShip)
    private readonly dealerShipRepository: Repository<DealerShip>
    ) {}

  async create(createDealerShipDto: CreateDealerShipDto, userId: number) {
    this.logger.log(`создание автомобиля с vin ${createDealerShipDto.vin}`)
    const isExist = await this.dealerShipRepository.findOne({
      where: {
        vin: createDealerShipDto.vin,
      },
    });
    if(isExist) throw new BadRequestException('автомобиль с таким vin уже существует.');
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
    }
    return await this.dealerShipRepository.save(newDealerShip);
  }

  async findAll() {
    this.logger.log(`получение списка автомобилей`)
    return await this.dealerShipRepository.find();
  }

  async findOne(id: number) {
    this.logger.log(`получение автомобиля с идентификатором ${id}`)
    const dealerShip = await this.dealerShipRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!dealerShip) throw new NotFoundException('автомобиль не найден.');
    return dealerShip;
  }

  async update(id: number, updateDealerShipDto: UpdateDealerShipDto, userId: number) {
    this.logger.log(`обновление информации об автомобиле с идентификатором ${id}`)
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

  async remove(id: number) {
    this.logger.log(`удаление информации об автомобиле с идентификатором ${id}`)
    await this.findOne(id);
    return await this.dealerShipRepository.delete(id);
  }
}
