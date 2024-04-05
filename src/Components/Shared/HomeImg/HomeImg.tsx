import styled from "styled-components";
import { GridHeart, GridInImg,ImgContainer } from "./HomeImgStyles";
import useStoreHeart from "../../../Store/StoreHeartBadge";

const GridImage=styled.div`
    width:100%;
    height: 100%;
    border:none;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
`;

interface ShareGridImgProps {
    index: number; // 숫자 타입으로 명시
    image: string; // 이미지 URL은 문자열
    name: string; // 상품명은 문자열
    price: string; // 가격도 문자열로 표현 (단위 포함 가능성 때문에)
  }

export default function ShareGridImg({index,image,name,price}: ShareGridImgProps){

    const {likedItems,addLike,removeLike}=useStoreHeart();
    // const addItem=useStore(state=>state.addItem);
    const isLiked = likedItems.some(item => item.index === index);

    const handleHeartClick=(event:React.MouseEvent<HTMLImageElement>)=>{
        event.stopPropagation();
        event.preventDefault();

        const product={index,image,name,price};

        if (isLiked) {
            removeLike(product);
        } else {
        addLike(product);
        }
      }

    return(
        <GridImage key={index}>
        <ImgContainer>
            <GridHeart onClick={(e)=>handleHeartClick(e)} src={isLiked ? "/categorydata/pull_heart.svg" :"/heart.svg"}/>
            <GridInImg src={image}/>
        </ImgContainer>
        </GridImage>
    )}