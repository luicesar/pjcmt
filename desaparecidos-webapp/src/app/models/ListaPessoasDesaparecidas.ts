import { Content } from "./Content";
import { Pageable } from "./Pageable";
import { Sort2 } from "./Sort2";

export interface ListaPessoasDesaparecidas {
  content: Content[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  sort: Sort2;
  size: number;
  number: number;
  empty: boolean;
}
