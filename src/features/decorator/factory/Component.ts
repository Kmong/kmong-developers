export default function Component(value:string) {
  console.log('value----------------');
  console.log(value);

  // 데코레이터 함수
  return function(target:Function) {
    console.log('target----------------');
    console.log(target);
    console.log('prototype----------------');
    console.log(target.prototype);
  }
}
