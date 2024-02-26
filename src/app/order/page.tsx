"use client";
import * as Sentry from "@sentry/nextjs";
import { captureException } from "@sentry/nextjs";
import styles from "./order.module.css";
import Link from "next/link";

function OrderPage() {
  const handleClickMenu = (name: string) => {
    console.log(`${name}을 주문합니다.`);
    Sentry.startSpan({ name: "order-span" }, (span) => {
      span?.setTag("menu", name);
      console.log('span~~~~~')
      console.log(span);
    });

    const transaction = Sentry.startTransaction({ name: "order-transaction" });
    try {
      throw new Error(`${name}을 주문하지 못했습니다.`);
    } catch (error) {
      captureException(error);
    } finally {
      transaction.finish();
    }
  }

  const handleClickCart = async () => {
    console.log('장바구니에 담기를 클릭했습니다.');

    const res = await fetch("/api/sentry-example-api", { method: 'post' });
    if (!res.ok) {
      throw new Error("장바구니 API 실패");
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
        <h1 className={styles.h1}>주문 페이지</h1>
        <Link
          className={styles.link}
          href={'/cart'}
        >
          장바구니
        </Link>
      </div>
      <ul className={styles.menus}>
        {menus.map((menu) => (
          <li key={menu}>
            <button
              className={styles.button}
              onClick={() => handleClickMenu(menu)}
            >
              {menu}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={styles.payment}
        onClick={handleClickCart}
      >
        장바구니
      </button>
    </main>
  );
}

const menus = [
  '아메리카노',
  '카푸치노',
  '라떼',
  '밀크티',
];

export default OrderPage;
