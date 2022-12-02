import { Apparat } from './apparat'

interface IFactory {
    name: string
    apparats: Apparat[]
}

class Factory implements IFactory{
    constructor(name: string) {
        this.name = name
        this.apparats = [] as Apparat[]
    }
    name: string
    apparats: Apparat[]
}

export {
    Factory, IFactory
}