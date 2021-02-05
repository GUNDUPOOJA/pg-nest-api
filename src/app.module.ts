import { Module } from '@nestjs/common';
import { SequelizeModule} from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import {TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
 import {User} from './user/entities/user.entity';
// import {User} from '../src/user.model';
import {Connection} from 'typeorm';
import { Quest } from './quest/entities/quest.entity';
import { LocationModule } from './location/location.module';
import { UpdateLocationDto } from './location/dto/update-location.dto';
import { UserService } from './user/user.service';
// import { UserModule } from './user/user.module';


const defaultOptions = {
  type: 'postgres',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  synchronize: true,
}
@Module({
  imports: [ QuestModule,  UserModule,LocationModule,
  //   SequelizeModule.forRoot({
  //     dialect: 'mysql',
  //     host: 'localhost',
  //     port: 3306,
  //     username: 'root',
  //     password: 'root',
  //     database: 'test',
  //   }),
  //   LocationModule,
  // ],

 TypeOrmModule.forRoot({
   type:'sqlite',
  //  host:'localhost',
  //  port:3306,
  //  username:'root',
  //  password:'root',
   database:'tests.db',
   entities:[User],
  //  synchronize:true,
    autoLoadEntities:true,
    synchronize:true,
 }),

],
controllers:[AppController],
providers:[AppService,UserService],

})

export class AppModule {
   constructor(private connection: Connection){}
}
