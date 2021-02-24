import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Task} from './interfaces/task'
import { Model } from "mongoose";

@Injectable()
export class TasksService {
    constructor(@InjectModel('Task') private taskModel : Model<Task>){}

    async getTasks(){
        return await this.taskModel.find()
    }

    async getTask(id : number){
        return await this.taskModel.findById(id)
    }

    asyn
}
