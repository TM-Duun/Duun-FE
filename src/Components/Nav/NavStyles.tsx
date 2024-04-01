import { Link } from "react-router-dom";
import styled from "styled-components";


export const Wrapper = styled.div`
    width : 100%;
    height : 8vh;
    position : absolute;
    top : 0;
    left : 0;
    padding : 0;
    margin : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    z-index : 100;
    overflow : hidden;
`;

export const NavContainer = styled.div`
    width : 75%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : space-between;
    z-index: 100;
`;

export const NavLeft = styled(Link)`
    flex-grow : 1;
    height : 100%;
    display : flex;
    align-items : center;
    margin : 0;
    padding : 0;
    text-decoration : none;

    &:hover {
        cursor : pointer;
    }
`;

export const LogoImg = styled.img`
    width : 70px;
    height : 70px;
    object-fit : contain;
`;

export const LogoTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    color : #7C9DEF;
`;

export const NavRight = styled.div`
    flex-grow : 1;
    height : 100%;
    display : flex;
    gap : 30px;
    justify-content : flex-end;
    align-items : center;
    margin : 0;
    padding : 0;
`;

export const NavItem = styled(Link)<{$isTarget? : boolean}>`
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    padding : 0;
    margin : 0;
    text-decoration : none;
    position: ${props => props.$isTarget ? 'relative' :'static'};
    &:hover {
        cursor : pointer;
    }
`;

export const CartBadge=styled.div`
    top: 0;
    position:absolute;
    height: 20px;
    left: 23px;
    border-radius:10px;
    width: 20px;
    text-align: center;
    background-color: red;
    color:white;
    font-size: 12px;
    line-height: 20px;
 `;

export const ItemImg = styled.img`
    width : 30px;
    height : 30px;
    margin : 0;
    padding : 0;
    object-fit : contain;
`;

export const ItemName = styled.p`
    font-size : 12px;
    font-weight : medium;
    font-family : 'pretendard';
    color : #7C9DEF;
    margin : 5px 0 0 0;
    padding : 0;
`;


export const LoginItem = styled(Link)`
    font-size : 24px;
    font-weight : 550;
    color : #7C9DEF;
    text-decoration : none;

    &:hover {
        cursor : pointer;
    }
`;
