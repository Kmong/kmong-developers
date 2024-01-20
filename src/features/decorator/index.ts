import {
  BoxDecorator, LineNumberDecorator, SideDecorator, Strings,
} from './models';

export default function startDecorator() {
  const strs = new Strings([
    '안녕하세요',
    '저는 엠마입니다.',
    '저는 크몽의 FE 개발자입니다.',
    '데코레이터 패턴을 배워봅시다',
  ]);

  strs.add('추가 텍스트 적어보기');

  const sideDecoratedStrs = new SideDecorator(strs, '"');
  const lineNumberDecoratedStrs = new LineNumberDecorator(strs);
  const boxDecoratedStrs = new BoxDecorator(strs);

  const pre1 = document.createElement('pre');
  const pre2 = document.createElement('pre');
  const pre3 = document.createElement('pre');
  const pre4 = document.createElement('pre');

  const main = document.querySelector('main');

  main?.append(pre1);
  main?.append(pre2);
  main?.append(pre3);
  main?.append(pre4);
  const domPre = document.querySelector('pre');
  if (domPre) {
    strs.print(pre1);
    sideDecoratedStrs.print(pre2);
    lineNumberDecoratedStrs.print(pre3);
    boxDecoratedStrs.print(pre4);
  }
}
