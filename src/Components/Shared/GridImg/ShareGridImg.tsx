import styled from "styled-components";
import { GridCart, GridHeart, GridInImg, GridSpan, GridTextDiv, ImgContainer, NameCost } from "./GridImgStyled";
import useStoreHeart from "../../../Store/StoreHeartBadge";
import  useStore from "../../../Store/StoreCartBadge"
import useStoreCart from "../../../Store/StoreCart";
// import { Total } from "../../../Pages/Cart/CartStyles";

const GridImage=styled.div`
    width:200px;
    height: 250px;
    border:1px solid #E5E5E5;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
`;
interface ShareGridImgProps {
    id: number; // 숫자 타입으로 명시
    // isLiked: boolean; // boolean 타입으로 명시
    image: string; // 이미지 URL은 문자열
    title: string; // 상품명은 문자열
    price: string; // 가격도 문자열로 표현 (단위 포함 가능성 때문에)
    showalert?: (newData: boolean) => void;
  }
export default function ShareGridImg({ id,image,title,price,showalert}: ShareGridImgProps){

    const {likedItems,addLike,removeLike}=useStoreHeart();
    const addItem=useStore(state=>state.addItem);
    const isLiked = likedItems.some(item => item.id === id);
    const {cartItems,addCart}=useStoreCart();
    const isClicked=cartItems.some(item => item.id === id);

    const handleCartClick=()=>{
        const product={id,title,image,price};
        if (isClicked){
            console.log("이미 장바구니에 담겼습니다.");
            if (showalert) {
                showalert(true);
            }
        }
        else{
            addCart(product);
            addItem();
        }
    }


    const handleHeartClick=(event:React.MouseEvent<HTMLImageElement>)=>{
        event.stopPropagation();
        event.preventDefault();
        
        const product={id,title,image,price};

        if (isLiked) {
            removeLike(product);
        } else {
        addLike(product);
        }
      }

    return(
        <GridImage key={id}>
            <ImgContainer to={`/detail/${id}`}>
                <GridHeart onClick={(e)=>handleHeartClick(e)} src={ isLiked? "/categorydata/pull_heart.svg" :"/heart.svg"}/>
                <GridInImg src={image}/>
            </ImgContainer>
            <GridTextDiv>
                <NameCost>
                    <GridSpan>
                        {title}
                    </GridSpan>
                    <GridSpan>
                    <p>{`$`+price}</p>
                    </GridSpan>
                </NameCost>
                <GridCart onClick={()=>handleCartClick()}>
                    <img src="/categorydata/category_cart.svg"/>
                </GridCart>
            </GridTextDiv>
        </GridImage>
    )}