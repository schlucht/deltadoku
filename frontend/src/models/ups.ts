import { Parameter } from "./parameter"


interface IUp {
    name: string
    desc: string
    special: boolean
    parameters: Parameter[]
}

class Up implements IUp {
    name: string
    desc: string = ""
    special: boolean = false
    parameters: Parameter[] = []

    constructor(name: string) {
        this.name = name;
        
    }
    
}

export { IUp, Up}