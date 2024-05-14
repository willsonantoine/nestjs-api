import { Body, Controller, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { UserTypeService } from './user-type.service';
import { CreateTypeOb } from './CreateTypeOb';
import { UserTypeModel } from './UserTypeModel';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ValidationData } from '../utils/ValidationData';


@Controller('user-type')
export class UserTypeController {
  constructor(private userTypeService: UserTypeService) {

  }

  @ApiTags('Create User Type')
  @ApiCreatedResponse({
    description: `Created Succesfully`,
    type: CreateTypeOb,
    isArray: false,
  })

  @ApiBadRequestResponse({ description: 'Bad Request' })
  @UseInterceptors(new ValidationData(CreateTypeOb))
  @Post()
  async createUserType(@Body() createUserTypeDto: CreateTypeOb): Promise<UserTypeModel | any> {
    const type = await this.userTypeService.findByName(createUserTypeDto.name);
    if (!type) {
      return this.userTypeService.createUserType(createUserTypeDto);
    } else {
      return createUserTypeDto;
    }
  }

  @ApiTags('Load All User Type Not public')
  @ApiCreatedResponse({
    description: `Load Succesfully`,
    isArray: true,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Get('not-public')
  async LoadAllNotPublic(): Promise<UserTypeModel[]> {
    return await this.userTypeService.loadAllNotPublic();
  }

  @ApiTags('Load All User Type public')
  @ApiCreatedResponse({
    description: `Load Succesfully`,
    isArray: true,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Get('public')
  async LoadAllPublic(): Promise<UserTypeModel[]> {
    return await this.userTypeService.loadAllPublic();
  }

  @ApiTags('Load All User Type public')
  @ApiCreatedResponse({
    description: `Load Succesfully`,
    isArray: true,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Put('set-public/:id')
  async SetPublic(@Param('id') id: string): Promise<UserTypeModel> {
    return await this.userTypeService.setUserTypePublic(id);
  }
}
