import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
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
  async createUserType(@Body() createUserTypeDto: CreateTypeOb): Promise<UserTypeModel> {
    return this.userTypeService.createUserType(createUserTypeDto);
  }

  @ApiTags('Create User Type')
  @ApiCreatedResponse({
    description: `Created Succesfully`,
    isArray: false,
  })

  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Get(':id')
  async LoadById(@Param('id') id: string): Promise<UserTypeModel> {
    return this.userTypeService.loadById(id);
  }

  @ApiTags('Load All User Type Not public')
  @ApiCreatedResponse({
    description: `Created Succesfully`,
    isArray: false,
  })

  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Get()
  async LoadAllNotPublic(): Promise<UserTypeModel[]> {
    return await this.userTypeService.loadAllNotPublic();
  }

}
