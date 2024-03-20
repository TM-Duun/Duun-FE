import { Link } from "react-router-dom";
import styled from "styled-components";

export const Block = styled.div`
    width : 100%;
    height : 80px;
    margin : 0;
    padding : 0;
    background-color : transparent;
`;
export const DeatailHeader = styled(Link)`
    margin-top: 40px;
    display: flex;
    width : 100%;
    img{
        margin-top: 1px;
        width: 18px;
        height: 6px;
    }
    text-decoration: none;
    color: black;
    font-family: 'pretendard';

`;
export const Back=styled.span`
    margin-left: 5px;
    font-size:12px;
`;

export const ItemDiv=styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    img{
        width : 40%;
        object-fit : contain;
    }
`;

export const ItemInfo = styled.div`
    font-family: 'Poppins';
    width: 60%;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    padding:5px 60px;

`;

export const InfoTextDiv=styled.div`
    height:40%;
    font-size: 16px;
    border-bottom: 1px solid #474747;
    padding-top: 20px;
`;
export const ProductsInfo = styled.div`
    margin-left: 10px;
    width:15%;
    line-height: 40px;

`;
export const PriceInfo = styled.span`
    margin-top: 20px;
    font-size:24px;

`;

export const BtnTotalDiv = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PurchaseBtn=styled.button`
    width: 45%;
    font-family: 'pretendard';
    font-size: 36px;
    border:none;
    height: 70%;
    color: white;
    background-color: #7C9DEF;
    border-radius: 20px;
    &:hover {
        cursor : pointer;
    }
`;
export const Total = styled.div`
    width: 30%;
    height: 80%;
    font-size: 40px;
    color: #626262;
    margin-left: auto;
    color:black;
`;

export const RecommendedItemDiv=styled.div`
    margin-top: 40px;
    justify-content: center;
    background-color: blue;
`