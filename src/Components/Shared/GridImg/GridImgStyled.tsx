import { Link } from "react-router-dom";
import styled from "styled-components";

export const ImgContainer=styled(Link)`
    position:absolute;
    width: 100%;
    height:75%;
    border-radius: 20px 20px 0 0;
    /* background-color:#F4F2F2; */
    background-color:inherit;
`;

export const GridInImg=styled.img`
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -45%);
    width:90%;
    height: 75%;
    object-fit: contain;
`;

export const GridHeart=styled.img`
    margin : 0;
    object-fit : contain;
    right: 12%;
    width: 12%;
    height: 12%;
    top:5%;
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
    border-top: 1px solid #E5E5E5;
`;
export const NameCost=styled.div`
    width : 100%;
    white-space: nowrap; 
    overflow: hidden; 
`;
export const GridSpan=styled.div`
    width:auto;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
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
    margin-left: auto;
    margin-right: 10px;
    width:auto;
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