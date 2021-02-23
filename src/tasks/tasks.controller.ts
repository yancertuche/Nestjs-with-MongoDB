import { Controller, Get, Post, Put, Delete, Body} from '@nestjs/common';

//let to create a new route for the project

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): string {
        return 'Retriving task';
    }

    @Post()
    createTask(@Body() task): string {
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
