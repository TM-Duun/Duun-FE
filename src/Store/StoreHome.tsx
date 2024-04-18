// store.js
import {create} from 'zustand';

interface StoreHomeState {
  selectedImageSet: string[];
  setSelectedImageSet: (index: number) => void;//선택된 인덱스를 매개변수로 받아서 상태 업데이트
}

const imageSets=[
  ["/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png"],
  ["/homedata/main_Img.png","/homedata/main_Img.png","/homedata/main_Img.png","/homedata/main_Img.png"],
  ["/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png"],
  ["/homedata/main_Img.png","/homedata/main_Img.png","/homedata/main_Img.png","/homedata/main_Img.png"],
  ["/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png"],

]

const useStoreHome = create<StoreHomeState>((set) => ({
  selectedImageSet: imageSets[1], // 초기 상태로 첫 번째 이미지 세트 선택
  setSelectedImageSet: (index) => set({ selectedImageSet: imageSets[index] }), // 선택된 인덱스에 따라 이미지 세트를 업데이트.

}));

export default useStoreHome;
