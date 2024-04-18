import { useEffect, useState } from "react";
import { fetchProductsByCategory } from '../../Hooks/FetchProduct/FetchProduct'
import Slider from "react-slick";
import ShareGridImg from "../Shared/GridImg/ShareGridImg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface SliderCompProps{
    categoryprops:string
}

interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    image: string;
  }
  
  interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }


  const NextArrow : React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={className}
        style={{ ...style, display:'block' ,top: "30%",right:'-7px',transform: "translateY(-75%)", zIndex: 25}}
        onClick={onClick}
      >
        <img src="/detaildata/arrowRight.svg"/>
      </div>
    );
  };
  
  const PrevArrow : React.FC<ArrowProps> = ({ className, style, onClick })=> {
    return (
      <div
        className={className}
        style={{ ...style, display: "block",top: "30%",transform: "translateY(-50%)", zIndex: 25}}
        onClick={onClick}
      >
        <img src="/detaildata/arrowLeft.svg"/>
      </div>
    );
  };

  const settings = {
    centerMode: true,
    centerPadding: '20px',
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4, 
    nextArrow: <NextArrow />, // 다음 화살표 
    prevArrow: <PrevArrow /> // 이전 화살표 
  };

const DetailSliderComp:React.FC<SliderCompProps>=({categoryprops})=>{
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetchProductsByCategory(categoryprops).then(setProducts).catch(console.error);
    }, [categoryprops]);

    return(
        <div style={{ width: '100%'}}>
            <Slider {...settings}>
                {products.map((product, index) => (

                            <ShareGridImg
                                key={index}
                                image={product.image}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                            />
                    ))}
            </Slider>
        </div>
    );

}

export default DetailSliderComp;