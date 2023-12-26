import { User } from "src/user/entities/user.entity";
export declare class DealerShip {
    id: number;
    vehicle_brand: string;
    brand_model: string;
    vin: string;
    year_of_manufacture: string;
    color: string;
    price: number;
    creatorId: number;
    creator: User;
    editorId: number;
    editor: User;
}
