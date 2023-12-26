import { DealerShipService } from './dealer-ship.service';
import { CreateDealerShipDto } from './dto/create-dealer-ship.dto';
import { UpdateDealerShipDto } from './dto/update-dealer-ship.dto';
export declare class DealerShipController {
    private readonly dealerShipService;
    constructor(dealerShipService: DealerShipService);
    create(createDealerShipDto: CreateDealerShipDto, req: any): Promise<{
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
    } & import("./entities/dealer-ship.entity").DealerShip>;
    findAll(): Promise<import("./entities/dealer-ship.entity").DealerShip[]>;
    findOne(id: string): Promise<import("./entities/dealer-ship.entity").DealerShip>;
    update(id: string, updateDealerShipDto: UpdateDealerShipDto, req: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
