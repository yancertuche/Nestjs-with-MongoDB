import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [TasksModule, MongooseModule.forRoot('moongodb://localhost/nest-tutorial1')],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
