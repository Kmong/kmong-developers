import startDecorator from "@/features/decorator";
import { useEffect } from "react";

let count = 0;

export default function Home() {

  useEffect(()=> {
    count = count + 1;

    if (count === 1) {
      startDecorator();
    }
  }, [])

  return (<main></main>)
}
