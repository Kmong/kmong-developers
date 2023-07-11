import { PositiveNumber, Required } from "@/features/decorator/validator/index";

export class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number){
    this.title = t;
    this.price = p;
  }
}
