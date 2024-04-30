// All the types are put into one file here

export interface CartItemType {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
}

export interface AddCartItemAction {
  payload: CartItemType;
  type: 'cart/add';
}

export interface ReduceCartItemAction {
  payload: number;
  type: 'cart/reduce';
}

export interface DeleteCartItemAction {
  payload: number;
  type: 'cart/delete';
}

export type CartAction =
  | AddCartItemAction
  | ReduceCartItemAction
  | DeleteCartItemAction;

export interface CartType {
  cart: CartItemType[];
  addCartItem: (item: CartItemType) => void;
  reduceCartItem: (id: number) => void;
  deleteCartItem: (id: number) => void;
}
