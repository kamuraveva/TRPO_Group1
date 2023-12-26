import { IsNotEmpty, MinLength } from "class-validator";

export class CreateDealerShipDto {

    @IsNotEmpty()
    vehicle_brand: string

    @IsNotEmpty()
    brand_model: string

    @MinLength(17, {message: 'vin must be 17 symbols'})
    @IsNotEmpty()
    vin: string

    @IsNotEmpty()
    year_of_manufacture: string

    @IsNotEmpty()
    color: string

    @IsNotEmpty()
    price: number
}
