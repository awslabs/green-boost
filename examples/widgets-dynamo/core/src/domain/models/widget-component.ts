import { Base } from "./base.js";

export class WidgetComponent extends Base {
  widgetId: string;
  componentId: string;
  constructor(params: WidgetComponent) {
    super(params);
    this.widgetId = params.widgetId;
    this.componentId = params.componentId;
  }
}
