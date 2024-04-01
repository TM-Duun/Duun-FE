// store.js
import {create} from 'zustand';

const imageSets=[
  ["/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png"],
  ["/homedata/main_Img.png","/homedata/main_Img.png","/homedata/main_Img.png","/homedata/main_Img.png"],
  ["/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png"],
  ["/homedata/main_Img.png","/homedata/main_Img.png","/homedata/main_Img.png","/homedata/main_Img.png"],
  ["/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png","/homedata/small_Img.png"],

]

const useStoreHome = create(set => ({
  selectedImageSet: imageSets[0], // 초기 상태로 첫 번째 이미지 세트를 선택합니다.
  setSelectedImageSet: index => set({ selectedImageSet: imageSets[index] }), // 선택된 인덱스에 따라 이미지 세트를 업데이트합니다.

}));

export default useStoreHome;
