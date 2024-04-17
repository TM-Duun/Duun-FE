import {create} from "zustand";

interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
}

interface CartState {
  cartItems:Product[];
  addCart: (product: Product) => void;
  removeCart: (item:number) => void;
}

  
const useStoreCart = create<CartState>(set => ({
  cartItems: [],
  addCart: (product) => set(state => ({ cartItems: [...state.cartItems, product] })),
  removeCart: (id) => set(state => ({ 
    cartItems: state.cartItems.filter(item=> item.id !==id)})),
}));


export default useStoreCart;