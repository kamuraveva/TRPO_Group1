import { PartialType } from '@nestjs/mapped-types';
import { CreateDealerShipDto } from './create-dealer-ship.dto';

export class UpdateDealerShipDto extends PartialType(CreateDealerShipDto) {}
