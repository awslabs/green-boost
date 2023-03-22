import { Base } from "./base.js";

export enum ItemStep {
  Step1 = "Step1",
  Step2 = "Step2",
  Step3 = "Step3",
}

export class Item extends Base {
  active: boolean;
  description?: string | undefined;
  expirationDate: string;
  id: string;
  name: string;
  price: number;
  rating: number;
  step: ItemStep;

  constructor(params: Item) {
    super(params);
    this.active = params.active;
    this.description = params.description;
    this.expirationDate = params.expirationDate;
    this.id = params.id;
    this.name = params.name;
    this.price = params.price;
    this.rating = params.rating;
    this.step = params.step;
  }
}

export type CreateItem = Omit<Item, "id" | "createdDate" | "updatedDate">;
