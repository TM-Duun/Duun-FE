import { Link } from "react-router-dom";
import styled from "styled-components";

export const CWrapper=styled.div`
    min-height : 250vh;
    width: 100%;
    display : flex;
    flex-direction: column;
    padding : 0px 200px;
    box-sizing: border-box;
`;
export const Block = styled.div`
    width : 100%;
    height : 80px;
    margin : 0;
    padding : 0;
    background-color : transparent;
`;
export const Cmain=styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;
export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width : 20%;
    height: 100%;
    margin-left: 20px;
`;
export const SidebarCategory = styled.div`
    margin-top: 30px;
    margin-left: 20px;
    span{
        font-size: 20px;
    }
`;

export const SidebarText = styled(Link)`
    color: #5F5F5F;
    text-decoration: none;
    font-size: 20px;
    &:hover {
        color:black;
    }
`;

export const GridDiv = styled.div`
    width:80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;
export const GridHeader = styled.div`
    display: flex;
    margin-top: 80px;
    span{
        font-size: 40px;
        color: #678EF2;
        font-weight: bold;
    }
`;
export const BtnsDiv=styled.div`
    /* display: flex; */
    /* width: 100%; */
    margin-left: auto;
    /* font-size: 16px; */
   /* button{
        height: 36px;
        width: 36px;
        border-radius: 10px;
        border: 0.5px solid #7C9DEF;
        background-color: white;
        &:hover {
        cursor : pointer;
        }
    } */
    img{
        width : 20px;
        height : 20px;
        margin : 0;
        object-fit : contain;
    }
`;
export const BtnDropDown = styled.ul`
    position:absolute;
    background-color:white;
    z-index: 5;
    list-style: none;
    padding-left: 0;
    li{
        border:1px solid black;
        padding: 10px;
        &:hover{
            background-color: #7C9DEF;
        }
    }
`;

export const NavMiddle = styled.div`
    position : relative;
    flex-grow : 1;
    height : 100%;
    padding : 0;
    margin : 0 20px 0 0;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-left: 20px;
`;

export const NavSearch = styled.input`
    width : 80%;
    height : 100%;
    margin : 0;
    padding : 10px 20px;
    box-sizing : border-box;
    display : flex;
    border-radius : 10px;
    border : none;
    outline : none;
    background-color : #F8F8F7;

    &::placeholder {
        color : #ccc;
    }
`;

export const SearchIcon = styled.img`
    position : absolute;
    top : 25%;
    right : 65px;
    width : 20px;
    height : 20px;
    object-fit : contain;
`;

export const Gridmain=styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px; 
    padding-top: 20px;
`;
export const GridImg=styled.div`
    width:200px;
    height: 250px;
    border: 1px solid black;
    border:1px solid #E5E5E5;
    border-radius: 20px;
    position: relative;
`;

export const ImgContainer=styled(Link)`

    position:absolute;
    width: 100%;
    height: 75%;
    border-radius: 20px 20px 0 0;
    background-color:#F4F2F2;
`;

export const GridInImg=styled.img`
    position: absolute;
    width:100%;
    height: 100%;
    object-fit: contain;
`;

export const GridHeart=styled.img`
    margin : 0;
    object-fit : contain;
    right: 15px;
    width: 25px;
    height: 25px;
    top:15px;
    position: absolute;
    z-index: 4;
    &:hover {
        cursor : pointer;
    }
`;
export const GridTextDiv=styled.div`
    position: absolute;
    width: 100%;
    height: 25%;
    background-color: white;
    border-radius: 0 0 20px 20px;
    bottom: 0px;
    display: flex;
    flex-direction: row;
`;
export const GridSpan=styled.div`
    width: 80%;
    height: 100%;
    font-size: 12px;
    margin-top: 8px;
    margin-left: 10px;
    font-weight: bold;
    line-height: 22px;
    p{
        font-size: 17px;
    }
`;

export const GridCart=styled.div`
    width: 20%;
    height: 100%;
    img{
        margin-top: 25px;
        height: 25px;
        width: 25px;
        &:hover {
        cursor : pointer;
        }   
    }
`;