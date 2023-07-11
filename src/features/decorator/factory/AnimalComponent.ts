import Component from "@/features/decorator/factory/Component";

@Component('tabs')
export class AnimalComponent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log(`이것은 ${this.name} 컴포넌트 입니다.`);
  }
}
