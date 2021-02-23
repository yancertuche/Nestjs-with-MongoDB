import { Injectable } from '@nestjs/common';
import {Task} from './interfaces/task'

@Injectable()
export class TasksService {
    tasks : Task[] = [
        {
            id : 1,
            title : "el titulo",
            description :"esta es la descripción",
            done: false
        },
        {
            id : 2,
            title : "el titulo",
            description :"esta es la descripción",
            done: false
        }

    ];

    getTasks() : Task[] {
        return this.tasks;
    }

    getTask(id : number) : Task {
        return this.tasks.find(task => task.id === id);
    }

}
