interface IProductRading {
  rate: number;
  count: number;
}

export interface IProductData {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  rating?: IProductRading;
}
