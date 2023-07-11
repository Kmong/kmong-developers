import { AnimalComponent } from "@/features/decorator/factory/AnimalComponent";
import { useEffect } from "react";

export default function DecoratorFactory() {
  useEffect(()=> {
    const tabs = new AnimalComponent('다람쥐');

  }, [])
  return <div>데코레이터 팩토리 패턴</div>
}
