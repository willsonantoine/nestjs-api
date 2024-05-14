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

  async createUserType(userType: CreateTypeOb): Promise<UserTypeModel> {
    return this.userType.save(userType);
  }

  async findByName(name: string): Promise<UserTypeModel> {
    return this.userType.findOne({ where: { name: name } });
  }

  async loadById(id: string): Promise<UserTypeModel> {
    return await this.userType.findOne({ where: { id } });
  }

  async loadAllNotPublic(): Promise<UserTypeModel[]> {
    return this.userType.find({ where: { isPublic: false } });
  }

  async loadAllPublic(): Promise<UserTypeModel[]> {
    return this.userType.find({ where: { isPublic: true } });
  }

  async setUserTypePublic(id: string): Promise<UserTypeModel> {
    const type = await this.userType.findOne({ where: { id } });
    type.isPublic = !type.isPublic;
    return this.userType.save(type);
  }

}
