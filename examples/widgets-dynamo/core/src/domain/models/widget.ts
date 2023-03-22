import { Base } from "./base.js";

export enum WidgetStep {
  Step1 = "Step1",
  Step2 = "Step2",
  Step3 = "Step3",
}

export class Widget extends Base {
  active: boolean;
  description?: string | undefined;
  expirationDate: string;
  id: string;
  name: string;
  price: number;
  rating: number;
  step: WidgetStep;

  constructor(params: Widget) {
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

export type CreateWidget = Omit<Widget, "id" | "createdDate" | "updatedDate">;
