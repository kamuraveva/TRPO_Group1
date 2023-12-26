import { Module } from '@nestjs/common';
import { DealerShipService } from './dealer-ship.service';
import { DealerShipController } from './dealer-ship.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealerShip } from './entities/dealer-ship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DealerShip])],
  controllers: [DealerShipController],
  providers: [DealerShipService],
})
export class DealerShipModule {}
