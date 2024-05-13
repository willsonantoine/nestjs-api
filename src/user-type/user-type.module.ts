import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeModel } from './UserTypeModel';
import { UserTypeService } from './user-type.service';
import { UserTypeController } from './user-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeModel])],
  controllers: [UserTypeController],
  providers: [UserTypeService],
})
export class UserTypeModule {
}
