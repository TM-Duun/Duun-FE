import ShareGridImg from "../../Components/Shared/GridImg/ShareGridImg";
import styled from 'styled-components';

interface ProductsComponentProps {
  // categoryEndpoints: string;
  filteredProducts: Product[];
  showalert: (newData: boolean) => void;
}

interface Product {
  id: number;
  title: string;
  price: string;
  // category: string;
  image: string;
}

 const Gridmain=styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  padding-top: 20px;
  width: 100%;
`;

//상품데이터 받아서 보여주는 함수
const ProductsComponent: React.FC<ProductsComponentProps> = ({ filteredProducts,showalert }) => {

  return (
    <Gridmain>
      {filteredProducts.map((product,index) => (
         <ShareGridImg
          image={product.image}
          key={index}
          id={product.id}
          title={product.title}
          price={product.price}
          showalert={showalert}
          />
      ))}
    </Gridmain>
  );
};

export default ProductsComponent;
