export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type TGoodObject = {
  title: string;
  phone: string;
  publicated: boolean;
  price: string;
  category: string;
  description: string;
  address: string;
  id: string;
  date: string;
};

export type TSearchGoodParams = {
  title: string;
  search: string;
  currentPage: number;
};

export interface IGoodSliceState {
  items: TGoodObject[];
  status: Status;
}
