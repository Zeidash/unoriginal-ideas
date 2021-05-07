import { stringify } from "uuid";

export default class todoAPI{
    static async getAll(){
        return JSON.parse(localStorage.getItem("todo-list") || "[]");
    }
    
    static async Save(items){
        localStorage.setItem("todo-list", JSON.stringify(items));
    }
}