import { Module } from '@nestjs/common';
import { SequelizeModule} from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import {TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {Connection} from 'typeorm';
import { Quest } from './quest/entities/quest.entity';


@Module({
  imports:
 
 [TypeOrmModule.forRoot({
    autoLoadEntities:true,
  }), 
    UserModule,QuestModule,
  ],
controllers:[AppController],
providers:[AppService],

})
export class AppModule {
  constructor(private connection: Connection){}
}
