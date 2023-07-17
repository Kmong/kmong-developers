import { QueryParser } from "@/features/decorator/query-parser";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function DecoratorQueryParser() {
  const { query } = useRouter();
  const [parsedData, setParsedData] = useState<any>();

  useEffect(()=> {
    // 페치로 받아왔다고 가정
    const queryParser = new QueryParser(query);
    setParsedData(queryParser.getParsedUrlQuery());

  }, [query])

  if (!parsedData) return null;

  return (
    <ul>
      <li>
        카테고리 ID: {parsedData.categoryId}
      </li>
      <li>
        검색 타입: {parsedData.searchType}
      </li>
      <li>
        검색 키워드: {`"${parsedData.searchKeyword}"`}
      </li>
      <li>
        활성화 여부: {`${parsedData.isActive}`}
      </li>
    </ul>
  )
}
