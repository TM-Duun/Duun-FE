import styled from "styled-components";
import { GridCart, GridHeart, GridInImg, GridSpan, GridTextDiv, ImgContainer, NameCost } from "./GridImgStyled";
import useStoreHeart from "../../../Store/StoreHeartBadge";
import  useStore from "../../../Store/StoreCartBadge"

const GridImage=styled.div`
    width:100%;
    height: 250px;
    border:1px solid #E5E5E5;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
`;
interface ShareGridImgProps {
    index: number; // 숫자 타입으로 명시
    // isLiked: boolean; // boolean 타입으로 명시
    image: string; // 이미지 URL은 문자열
    name: string; // 상품명은 문자열
    price: string; // 가격도 문자열로 표현 (단위 포함 가능성 때문에)
  }
export default function ShareGridImg({ index,image,name,price}: ShareGridImgProps){

    const {likedItems,addLike,removeLike}=useStoreHeart();
    const addItem=useStore(state=>state.addItem);
    const isLiked = likedItems.some(item => item.index === index);

    const handleHeartClick=(event:React.MouseEvent<HTMLImageElement>)=>{
        event.stopPropagation();
        event.preventDefault();
        
        const product={index,name,image,price};
        // const isAlreadyLiked=likedItems.includes(index);
        // const isAlreadyLiked = likedItems.some((item) => item.index === index);
            if (isLiked) {
                removeLike(product);
            } else {
            addLike(product);
            }
        console.log(likedItems)
      }

    return(
        <GridImage key={index}>
            <ImgContainer to={`/detail/${index}`}>
                <GridHeart onClick={(e)=>handleHeartClick(e)} src={ isLiked? "/categorydata/pull_heart.svg" :"/heart.svg"}/>
                <GridInImg src={image}/>
            </ImgContainer>
            <GridTextDiv>
                <NameCost>
                    <GridSpan>
                        {name}
                    </GridSpan>
                    <GridSpan>
                    <p>{`$`+price}</p>
                    </GridSpan>
                </NameCost>
                <GridCart onClick={addItem}>
                    <img src="/categorydata/category_cart.svg"/>
                </GridCart>
            </GridTextDiv>
        </GridImage>
    )}