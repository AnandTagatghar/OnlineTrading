export type watchListType = {
  name: string;
  price: number;
  percent: string;
  isDown: boolean;
};

export type holdingsType = {
  name: string;
  qty: number;
  avg: number;
  price: number;
  net: string;
  day: string;
};

export type positionsType = {
  product: string;
  name: string;
  qty: number;
  avg: number;
  price: number;
  net: string;
  day: string;
  isLoss: boolean;
};
