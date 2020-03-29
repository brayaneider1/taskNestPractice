import { Controller, Get, Post, Put, Delete,Body, Param } from '@nestjs/common';
import { createTaskDto } from "./Dto/create-task.dto";
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Tasks';

@Controller('tasks')
export class TasksController {

    constructor(private taskServices:TasksService){


    }

    @Get()
    getTasks():Promise <Task[]>{
        return  this.taskServices.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId:string){
        return this.taskServices.getTask(taskId);

    }

    @Post()
    createPost(@Body()task: createTaskDto){
        console.log(task)
        return 'Post functionally'
    }

    @Put(':id')
    updateTask(@Body()task: createTaskDto,@Param('id')id){
        console.log(task)
        console.log(id)
        return 'updating a task'
    }

    @Delete(':id')
    deleteTask(@Param('id')id){
        console.log(id);
        return `deleting a task number: ${id}`
    }

}
