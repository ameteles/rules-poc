export type PaymentTypes = "AME_DIGITAL" | "PIX";
export type DiscountType = "VALUE" | "CASHBACK";

export interface RulesInterface {
  priority: number;
  rule: (cart: CartInterface) => CartInterface;
}

export interface DiscoutArrayInterface {
  message: string;
  value: number;
  discountType: string;
  campaign: String;
}

export interface ProductInfoInterface {
  ean: string;
  [key: string]: any;
}
export interface ProductInterface {
  quantity: number;
  discountArray: DiscoutArrayInterface[];
  product: ProductInfoInterface;
  price: number;
  [key: string]: any;
}

export interface CartInterface {
  products: ProductInterface[];
  selectedPayments: string[];
  subtotal: number;
  discount: number;
  total: number;
  charges: number | string;
  [key: string]: any;
}

export interface PromotionInterface {
  priority: number;
  type: string;
  params: Object;
  [key: string]: any;
}
