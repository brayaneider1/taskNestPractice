import { Schema } from "mongoose";

export const TaskSchemas=new Schema({
    title:String,
    description:String,
    Done:Boolean

})