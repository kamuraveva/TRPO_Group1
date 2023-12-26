import { DealerShip } from "src/dealer-ship/entities/dealer-ship.entity";
export declare class User {
    id: number;
    email: string;
    password: string;
    createdAT: Date;
    updatedAt: Date;
    dealerShipsCreator: DealerShip[];
    dealerShipsEditor: DealerShip[];
}
