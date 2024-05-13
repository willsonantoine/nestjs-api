import { Module } from '@nestjs/common';
import { UserTypeModule } from './user-type/user-type.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest_test',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    keepConnectionAlive: true,
  }), UserTypeModule],
})
export class AppModule {
}
