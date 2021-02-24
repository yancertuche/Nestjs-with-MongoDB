// La intrerface me srive para definir mi propio tipo de datos, como una estructura
import { Document } from "mongoose";

export interface Task extends Document{
    id?: number; // the symbol "?" means optional parameter
    title : string;
    description : string;
    done : boolean;
}