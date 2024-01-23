"use client";

import styles from "@/app/order/order.module.css";
import Link from "next/link";

function CartPage() {
  const handleClickPayment = async () => {
    console.log('결제를 시작합니다.');

    const res = await fetch("/api/sentry-example-api", { method: 'post' });
    if (!res.ok) {
      throw new Error("결제 API 실패");
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Link
          className={styles.link}
          href={'/'}
        >
          홈
        </Link>
        <h1 className={styles.h1}>장바구니 페이지</h1>
        <Link
          className={styles.link}
          href={'/order'}
        >
          주문 페이지
        </Link>
      </div>
      <div className={styles.text}>
        <div>장바구니에 담은 것:</div>
        <div>밀크티, 카페라떼, 카푸치노</div>
      </div>
      <button
        className={styles.payment}
        onClick={handleClickPayment}
      >
        결제
      </button>
    </main>
  );
}

export default CartPage;
