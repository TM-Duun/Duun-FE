import styled from "styled-components";
import {Block,GridDiv,Sidebar,Cmain, SidebarCategory, GridHeader, BtnsDiv,
   SidebarText,NavMiddle, NavSearch, SearchIcon} from "./CategoryStyles";
import { Suspense, useEffect, useState } from "react";
import CategoryDropDown from "../../Components/DropDown/DropDown"
import _ from 'lodash';
import LoaderComponent from "../../Components/Loader/CircleLoader";
import ProductsComponent from "../../Components/ProductComp/ProductComp";
import { fetchProductsByCategory } from "../../Hooks/FetchProduct/FetchProduct";


interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
  // index: number;
}

interface CategoryItem {
  name: string;
  endpoint: string;
}

const CWrapper=styled.div`
    min-height : 250vh;
    display : flex;
    flex-direction: column;
    padding : 0px 200px;
    width: 100%;
`;


const categoryItems: CategoryItem[]=[
  {name:"T-shirt", endpoint: "women's clothing"},
  {name:"Sweat", endpoint: "jewelery"},
  {name:"Coats",endpoint: "electronics"},
  {name:"Jeans",endpoint: "jewelery"},
  {name:"Paddings",endpoint: "men's clothing"},
]

export default function Category(){

  const [selectedCategory, setSelectedCategory] = useState<string>('Sweat');
  const [searchValue , setSearchValue] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]); // 상품 데이터를 저장할 상태
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // 검색 결과를 저장할 상태
  const [isLoading, setIsLoading] = useState(false);

  //선택된 카테고리 이름으로 가져올 카테고리 endpoint찾기
  const categoryEndpoints = categoryItems.find(item => item.name === selectedCategory)?.endpoint || "";

  // 상품 데이터를 가져오는 함수
  useEffect(() => {
  if (categoryEndpoints) {
    setIsLoading(true);  
    fetchProductsByCategory(categoryEndpoints)
      .then(data => {
        setIsLoading(false);
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }
  }, [categoryEndpoints]); 

  
  const handleCategoryClick = (index: number) => {
    const category = categoryItems[index];
    setSelectedCategory(category.name);
  };


  // Debounce를 적용한 검색 로직
  useEffect(() => {
    const debouncedSearch = _.debounce(() => {
      const searchResults = products.filter(product =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(searchResults);
    }, 500);

    if (searchValue.trim()) {
      debouncedSearch();
    } else {
      setFilteredProducts(products); // 검색어가 비어있을 때 모든 상품을 보여줌
    }
    // 컴포넌트 언마운트 시 디바운스 함수 취소
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchValue, products]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };



  //장바구니 중복 알림창 상태
  const [data, setData] = useState(false);

  const handleDataChange = (newData:boolean) => {
      setData(newData);
  };
  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setData(false);//3초 후 숨김
      }, 500);
    }
  }, [data]); 

  if (isLoading) {
    return <LoaderComponent />;  // 로딩 중 로더 컴포넌트 표시
  }

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
                      style={{color: selectedCategory === item.name ? 'black' : '' }}
                      >
                    {item.name}
                  </SidebarText>
                </li>
              )}
            </ul>
            </SidebarCategory>
          </Sidebar>
          <GridDiv>
            <GridHeader>
              <span style={{width:'20%'}}>{selectedCategory || 'Sweat'}</span>
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
              {/* <Suspense fallback={<LoaderComponent/>}> */}
                <ProductsComponent filteredProducts={filteredProducts} showalert={handleDataChange}/>
                {data&&<div style={{color:'white',position:'absolute',top:'70%',left:'50%',transform: 'translate(-50%, -50%)',backgroundColor:'#3D5AF1',fontWeight:'bold',padding:'10px',borderRadius:'20px'}}>이미 장바구니에 담겼습니다.</div>}
              {/* </Suspense> */}
          </GridDiv>
        </Cmain>
    </CWrapper>
  )
}
