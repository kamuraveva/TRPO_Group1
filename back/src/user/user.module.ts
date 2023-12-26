import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [ TypeOrmModule.forFeature([User]),     
  JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      secret: configService.get('JWT_SECRET'),
      signOptions: { expiresIn: '600s'},
    }),
    inject: [ConfigService],
}),
],
  exports: [UserService],
})
export class UserModule {}
