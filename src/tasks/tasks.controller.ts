import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import { Task } from "./interfaces/task";
import { TasksService } from './tasks.service';
//let to create a new route for the project

@Controller('tasks')
export class TasksController {

    constructor(private taskService : TasksService){}

    @Get()
    getTasks(): Task[] {
        return this.taskService.getTasks();
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task.title, task)
        return 'Creating a Task';
    }

    @Put(':id')
    updatetask(@Body() task: CreateTaskDto, @Param('id') id):string{
        console.log(task);
        console.log(id);
        return 'Updating task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id):string{
        console.log(id)
        return `Deleting a task number  ${id}`; //new feature of typescript 
    }


}
