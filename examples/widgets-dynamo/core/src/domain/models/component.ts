import { Base } from "./base.js";

export class Component extends Base {
  description?: string | undefined;
  expirationDate: string;
  id: string;
  inStock: number;
  name: string;
  price: number;
  rating: number;

  constructor(params: Component) {
    super(params);
    this.description = params.description;
    this.expirationDate = params.expirationDate;
    this.id = params.id;
    this.name = params.name;
    this.price = params.price;
    this.rating = params.rating;
    this.inStock = params.inStock;
  }
}

export type CreateComponent = Omit<
  Component,
  "id" | "createdDate" | "updatedDate"
>;
