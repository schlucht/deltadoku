import { Parameter } from './Parameter';


class UP  {
  name;
  description = "";
  special = false;
  parameters = [];

  constructor(upName) {
    this.name = upName
  }
}

export {  UP }