import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Task} from './interfaces/task'
import { Model } from "mongoose";
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel('Task') private taskMo : Model<Task>){}

    async getTasks(){
        return await this.taskMo.find()
    }

    async getTask(id : string){
        return await this.taskMo.findById(id)
    }

    async createTask(task : CreateTaskDto){
        const newTask = new this.taskMo(task);
        return await newTask.save();
    }
}
