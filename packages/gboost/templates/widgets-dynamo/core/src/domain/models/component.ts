import { Base } from "./base.js";

export class Component extends Base {
  id: string;
  name: string;
  constructor(params: Component) {
    super(params);
    this.id = params.id;
    this.name = params.name;
  }
}
