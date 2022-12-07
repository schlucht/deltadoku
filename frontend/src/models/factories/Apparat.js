import { UP } from './Up';



class Apparat {
  name = "";
  description = "";
  ups = [];

  constructor(apparatName) {
    this.name = apparatName;
  }
}

export { Apparat}