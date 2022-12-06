import { Parameter } from './Parameter';

interface IUP {
  name: string
  description: string
  special: boolean
  parameters: Parameter[]
}

class UP implements IUP {
  name: string;
  description: string = "";
  special: boolean = false;
  parameters: Parameter[] = [];

  constructor(upName: string) {
    this.name = upName
  }
}

export { IUP, UP }