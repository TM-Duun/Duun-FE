import styled from "styled-components";
import { GridCart, GridHeart, GridInImg, GridSpan, GridTextDiv, ImgContainer } from "./GridImgStyled";
import useStoreHeart from "../../../Store/StoreHeartBadge";
import  useStore from "../../../Store/StoreCartBadge"

const GridImage=styled.div`
    width:100%;
    height: 250px;
    border:1px solid #E5E5E5;
    border-radius: 20px;
    position: relative;
`;
export default function ShareGridImg({ index,isLiked,image}){

    const {likedItems,addLike,removeLike}=useStoreHeart();
    const addItem=useStore(state=>state.addItem);

    const handleHeartClick=(event:React.MouseEvent<HTMLImageElement>,index:number)=>{
        event.stopPropagation();
        event.preventDefault();
    
        const isAlreadyLiked=likedItems.includes(index);
        if (isAlreadyLiked) {
            removeLike(index);
        } else {
          addLike(index);
        }
      }

    return(
        <GridImage key={index}>
        <ImgContainer to="/detail">
            <GridHeart onClick={(e)=>handleHeartClick(e,index)} src={isLiked ? "/categorydata/pull_heart.svg" :"/heart.svg"}/>
            <GridInImg src={image}/>
        </ImgContainer>
        <GridTextDiv>
            <GridSpan>
            {/* {item.name}<br/>
            <p>{item.cost}</p> */}
            </GridSpan>
            <GridCart onClick={addItem}>
                <img src="/categorydata/category_cart.svg"/>
            </GridCart>
        </GridTextDiv>
        </GridImage>
    )}