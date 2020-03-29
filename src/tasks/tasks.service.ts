import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Tasks';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
    constructor( @InjectModel('Task') private taskModel:Model<Task>){  }


    async getTasks(){
     return await  this.taskModel.find();
    }

    async getTask(id:string){
        return await  this.taskModel.findById(id);
       }


}
