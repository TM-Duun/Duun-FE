import {create} from "zustand";

interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
}

interface HeartState {
  likedItems:Product[];
  addLike: (product: Product) => void;
  removeLike: (product: Product) => void;
}

  
const useStoreHeart = create<HeartState>(set => ({
  likedItems: [],
  addLike: (product) => set(state => ({ likedItems: [...state.likedItems, product] })),
  removeLike: (item) => set(state => ({ 
    likedItems: state.likedItems.filter(product => product.id !== item.id)})),
}));


export default useStoreHeart;