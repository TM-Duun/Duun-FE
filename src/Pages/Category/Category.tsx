import styled from "styled-components";
import {Block,GridDiv,Sidebar,Cmain, SidebarCategory, GridHeader, BtnsDiv, Gridmain, GridImg, GridTextDiv, GridHeart, GridInImg, GridSpan, GridCart, SidebarText, ImgContainer, BtnDropDown} from "./CategoryStyles";
import { useState } from "react";
import  useStore from "../../Store/StoreCartBadge"

const CWrapper=styled.div`
    min-height : 250vh;
    display : flex;
    flex-direction: column;
    padding : 0px 200px;
    box-sizing: border-box;
`;

const categoryItems=[

  {name:"T-shirt",src:"/category/t-shirt"},
  {name:"Sweatshirt",src:"/category/sweatshirt"},
  {name:"Coats",src:"/category/coats"},
  {name:"Jeans",src:"/category/jeans"},
  {name:"Paddings", src:"/category/paddings"},
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

  const addItem=useStore(state=>state.addItem);

  const [isOpen,setIsOpen]=useState(false);
  const DropDown=()=>setIsOpen(!isOpen);

  const handleHeartClick=(event:React.MouseEvent<HTMLImageElement>)=>{
    event.stopPropagation();
    event.preventDefault();
  }
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
                  <SidebarText to={item.src}>
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
              <BtnsDiv>
                <button style={{width:"72px",marginRight:"20px"}}>조회 순</button>
                <button onClick={DropDown} style={{marginLeft:"20px", border:"none",backgroundColor:"#DBE3F8",position:"relative"}}>
                  <img src="/homedata/down_arrow.svg"/>
                </button>
                {isOpen && (
                    <BtnDropDown>
                      <li>조회 순</li>
                      <li >최신 순</li>    
                      <li>가격 높은 순</li>
                      <li>가격 낮은 순</li>
                    </BtnDropDown>
                  )}
              </BtnsDiv>
            </GridHeader>
            <Gridmain>
              {gridItems.map((item,index) =>{
                return(
                  <GridImg key={index}>
                    <ImgContainer to="/detail">
                        <GridHeart onClick={handleHeartClick} src="/heart.svg"/>
                      <GridInImg src="/categorydata/grid_img.png"/>
                    </ImgContainer>
                    <GridTextDiv>
                      <GridSpan>
                       {item.name}<br/>
                        <p>{item.cost}</p>
                      </GridSpan>
                      <GridCart onClick={addItem}>
                          <img src="/categorydata/category_cart.svg"/>
                      </GridCart>
                    </GridTextDiv>
                  </GridImg>
                )
              })}
            </Gridmain>
          </GridDiv>
        </Cmain>
    </CWrapper>
  )
}
