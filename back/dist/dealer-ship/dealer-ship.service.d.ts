import { CreateDealerShipDto } from './dto/create-dealer-ship.dto';
import { UpdateDealerShipDto } from './dto/update-dealer-ship.dto';
import { Repository } from 'typeorm';
import { DealerShip } from './entities/dealer-ship.entity';
export declare class DealerShipService {
    private readonly dealerShipRepository;
    private readonly logger;
    constructor(dealerShipRepository: Repository<DealerShip>);
    create(createDealerShipDto: CreateDealerShipDto, userId: number): Promise<{
        brand_model: string;
        vehicle_brand: string;
        vin: string;
        year_of_manufacture: string;
        color: string;
        price: number;
        creator: {
            id: number;
        };
        editor: {
            id: number;
        };
    } & DealerShip>;
    findAll(): Promise<DealerShip[]>;
    findOne(id: number): Promise<DealerShip>;
    update(id: number, updateDealerShipDto: UpdateDealerShipDto, userId: number): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
