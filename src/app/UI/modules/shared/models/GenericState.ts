
export class GenericState<T>{
  model?: T;
  list?: T[];
  currentPage: number;
  pageSize: number;
  keyWord: string;
  isLoading: boolean;
  isLoadingFailure: boolean;
  isLoadingSuccess: boolean;
}
