import { validate } from "@/features/decorator/validator";
import { Course } from "@/features/decorator/validator/Course";
import { useState } from "react";

export default function DecoratorValidator() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createdCourse = new Course(title, Number(price));

    if (!validate(createdCourse)) {
      alert('값을 다시 확인해주세요.');
      return;
    }

    alert('제출 완료');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label htmlFor='title' style={{ display: 'flex', gap: '8px' }}>
          타이틀
          <input id='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label htmlFor='price' style={{ display: 'flex', gap: '8px' }}>
          가격
          <input id='price' type='text' value={price}  onChange={(e) => setPrice(e.target.value)} />
        </label>
        <button style={{ width: '200px' }}>제출</button>
      </form>
    </div>
  )
}
