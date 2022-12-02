
type ValueType = string | number | boolean

interface IParameter {
    name: string
    desc: string
    value: ValueType
}

interface IUpdate {
    date: Date
    value: ValueType
}

class Update implements IUpdate {
    date: Date = new Date()
    value: ValueType = 0
    constructor() {}

}

class Parameter implements IParameter {
    name: string
    desc: string = ""
    value: ValueType = 0
    constructor(name: string) {
        this.name = name
    }

}

export { IParameter, Parameter, ValueType, Update, IUpdate}