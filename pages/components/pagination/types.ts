export interface PaginationTypes {
  totalPages: number;
  currentPage: number;
  setCurrentPageNumber: (value: number) => void;
  setIsLoading: (value: boolean) => void;
}

export interface isActiveTypes {
  active: boolean;
}
