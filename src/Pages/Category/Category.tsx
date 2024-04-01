import styled from "styled-components";
import {Block,GridDiv,Sidebar,Cmain, SidebarCategory, GridHeader, BtnsDiv, Gridmain,
   SidebarText,NavMiddle, NavSearch, SearchIcon} from "./CategoryStyles";
import { useState } from "react";
import  useStoreHeart from "../../Store/StoreHeartBadge"
import CategoryDropDown from "../../Components/DropDown/DropDown"
import ShareGridImg from "../../Components/Shared/GridImg/ShareGridImg";
import useCategoryStore from "../../Store/StoreCategory";
import constructWithOptions from "styled-components/dist/constructors/constructWithOptions";


const CWrapper=styled.div`
    min-height : 250vh;
    display : flex;
    flex-direction: column;
    padding : 0px 200px;
    width: 100%;
`;

const categoryItems=[

  {name:"T-shirt"},
  {name:"Sweatshirt"},
  {name:"Coats"},
  {name:"Jeans"},
  {name:"Paddings"},
]
const gridItems = [
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
]
// 카테고리 페이지
export default function Category(){
  const { selectCategory, images } = useCategoryStore();

  const [searchValue , setSearchValue] = useState("");
  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const {likedItems}=useStoreHeart();
  return (
    <CWrapper>
        <Block></Block>
        <Cmain>
          <Sidebar>
            <span style={{fontSize:"24px",fontWeight:"bold",marginTop:"80px"}}>Category</span>
            <SidebarCategory>
            <ul style={{ marginBottom: "20px" ,padding:"0",marginLeft:"10px"}}>
              {categoryItems.map((item, index) =>
                <li style={{ listStyleType: "none", marginBottom: "20px" }} key={index}>
                  <SidebarText key={index} to="#" onClick={()=>selectCategory(item.name)} >
                    {item.name}
                  </SidebarText>
                </li>
              )}
            </ul>
            </SidebarCategory>
          </Sidebar>
          <GridDiv>
            <GridHeader>
              <span>Sweatshirt</span>
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
                {images.map((item,index) =>{
                  console.log(images)
                  const isLiked = likedItems.includes(index);
                  return(
                    <ShareGridImg
                      image={item}
                      key={index}
                      // item={item}
                      index={index}
                      isLiked={isLiked}
                      />
                  )
                })}
              </>
            </Gridmain>
          </GridDiv>
        </Cmain>
    </CWrapper>
  )
}
