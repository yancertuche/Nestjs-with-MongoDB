// La intrerface me srive para definir mi propio tipo de datos, como una estructura
export interface Task {
    id?: number; // the symbol "?" means optional parameter
    title : string;
    description : string;
    done : boolean;
}