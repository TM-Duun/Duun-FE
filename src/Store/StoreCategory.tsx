import {create} from 'zustand';

interface ProductInfo {
  src: string;
  name: string;
  price: string;
}

const categoryImages:Record<string,ProductInfo[]> = {
  "T-shirt": [
  {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
  {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
  {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
  {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
 {src:"/categorydata/grid_img.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'}

],
  "Sweat": [ 
    {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img1.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},], 
  "Coats": [
    {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
   {src:"/categorydata/grid_img2.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
    ], 
    "Jeans": [
      {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
     {src:"/categorydata/grid_img3.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
    ],
    "Paddings":[
      {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
       {src:"/categorydata/grid_img4.png",name:'Lounded wide Sweat Shirt',price:'$ 36.50'},
    ]

};
interface StoreCategoryState {
  selectedCategory: string;
  images: ProductInfo[];
  selectCategory: (category: string)=>void;//선택된 인덱스를 매개변수로 받아서 상태 업데이트
}

const useCategoryStore = create<StoreCategoryState>(set => ({
  selectedCategory: "Sweat", // 기본 선택된 카테고리
  images: categoryImages["Sweat"], // 현재 선택된 카테고리에 해당하는 이미지 배열
  selectCategory: (category) => set({
    selectedCategory: category,
    images: categoryImages[category]
  })
}));

export default useCategoryStore;
