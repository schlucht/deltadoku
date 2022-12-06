import { Apparat } from './Apparat';

interface IFactory {
  name: string
  apparats: Apparat[]
}

class Factory implements IFactory {
  name: string = "";
  apparats: Apparat[] = [];
}

export { IFactory, Factory }