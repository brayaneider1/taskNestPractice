import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TasksModule,MongooseModule.forRoot('mongodb://localhost/nest-tutorial',{
    usrNewUrlParser:true
  })],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
