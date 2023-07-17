export function formatter<T = string>(formatFn: (value: any) => T): PropertyDecorator {
  // @ts-ignore
  return function (target: any, propertyName: string) {
    let value: T;

    const getter = function () {
      return value;
    }

    const setter = function (newValue: number) {
      value = formatFn(newValue);
    }

    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
    })
  };
}

export interface GigServiceProps {
  amount: number;
  title: string;
  sellerName: string;
}

export class GigService {
  @formatter((amount) => `${amount.toLocaleString('ko-KR')}원`)
  amount: number;
  @formatter((title) => `${title}드립니다.`)
  title: string;
  sellerName: string;

  constructor({ amount, title, sellerName }: GigServiceProps) {
    this.amount = amount;
    this.title = title;
    this.sellerName = sellerName;
  }

  information() {
    console.log({
      amount: this.amount,
      title: this.title,
      sellerName: this.sellerName,
    });
  }
}
