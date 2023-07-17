import { ParsedUrlQuery } from "querystring";
import { formatter } from "@/features/decorator/formatter";

export type SearchType = 'ID' | 'KEYWORD';

export class QueryParser {
  @formatter((value) => Number.isNaN(Number(value)) ? 0 : Number(value))
  categoryId: string | string[] | undefined;

  @formatter<SearchType>((value) => value === 'ID' ? 'ID' : 'KEYWORD')
  searchType: string | string[] | undefined;

  @formatter((value) => value?.toString() || '')
  searchKeyword: string | string[] | undefined;

  @formatter((value) => value === 'true')
  isActive: string | string[] | undefined;

  constructor(query: ParsedUrlQuery) {
    const { categoryId, searchType, searchKeyword, isActive } = query;
    this.categoryId = categoryId;
    this.searchType = searchType;
    this.searchKeyword = searchKeyword;
    this.isActive = isActive;
  }

  getParsedUrlQuery() {
    return ({
      categoryId: this.categoryId,
      searchType: this.searchType,
      searchKeyword: this.searchKeyword,
      isActive: this.isActive,
    });
  }
}
