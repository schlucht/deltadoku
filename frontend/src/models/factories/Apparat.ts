import { UP } from './Up';

interface IApparat {
  name: string
  description: string
  ups: UP[]
}

class Apparat implements IApparat {
  name: string = "";
  description: string = "";
  ups: UP[] = [];

  constructor(apparatName: string) {
    this.name = apparatName;
  }
}

export { IApparat, Apparat}