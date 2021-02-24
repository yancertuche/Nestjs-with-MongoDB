import { Schema } from "mongoose";

export const TaskSchema = new Schema({
    titile : String,
    description : String,
    done : Boolean
})