import {GigService, GigServiceProps} from "@/features/decorator/formatter";
import { useEffect } from "react";

export default function DecoratorFactory() {

  useEffect(()=> {
    // 페치로 받아왔다고 가정
    const Gig = new GigService(mockData);

    Gig.information();

  }, [])

  return <div>Property Decorator 포매터</div>
}

const mockData: GigServiceProps = {
  amount: 50000,
  title: '프로퍼티 데코레이터 만들어',
  sellerName: '호랑나비'
}
