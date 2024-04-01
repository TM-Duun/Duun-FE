import {create} from "zustand";

interface HeartState {
  likedItems: number[];
  addLike: (index: number) => void;
  removeLike: (index: number) => void;
}
  
const useStoreHeart = create<HeartState>(set => ({
  likedItems: [],
  likeCount: 0,
  addLike: (index) => set(state => ({ likedItems: [...state.likedItems, index] })),
  removeLike: (index) => set(state => ({ likedItems: state.likedItems.filter(item => item !== index) })),
}));


export default useStoreHeart;