import {create} from 'zustand';

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
  "/categorydata/grid_img.png",],
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
    "/categorydata/grid_img1.png",], 
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
