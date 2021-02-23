import { Controller, Get, Post, Put, Delete, Body} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';

//let to create a new route for the project

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): string {
        return 'Retriving task';
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task)
        return 'Creating a Task';
    }

    @Put()
    updatetask():string{
        return 'Updating task'
    }

    @Delete()
    deleteTask():string{
        return 'Deleting a task'
    }


}
