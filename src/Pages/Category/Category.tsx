import styled from "styled-components";
import {Block,GridDiv,Sidebar,Cmain, SidebarCategory, GridHeader, BtnsDiv, Gridmain,
   SidebarText,NavMiddle, NavSearch, SearchIcon} from "./CategoryStyles";
import { useEffect, useState } from "react";
import CategoryDropDown from "../../Components/DropDown/DropDown"
import ShareGridImg from "../../Components/Shared/GridImg/ShareGridImg";
import axios from "axios";

const CWrapper=styled.div`
    min-height : 250vh;
    display : flex;
    flex-direction: column;
    padding : 0px 200px;
    width: 100%;
`;

const categoryItems=[
  {name:"T-shirt", endpoint: ["women's clothing"]},
  {name:"Sweat", endpoint: ["jewelery"]},
  {name:"Coats",endpoint: ["electronics"]},
  {name:"Jeans",endpoint: ["jewelery"]},
  {name:"Paddings",endpoint: ["men's clothing"]},
]

interface Product {
  id: number;
  title: string;
  price: string;
  // category: string;
  image: string;
}

export default function Category(){

  // const { selectCategory, images } = useCategoryStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('Sweat');
  const [searchValue , setSearchValue] = useState("");
  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const [selectedName, setSelectedName] = useState('Sweat');
  const [products, setProducts] = useState<Product[]>([]); // 상품 데이터를 저장할 상태

  useEffect(() => {
    // 상품 데이터를 가져오는 함수
    const fetchProducts = async () => {

      try {

        const selectedEndpoints = categoryItems.find(item => item.name === selectedCategory)?.endpoint || [];
        const requests = selectedEndpoints.map(endpoint =>
          axios.get<Product[]>(`https://fakestoreapi.com/products/category/${encodeURIComponent(endpoint)}`)
        );

        const responses = await Promise.all(requests);
        const fetchedProducts = responses.flatMap(response => response.data);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryClick = (index: number) => {
    const category = categoryItems[index];
    setSelectedCategory(category.name);
    setSelectedName(category.name);
  };

  return (
    <CWrapper>
        <Block></Block>
        <Cmain>
          <Sidebar>
            <span style={{fontSize:"24px",fontWeight:"bold"}}>Category</span>
            <SidebarCategory>
            <ul style={{ marginBottom: "20px" ,padding:"0",marginLeft:"10px"}}>
              {categoryItems.map((item, index) =>
                <li style={{ listStyleType: "none", marginBottom: "20px" }} onClick={() => handleCategoryClick(index)} key={index}>
                  <SidebarText 
                      key={index} 
                      to="#" 
                      style={{color: selectedName === item.name ? 'black' : '' }}
                      onClick={()=>{
                        setSelectedName(item.name);
                      }}>
                    {item.name}
                  </SidebarText>
                </li>
              )}
            </ul>
            </SidebarCategory>
          </Sidebar>
          <GridDiv>
            <GridHeader>
              <span style={{width:'20%'}}>{selectedName || 'Sweat'}</span>
              <NavMiddle>
                <NavSearch
                  type="text"
                  placeholder="Search the Items"
                  value = { searchValue }
                  onChange={onSearchChange}
                  />
                <SearchIcon src="/searchIcon.svg"/>
              </NavMiddle>
              <BtnsDiv>
                <CategoryDropDown/>
              </BtnsDiv>
            </GridHeader>
            <Gridmain>
              <>
                {products.map((item,index) =>{
                  return(
                    <ShareGridImg
                      image={item.image}
                      key={index}
                      index={item.id}
                      name={item.title}
                      price={item.price}
                      />
                  )})}
              </>
            </Gridmain>
          </GridDiv>
        </Cmain>
    </CWrapper>
  )
}
