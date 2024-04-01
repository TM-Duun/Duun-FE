import {create} from 'zustand';

// 각 카테고리에 대한 이미지 세트를 정의합니다.
const categoryImages = {
  "T-shirt": [
    "/categorydata/grid_img.png",
    "/categorydata/grid_img.png",
    "/categorydata/grid_img.png",
    "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",
  "/categorydata/grid_img.png",], // T-shirt 카테고리에 해당하는 이미지 배열
  "Sweatshirt": [
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",
    "/categorydata/grid_img1.png",], // Sweatshirt 카테고리에 해당하는 이미지 배열
  "Coats": [
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    "/categorydata/grid_img2.png",
    ], 
    "Jeans": [
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
      "/categorydata/grid_img3.png",
    ],
    "Paddings":[
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
        "/categorydata/grid_img4.png",
    ]

};

const useCategoryStore = create(set => ({
  selectedCategory: "T-shirt", // 기본 선택된 카테고리
  images: categoryImages["T-shirt"], // 현재 선택된 카테고리에 해당하는 이미지 배열
  selectCategory: (category) => set({
    selectedCategory: category,
    images: categoryImages[category]
  })
}));

export default useCategoryStore;
