export class Base {
  createdDate: string;
  updatedDate: string;
  constructor(params: Base) {
    this.createdDate = params.createdDate;
    this.updatedDate = params.updatedDate;
  }
}
