import { Injectable } from '@nestjs/common';
import { UserTypeModel } from './UserTypeModel';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeOb } from './CreateTypeOb';

@Injectable()
export class UserTypeService {

  constructor(@InjectRepository(UserTypeModel)
              private userType: Repository<UserTypeModel>) {
  }

  createUserType(userType: CreateTypeOb): UserTypeModel {
    console.log(userType)
    try {
     return this.userType.create(userType);
    } catch (e) {
      console.log(e)
      return null;
    }

  }

  async loadById(id: string): Promise<UserTypeModel> {
    return await this.userType.findOne({ where: { id } });
  }

  async loadAllNotPublic(): Promise<UserTypeModel[]> {
    return await this.userType.find({ where: { isPublic: true } });
  }
}
