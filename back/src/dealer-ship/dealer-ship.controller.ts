import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe, UsePipes, Req } from '@nestjs/common';
import { DealerShipService } from './dealer-ship.service';
import { CreateDealerShipDto } from './dto/create-dealer-ship.dto';
import { UpdateDealerShipDto } from './dto/update-dealer-ship.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('dealer-ship')
export class DealerShipController {
  constructor(private readonly dealerShipService: DealerShipService) {}

  @Post() 
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createDealerShipDto: CreateDealerShipDto, @Req() req) {
    return this.dealerShipService.create(createDealerShipDto, +req.user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.dealerShipService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.dealerShipService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() updateDealerShipDto: UpdateDealerShipDto, @Req() req) {
    return this.dealerShipService.update(+id, updateDealerShipDto, +req.user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.dealerShipService.remove(+id);
  }
}
